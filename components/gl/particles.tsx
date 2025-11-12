"use client"

import * as THREE from "three"
import { useMemo, useState, useRef, useCallback } from "react"
import { createPortal, useFrame } from "@react-three/fiber"
import { useFBO } from "@react-three/drei"

import { DofPointsMaterial } from "./shaders/pointMaterial"
import { SimulationMaterial } from "./shaders/simulationMaterial"
import * as easing from "maath/easing"

export function Particles({
  speed,
  aperture,
  focus,
  size = 1000,
  noiseScale = 1.0,
  noiseIntensity = 0.5,
  timeScale = 0.5,
  pointSize = 0.5,
  opacity = 0.5,
  planeScale = 1.0,
  useManualTime = false,
  manualTime = 0,
  introspect = false,
  mousePosition = { x: 0, y: 0 },
  clickRipples = [],
  backgroundClickCenter = null,
  backgroundClickProgress = 0,
  ...props
}: {
  speed: number
  aperture: number
  focus: number
  size: number
  noiseScale?: number
  noiseIntensity?: number
  timeScale?: number
  pointSize?: number
  opacity?: number
  planeScale?: number
  useManualTime?: boolean
  manualTime?: number
  introspect?: boolean
  mousePosition?: { x: number; y: number }
  clickRipples?: Array<{ x: number; y: number; time: number }>
  backgroundClickCenter?: { x: number; y: number } | null
  backgroundClickProgress?: number
}) {
  const revealStartTime = useRef<number | null>(null)
  const [isRevealing, setIsRevealing] = useState(true)
  const revealDuration = 3.5

  const simulationMaterial = useMemo(() => {
    return new SimulationMaterial(planeScale)
  }, [planeScale])

  const target = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType,
  })

  const dofPointsMaterial = useMemo(() => {
    const m = new DofPointsMaterial()
    m.uniforms.positions.value = target.texture
    m.uniforms.initialPositions.value = simulationMaterial.uniforms.positions.value
    return m
  }, [simulationMaterial, target.texture])

  const [scene] = useState(() => new THREE.Scene())
  const [camera] = useState(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1))
  const [positions] = useState(() => new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0]))
  const [uvs] = useState(() => new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]))

  const particles = useMemo(() => {
    const length = size * size
    const particles = new Float32Array(length * 3)
    for (let i = 0; i < length; i++) {
      const i3 = i * 3
      particles[i3 + 0] = (i % size) / size
      particles[i3 + 1] = i / size / size
    }
    return particles
  }, [size])

  const frameCallback = useCallback(
    (state: any, delta: number) => {
      if (!dofPointsMaterial || !simulationMaterial) return

      state.gl.setRenderTarget(target)
      state.gl.clear()
      state.gl.render(scene, camera)
      state.gl.setRenderTarget(null)

      const currentTime = useManualTime ? manualTime : state.clock.elapsedTime

      if (revealStartTime.current === null) {
        revealStartTime.current = currentTime
      }

      const revealElapsed = currentTime - revealStartTime.current
      const revealProgress = Math.min(revealElapsed / revealDuration, 1.0)
      const easedProgress = 1 - Math.pow(1 - revealProgress, 3)
      const revealFactor = easedProgress * 5.0

      if (revealProgress >= 1.0 && isRevealing) {
        setIsRevealing(false)
      }

      dofPointsMaterial.uniforms.uTime.value = currentTime
      dofPointsMaterial.uniforms.uFocus.value = focus
      dofPointsMaterial.uniforms.uBlur.value = aperture

      easing.damp(
        dofPointsMaterial.uniforms.uTransition,
        "value",
        introspect ? 1.0 : 0.0,
        introspect ? 0.35 : 0.2,
        delta,
      )

      simulationMaterial.uniforms.uMousePosition.value.set(mousePosition.x, mousePosition.y)

      const rippleData = new Float32Array(clickRipples.length * 4)
      clickRipples.forEach((ripple, i) => {
        const age = (currentTime * 1000 - ripple.time) / 1000
        const intensity = Math.max(0, 1 - age / 3)
        rippleData[i * 4] = ripple.x
        rippleData[i * 4 + 1] = ripple.y
        rippleData[i * 4 + 2] = age
        rippleData[i * 4 + 3] = intensity
      })
      simulationMaterial.uniforms.uClickRipples.value = rippleData
      simulationMaterial.uniforms.uClickRippleCount.value = clickRipples.length

      simulationMaterial.uniforms.uTime.value = currentTime
      simulationMaterial.uniforms.uNoiseScale.value = noiseScale
      simulationMaterial.uniforms.uNoiseIntensity.value = noiseIntensity
      simulationMaterial.uniforms.uTimeScale.value = timeScale * speed

      dofPointsMaterial.uniforms.uPointSize.value = pointSize
      dofPointsMaterial.uniforms.uOpacity.value = opacity
      dofPointsMaterial.uniforms.uRevealFactor.value = revealFactor
      dofPointsMaterial.uniforms.uRevealProgress.value = easedProgress

      dofPointsMaterial.uniforms.uMousePosition.value.set(mousePosition.x, mousePosition.y)

      if (backgroundClickCenter) {
        dofPointsMaterial.uniforms.uBackgroundClickCenter.value.set(backgroundClickCenter.x, backgroundClickCenter.y)
        dofPointsMaterial.uniforms.uHasBackgroundClick.value = 1.0
        dofPointsMaterial.uniforms.uBackgroundClickProgress.value = backgroundClickProgress
      } else {
        dofPointsMaterial.uniforms.uHasBackgroundClick.value = 0.0
        dofPointsMaterial.uniforms.uBackgroundClickProgress.value = 0.0
      }
    },
    [
      dofPointsMaterial,
      simulationMaterial,
      target,
      scene,
      camera,
      useManualTime,
      manualTime,
      focus,
      aperture,
      introspect,
      mousePosition,
      clickRipples,
      noiseScale,
      noiseIntensity,
      timeScale,
      speed,
      pointSize,
      opacity,
      backgroundClickCenter,
      backgroundClickProgress,
      isRevealing,
      revealDuration,
    ],
  )

  useFrame(frameCallback)

  return (
    <>
      {createPortal(
        <mesh material={simulationMaterial}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            <bufferAttribute attach="attributes-uv" args={[uvs, 2]} />
          </bufferGeometry>
        </mesh>,
        scene,
      )}
      <points material={dofPointsMaterial} {...props}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
      </points>
    </>
  )
}
