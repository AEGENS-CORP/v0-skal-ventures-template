import { Effects } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Particles } from "./particles"
import { VignetteShader } from "./shaders/vignetteShader"

export const GL = ({
  hovering,
  mousePosition,
  clickRipples,
  backgroundClickCenter,
  backgroundClickProgress,
}: {
  hovering: boolean
  mousePosition: { x: number; y: number }
  clickRipples: Array<{ x: number; y: number; time: number }>
  backgroundClickCenter: { x: number; y: number } | null
  backgroundClickProgress: number // Added backgroundClickProgress prop
}) => {
  const config = {
    speed: 1,
    focus: 3.8,
    aperture: 1.79,
    size: 512,
    noiseScale: 0.6,
    noiseIntensity: 0.52,
    timeScale: 1,
    pointSize: 10,
    opacity: 0.8,
    planeScale: 10,
    vignetteDarkness: 1.5,
    vignetteOffset: 0.4,
    useManualTime: false,
    manualTime: 0,
  }
  return (
    <div id="webgl">
      <Canvas
        camera={{
          position: [1.2629783123314589, 2.664606471394044, -1.8178993743288914],
          fov: 50,
          near: 0.01,
          far: 300,
        }}
      >
        {/* <Perf position="top-left" /> */}
        <color attach="background" args={["#000"]} />
        <Particles
          speed={config.speed}
          aperture={config.aperture}
          focus={config.focus}
          size={config.size}
          noiseScale={config.noiseScale}
          noiseIntensity={config.noiseIntensity}
          timeScale={config.timeScale}
          pointSize={config.pointSize}
          opacity={config.opacity}
          planeScale={config.planeScale}
          useManualTime={config.useManualTime}
          manualTime={config.manualTime}
          introspect={hovering}
          mousePosition={mousePosition}
          clickRipples={clickRipples}
          backgroundClickCenter={backgroundClickCenter}
          backgroundClickProgress={backgroundClickProgress}
        />
        <Effects multisampling={0} disableGamma>
          <shaderPass
            args={[VignetteShader]}
            uniforms-darkness-value={config.vignetteDarkness}
            uniforms-offset-value={config.vignetteOffset}
          />
        </Effects>
      </Canvas>
    </div>
  )
}
