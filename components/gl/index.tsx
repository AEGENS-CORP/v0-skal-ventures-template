"use client"

import { Effects } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Particles } from "./particles"
import { VignetteShader } from "./shaders/vignetteShader"
import { useState, useEffect } from "react"

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
  backgroundClickProgress: number
}) => {
  const [hasWebGLError, setHasWebGLError] = useState(false)
  const [isWebGLSupported, setIsWebGLSupported] = useState(true)

  useEffect(() => {
    console.log("[v0] GL component mounted")

    // Check if WebGL is supported
    const canvas = document.createElement("canvas")
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")

    console.log("[v0] WebGL context:", gl ? "available" : "not available")
    console.log("[v0] User agent:", navigator.userAgent)
    console.log("[v0] Is iOS:", /iPad|iPhone|iPod/.test(navigator.userAgent))

    if (!gl) {
      console.warn("[v0] WebGL not supported, falling back to black background")
      setIsWebGLSupported(false)
    } else {
      console.log("[v0] WebGL is supported, attempting to render particles")
    }
  }, [])

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

  // If WebGL is not supported or has error, just return a black background
  if (!isWebGLSupported || hasWebGLError) {
    console.log("[v0] Showing fallback background")
    return <div id="webgl" style={{ width: "100%", height: "100%", background: "#000" }} />
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
        onCreated={({ gl }) => {
          console.log("[v0] Canvas created successfully")
          console.log("[v0] WebGL renderer:", gl)
          // Enable iOS compatibility settings
          gl.powerPreference = "high-performance"
          gl.antialias = false
        }}
        onError={(error) => {
          console.error("[v0] WebGL error:", error)
          setHasWebGLError(true)
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
        }}
      >
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
