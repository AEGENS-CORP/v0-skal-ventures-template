import * as THREE from "three"
import { periodicNoiseGLSL } from "./utils"

// Function to generate equally distributed points on a plane
function getPlane(count: number, components: number, size = 512, scale = 1.0) {
  const length = count * components
  const data = new Float32Array(length)

  for (let i = 0; i < count; i++) {
    const i4 = i * components

    // Calculate grid position
    const x = (i % size) / (size - 1) // Normalize to [0, 1]
    const z = Math.floor(i / size) / (size - 1) // Normalize to [0, 1]

    // Convert to centered coordinates [-0.5, 0.5] and apply scale
    data[i4 + 0] = (x - 0.5) * 2 * scale // X position: scaled range
    data[i4 + 1] = 0 // Y position: flat plane at y=0
    data[i4 + 2] = (z - 0.5) * 2 * scale // Z position: scaled range
    data[i4 + 3] = 1.0 // W component (for RGBA texture)
  }

  return data
}

export class SimulationMaterial extends THREE.ShaderMaterial {
  constructor(scale = 10.0) {
    const positionsTexture = new THREE.DataTexture(
      getPlane(512 * 512, 4, 512, scale),
      512,
      512,
      THREE.RGBAFormat,
      THREE.FloatType,
    )
    positionsTexture.needsUpdate = true

    super({
      vertexShader: /* glsl */ `varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
      fragmentShader: /* glsl */ `uniform sampler2D positions;
      uniform float uTime;
      uniform float uNoiseScale;
      uniform float uNoiseIntensity;
      uniform float uTimeScale;
      uniform float uLoopPeriod;
      uniform vec2 uMousePosition;
      uniform float uClickRipples[40]; // Max 10 ripples * 4 components (x, y, time, intensity)
      uniform int uClickRippleCount;
      varying vec2 vUv;

      ${periodicNoiseGLSL}

      void main() {
        // Get the original particle position
        vec3 originalPos = texture2D(positions, vUv).rgb;
        
        // Use continuous time that naturally loops through sine/cosine periodicity
        float continuousTime = uTime * uTimeScale * (6.28318530718 / uLoopPeriod);
        
        // Scale position for noise input
        vec3 noiseInput = originalPos * uNoiseScale;
        
        // Generate periodic displacement for each axis using different phase offsets
        float displacementX = periodicNoise(noiseInput + vec3(0.0, 0.0, 0.0), continuousTime);
        float displacementY = periodicNoise(noiseInput + vec3(50.0, 0.0, 0.0), continuousTime + 2.094); // +120°
        float displacementZ = periodicNoise(noiseInput + vec3(0.0, 50.0, 0.0), continuousTime + 4.188); // +240°
        
        vec2 mouseForce = vec2(0.0);
        float mouseDistance = distance(originalPos.xz, uMousePosition * 5.0); // Scale mouse position to world space
        if (mouseDistance < 10.0) {
          float mouseInfluence = 1.0 - smoothstep(0.0, 1.0, mouseDistance);
          vec2 mouseDirection = normalize(originalPos.xz - uMousePosition * 5.0);
          mouseForce = mouseDirection * mouseInfluence * 0.3; // Repulsion force
        }
        
        vec2 rippleForce = vec2(0.0);
        for (int i = 0; i < 10; i++) {
          if (i >= uClickRippleCount) break;
          
          int baseIndex = i * 4;
          vec2 ripplePos = vec2(uClickRipples[baseIndex], uClickRipples[baseIndex + 1]) * 5.0;
          float rippleAge = uClickRipples[baseIndex + 2];
          float rippleIntensity = uClickRipples[baseIndex + 3];
          
          float rippleDistance = distance(originalPos.xz, ripplePos);
          float waveRadius = rippleAge * 4.0; // Wave travels at 4 units per second
          
          // Create expanding wave effect
          float waveInfluence = exp(-abs(rippleDistance - waveRadius) * 2.0) * rippleIntensity;
          if (waveInfluence > 0.01) {
            vec2 rippleDirection = normalize(originalPos.xz - ripplePos);
            rippleForce += rippleDirection * waveInfluence * 1.5;
          }
        }
        
        // Apply distortion to original position
        vec3 distortion = vec3(displacementX, displacementY, displacementZ) * uNoiseIntensity;
        distortion.x += mouseForce.x + rippleForce.x;
        distortion.z += mouseForce.y + rippleForce.y;
        
        vec3 finalPos = originalPos + distortion;
        
        gl_FragColor = vec4(finalPos, 1.0);
      }`,
      uniforms: {
        positions: { value: positionsTexture },
        uTime: { value: 0 },
        uNoiseScale: { value: 1.0 },
        uNoiseIntensity: { value: 0.5 },
        uTimeScale: { value: 1 },
        uLoopPeriod: { value: 24.0 },
        uMousePosition: { value: new THREE.Vector2(0, 0) },
        uClickRipples: { value: new Float32Array(40) }, // Max 10 ripples * 4 components
        uClickRippleCount: { value: 0 },
      },
    })
  }
}
