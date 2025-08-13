'use client'

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function noise2D(x: number, y: number, time = 0) {
    let value = 0;
    let amplitude = 1;
    let frequency = 0.9;

    for (let i = 0; i < 4; i++) {
        value += Math.sin((x + time * 0.5) * frequency) * Math.cos((y + time * 0.3) * frequency) * amplitude;
        value += Math.sin((x * 1.5 + time * 0.7) * frequency) * Math.cos((y * 1.2 + time * 0.4) * frequency) * amplitude * 30.5;
        amplitude *= 0.5;
        frequency *= 2;
    }

    value += Math.sin(x * 0.1 + time * 0.1) * Math.cos(y * 0.1 + time * 0.15) * 0.3;

    return value;
}

const vertexShader = `
  varying float vHeight;
  attribute float displacement;

  void main() {
    vHeight = clamp(displacement / 10.0, 0.0, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

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
`;

export default function HeroAnimation() {
    const mountRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);
    const timeRef = useRef<number>(0);
    const originalPositionsRef = useRef<Float32Array | null>(null);
    const displacementsRef = useRef<Float32Array | null>(null);
    const meshRef = useRef<THREE.Mesh | null>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const size = 60;
        const segments = 128
        const radius = size;

        const canvasWidth = 450;
        const canvasHeight = 450;

        const scene = new THREE.Scene();
        scene.background = null;

        const camera = new THREE.PerspectiveCamera(
            75,
            canvasWidth / canvasHeight,
            0.1,
            1000
        );
        camera.position.z = 140;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(canvasWidth, canvasHeight);

        mountRef.current.appendChild(renderer.domElement);

        const uniforms = {
            baseColor: { value: new THREE.Color(0x241314) },
            glowIntensity: { value: 2.0 },
            highlightStrength: { value: 0.5}
        };

        const material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
        });

        const geometry = new THREE.SphereGeometry(radius, segments, segments);

        originalPositionsRef.current = new Float32Array(geometry.attributes.position.array);
        displacementsRef.current = new Float32Array(geometry.attributes.position.count);
        geometry.setAttribute('displacement', new THREE.BufferAttribute(displacementsRef.current, 1));

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        meshRef.current = mesh;

        function animate() {
            timeRef.current += 0.01;

            if (meshRef.current) {
                meshRef.current.rotation.x += 0.001;
                meshRef.current.rotation.y += 0.001;
            }

            const positions = geometry.attributes.position.array;
            const originalPositions = originalPositionsRef.current;
            const displacements = displacementsRef.current;

            if (originalPositions && displacements) {
              for (let i = 0; i < positions.length; i += 3) {
                  const originalVertex = new THREE.Vector3(
                      originalPositions[i],
                      originalPositions[i + 1],
                      originalPositions[i + 2]
                  );

                  const noiseValue = noise2D(originalVertex.x * 0.05, originalVertex.y * 0.05, timeRef.current);
                  const waveEffect = Math.sin(originalVertex.x * 5.05 + timeRef.current * .3);
                  const displacement = (noiseValue * .3 + waveEffect * 8);
                  const newPosition = originalVertex.normalize().multiplyScalar(radius + displacement);

                  positions[i] = newPosition.x;
                  positions[i + 1] = newPosition.y;
                  positions[i + 2] = newPosition.z;

                  displacements[i / 3] = displacement;
              }
            }

            geometry.attributes.position.needsUpdate = true;
            geometry.attributes.displacement.needsUpdate = true;
            geometry.computeVertexNormals();

            renderer.render(scene, camera);
            animationRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }

            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }

            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div className="">
          <div ref={mountRef} style={{ width: '450px', height: '450px' }} />
        </div>
    );
}

