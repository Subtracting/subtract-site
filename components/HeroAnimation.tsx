'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const vertexShader = `
  uniform float time;
  uniform float radius;
  varying float vHeight;

  float noise2D(float x, float y, float time) {
      float value = 0.0;
      float amplitude = 1.0;
      float frequency = 0.9;

      for (int i = 0; i < 4; i++) {
          value += sin((x + time * 0.5) * frequency) * cos((y + time * 0.3) * frequency) * amplitude;
          value += sin((x * 1.5 + time * 0.7) * frequency) * cos((y * 1.2 + time * 0.4) * frequency) * amplitude * 30.5;
          amplitude *= 0.5;
          frequency *= 2.0;
      }

      value += sin(x * 0.1 + time * 0.1) * cos(y * 0.1 + time * 0.15) * 0.3;

      return value;
  }

  void main() {
      float nx = position.x * 0.05;
      float ny = position.y * 0.05;

      float noiseValue = noise2D(nx, ny, time);
      float waveEffect = sin(position.x * 5.05 + time * 0.3);
      float displacement = (noiseValue * 0.3 + waveEffect * 8.0);

      vec3 newPosition = normalize(position) * (radius + displacement);

      vHeight = clamp(displacement / 10.0, 0.0, 1.0);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`

const fragmentShader = `
  varying float vHeight;
  uniform vec3 baseColor;
  uniform float glowIntensity;
  uniform float highlightStrength;

  vec3 getSubtleHighlights(float value) {
      float r = sin(value * 6.28318 + 0.0) * 0.5 + 0.5;
      float g = sin(value * 6.28318 + 2.0) * 0.5 + 0.5;
      float b = sin(value * 6.28318 + 4.0) * 0.5 + 0.5;
      return vec3(r, g, b);
  }

  void main() {
    vec3 monochromeColor = vec3(vHeight);
    vec3 highlightColor = getSubtleHighlights(vHeight);
    vec3 mixedColor = mix(monochromeColor, highlightColor, highlightStrength);
    vec3 finalColor = mix(baseColor, mixedColor, pow(vHeight, glowIntensity));
    gl_FragColor = vec4(finalColor, 1.0);
  }
`

export default function HeroAnimation() {
    const mountRef = useRef<HTMLDivElement>(null)
    const animationRef = useRef<number | null>(null)
    const timeRef = useRef<number>(0)

    useEffect(() => {
        if (!mountRef.current) return

        const size = 60
        const segments = 128
        const radius = size

        const canvasWidth = 450
        const canvasHeight = 450

        const scene = new THREE.Scene()
        scene.background = null

        const camera = new THREE.PerspectiveCamera(
            75,
            canvasWidth / canvasHeight,
            0.1,
            1000
        )
        camera.position.z = 140

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(canvasWidth, canvasHeight)
        mountRef.current.appendChild(renderer.domElement)

        const uniforms = {
            time: { value: 0 },
            radius: { value: radius },
            baseColor: { value: new THREE.Color(0x241314) },
            glowIntensity: { value: 2.0 },
            highlightStrength: { value: 0.5 }
        }

        const material = new THREE.ShaderMaterial({
            uniforms,
            vertexShader,
            fragmentShader,
        })

        const geometry = new THREE.SphereGeometry(radius, segments, segments)
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        function animate() {
            timeRef.current += 0.01
            uniforms.time.value = timeRef.current

            mesh.rotation.x += 0.001
            mesh.rotation.y += 0.001

            renderer.render(scene, camera)
            animationRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
            if (mountRef.current && renderer.domElement)
                mountRef.current.removeChild(renderer.domElement)
            geometry.dispose()
            material.dispose()
            renderer.dispose()
        }
    }, [])

    return <div ref={mountRef} style={{ width: '450px', height: '450px' }} />
}

