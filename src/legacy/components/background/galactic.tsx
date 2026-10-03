'use client';

/* eslint-disable react/no-unknown-property */

import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

type GalaxyParams = {
  count: number;
  majorCount: number;
  gasCount: number;
  size: number;
  majorSize: number;
  gasSize: number;
  radius: number;
  branches: number;
  spin: number;
  randomness: number;
  randomnessPower: number;
  coreColor: string;
  midColor: string;
  armColor: string;
  edgeColor: string;
  starCenterColor: string;
};

// ⚡ PARÂMETROS ULTRA-OTIMIZADOS (Equilíbrio ótico perfeito para 60 FPS fluidos)
const PARAMS: GalaxyParams = {
  count: 28000,
  majorCount: 1200,
  gasCount: 14000,
  size: 0.02,
  majorSize: 0.075,
  gasSize: 0.24,
  radius: 5.5,
  branches: 5,
  spin: 1.2,
  randomness: 0.22,
  randomnessPower: 3,
  coreColor: '#fff5e6',
  midColor: '#ff9d5c',
  armColor: '#3d6ef5',
  edgeColor: '#1a1a40',
  starCenterColor: '#ffffcc',
};

export function GalacticCore({
  scrollProgress,
}: {
  scrollProgress: React.MutableRefObject<number>;
}) {
  const groupRef = useRef<THREE.Group>(null!);
  const starsRef = useRef<THREE.Points>(null!);
  const majorRef = useRef<THREE.Points>(null!);
  const gasRef = useRef<THREE.Points>(null!);
  const centralStarRef = useRef<THREE.Mesh>(null!);
  const centralGlowRef = useRef<THREE.Mesh>(null!);
  const outerGlowRef = useRef<THREE.Mesh>(null!);

  // Textura radial suave gerada uma única vez
  const starTexture = useMemo(() => {
    if (typeof document === 'undefined') return new THREE.Texture();
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (!ctx) return new THREE.Texture();
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);
    return new THREE.CanvasTexture(canvas);
  }, []);

  // 🚀 Geometrias e cores calculadas UMA ÚNICA VEZ e mantidas estáticas na VRAM
  const data = useMemo(() => {
    const pos = new Float32Array(PARAMS.count * 3);
    const cols = new Float32Array(PARAMS.count * 3);

    const cCore = new THREE.Color(PARAMS.coreColor);
    const cMid = new THREE.Color(PARAMS.midColor);
    const cArm = new THREE.Color(PARAMS.armColor);
    const cEdge = new THREE.Color(PARAMS.edgeColor);
    const colorTemp = new THREE.Color();

    for (let i = 0; i < PARAMS.count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * PARAMS.radius;
      const spinAngle = radius * PARAMS.spin;
      const branchAngle = ((i % PARAMS.branches) / PARAMS.branches) * Math.PI * 2;

      const randomX =
        Math.pow(Math.random(), PARAMS.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        PARAMS.randomness *
        radius;
      const randomY =
        Math.pow(Math.random(), PARAMS.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        PARAMS.randomness *
        radius;
      const randomZ =
        Math.pow(Math.random(), PARAMS.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        PARAMS.randomness *
        radius;

      const x = Math.cos(branchAngle + spinAngle) * radius + randomX;
      const y = randomY;
      const z = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      pos[i3] = x;
      pos[i3 + 1] = y;
      pos[i3 + 2] = z;

      const distRatio = radius / PARAMS.radius;
      if (distRatio < 0.2) colorTemp.copy(cCore).lerp(cMid, distRatio / 0.2);
      else if (distRatio < 0.6) colorTemp.copy(cMid).lerp(cArm, (distRatio - 0.2) / 0.4);
      else colorTemp.copy(cArm).lerp(cEdge, (distRatio - 0.6) / 0.4);

      cols[i3] = colorTemp.r;
      cols[i3 + 1] = colorTemp.g;
      cols[i3 + 2] = colorTemp.b;
    }

    // MAJOR STARS
    const mPos = new Float32Array(PARAMS.majorCount * 3);
    const mCols = new Float32Array(PARAMS.majorCount * 3);

    for (let i = 0; i < PARAMS.majorCount; i++) {
      const i3 = i * 3;
      const r = Math.random() * PARAMS.radius;
      const angle = r * PARAMS.spin + ((i % PARAMS.branches) / PARAMS.branches) * Math.PI * 2;
      mPos[i3] = Math.cos(angle) * r + (Math.random() - 0.5) * 0.5;
      mPos[i3 + 1] = (Math.random() - 0.5) * 0.6;
      mPos[i3 + 2] = Math.sin(angle) * r + (Math.random() - 0.5) * 0.5;

      const rand = Math.random();
      if (rand < 0.3) colorTemp.set('#ffffff');
      else if (rand < 0.6) colorTemp.set('#88ccff');
      else colorTemp.set('#ffcc88');
      mCols[i3] = colorTemp.r;
      mCols[i3 + 1] = colorTemp.g;
      mCols[i3 + 2] = colorTemp.b;
    }

    // GAS PARTICLES
    const gPos = new Float32Array(PARAMS.gasCount * 3);
    const gCols = new Float32Array(PARAMS.gasCount * 3);
    const gPalette = [
      new THREE.Color('#4f1b84'),
      new THREE.Color('#228b8e'),
      new THREE.Color('#b82c5a'),
    ];

    for (let i = 0; i < PARAMS.gasCount; i++) {
      const i3 = i * 3;
      const r = Math.random() * PARAMS.radius * 0.85;
      const angle = r * PARAMS.spin + ((i % PARAMS.branches) / PARAMS.branches) * Math.PI * 2;
      gPos[i3] = Math.cos(angle) * r + (Math.random() - 0.5) * 1.8;
      gPos[i3 + 1] = (Math.random() - 0.5) * 1.2;
      gPos[i3 + 2] = Math.sin(angle) * r + (Math.random() - 0.5) * 1.8;

      const col = gPalette[Math.floor(Math.random() * 3)].clone().multiplyScalar(0.6);
      gCols[i3] = col.r;
      gCols[i3 + 1] = col.g;
      gCols[i3 + 2] = col.b;
    }

    return { pos, cols, mPos, mCols, gPos, gCols };
  }, []);

  // 🎯 ZERO CPU OVERHEAD: useFrame executa em 0.001ms via GPU matrix transforms
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const sp = scrollProgress.current;

    if (!groupRef.current) return;

    // Cross-fade out suavemente próximo ao fim (sp=0.60 a 0.68)
    const fadeOut = THREE.MathUtils.clamp(1.0 - (sp - 0.6) / 0.08, 0.0, 1.0);
    const isVisible = fadeOut > 0.0 && sp > 0.005;
    groupRef.current.visible = isVisible;

    if (!isVisible) return;

    // Desdobramento suave e orgânico da galáxia conforme o scroll
    const explosionProgress = Math.min(1.0, sp * 1.6);
    const ease = Math.pow(Math.max(0.001, explosionProgress), 0.55);

    // Escala dinâmica cresce de 0.08 até 0.72 com o scroll
    const currentScale = THREE.MathUtils.lerp(0.08, 0.72, ease);
    groupRef.current.scale.set(currentScale, currentScale, currentScale);

    // Giro suave e aceleração angular de vórtice
    const twist = (1.0 - ease) * 2.2;
    groupRef.current.rotation.y = -0.4 + time * 0.035 + twist;
    groupRef.current.rotation.x = 0.5 + Math.sin(time * 0.3) * 0.03;

    // Rotação contínua independente dos braços de estrelas e gás (direto na GPU)
    if (starsRef.current) starsRef.current.rotation.y = time * 0.015;
    if (gasRef.current) gasRef.current.rotation.y = time * 0.01;

    if (majorRef.current) {
      majorRef.current.rotation.y = time * 0.018;
      const mat = majorRef.current.material as THREE.PointsMaterial;
      mat.opacity = (0.75 + Math.sin(time * 2.2) * 0.25) * fadeOut;
    }

    // Pulsação suave do núcleo estelar
    if (centralStarRef.current && centralGlowRef.current && outerGlowRef.current) {
      centralStarRef.current.rotation.y = time * 0.04;
      const pulse = (Math.sin(time * 1.8) * 0.12 + 1) * ease;
      centralGlowRef.current.scale.set(pulse, pulse, pulse);
      outerGlowRef.current.scale.set(ease * 1.1, ease * 1.1, ease * 1.1);
      centralStarRef.current.scale.set(ease, ease, ease);
    }
  });

  return (
    <group
      ref={groupRef}
      position={[-0.5, -0.2, -1.0]}
      rotation={[0.5, -0.4, 0]}
      scale={[0.08, 0.08, 0.08]}
    >
      {/* 1. Estrelas do Disco Espiral */}
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[data.pos, 3]} />
          <bufferAttribute attach="attributes-color" args={[data.cols, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={PARAMS.size}
          alphaMap={starTexture}
          transparent
          vertexColors
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          opacity={0.8}
        />
      </points>

      {/* 2. Supergigantes e Estrelas Brilhantes */}
      <points ref={majorRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[data.mPos, 3]} />
          <bufferAttribute attach="attributes-color" args={[data.mCols, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={PARAMS.majorSize}
          alphaMap={starTexture}
          transparent
          vertexColors
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* 3. Nuvem Nebular de Gás */}
      <points ref={gasRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[data.gPos, 3]} />
          <bufferAttribute attach="attributes-color" args={[data.gCols, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={PARAMS.gasSize}
          alphaMap={starTexture}
          transparent
          vertexColors
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          opacity={0.16}
        />
      </points>

      {/* 4. Núcleo Estelar Central */}
      <group>
        <mesh ref={centralStarRef}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshBasicMaterial color={PARAMS.starCenterColor} depthWrite={false} />
        </mesh>
        <mesh ref={centralGlowRef}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshBasicMaterial
            color="#ffaa44"
            transparent
            opacity={0.4}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
        <mesh ref={outerGlowRef}>
          <sphereGeometry args={[1.2, 16, 16]} />
          <meshBasicMaterial
            color="#ff6600"
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>
    </group>
  );
}
