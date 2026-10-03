'use client';

/* eslint-disable react/no-unknown-property */

import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { memo, useRef, useMemo, Suspense, useEffect } from 'react';
import { Float, PerspectiveCamera, PerformanceMonitor } from '@react-three/drei';

import { GalacticCore } from './galactic';
import { FlowerOfLife } from './flower-of-life';
import { Space, SpaceAtmosphere } from './space';
import { SceneController } from './scene-controller';

// ----------------------------------------------------------------------

const RADIUS = 0.9;

/**
 * Fase inicial da cena (Flor da Vida / Gênese)
 */
const InitialPhase = memo(function InitialPhase({
  scrollProgress,
  sharedSphereGeo,
  sharedGlassGeo,
  glassMat,
}: {
  scrollProgress: React.MutableRefObject<number>;
  sharedSphereGeo: THREE.SphereGeometry;
  sharedGlassGeo: THREE.SphereGeometry;
  glassMat: THREE.Material;
}) {
  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group scale={0.42} position={[0.12, -0.08, 0]}>
        <FlowerOfLife
          scrollProgress={scrollProgress}
          sharedSphereGeo={sharedSphereGeo}
          sharedGlassGeo={sharedGlassGeo}
          glassMat={glassMat}
        />
      </group>
    </Float>
  );
});

// ----------------------------------------------------------------------

export const HomeBackground: React.FC = memo(() => {
  const scrollProgress = useRef<number>(0);

  /**
   * Geometrias compartilhadas otimizadas
   */
  const sharedSphereGeo = useMemo(() => new THREE.SphereGeometry(RADIUS, 24, 24), []);
  const sharedGlassGeo = useMemo(() => new THREE.SphereGeometry(RADIUS, 16, 16), []);

  /**
   * Material de vidro translúcido de alta performance
   * (Substitui MeshPhysicalMaterial com transmission por material direto sem render-pass secundário)
   */
  const glassMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        roughness: 0.1,
        metalness: 0.15,
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  /**
   * Cleanup de memória GPU
   */
  useEffect(
    () => () => {
      sharedSphereGeo.dispose();
      sharedGlassGeo.dispose();
      glassMat.dispose();
    },
    [sharedSphereGeo, sharedGlassGeo, glassMat]
  );

  /**
   * DPR dinâmico com teto de 1.5x para máxima fluidez em telas Retina / alta densidade
   */
  const dpr = useMemo(() => {
    if (typeof window === 'undefined') return 1;
    return Math.min(window.devicePixelRatio, 1.5);
  }, []);

  return (
    <Space>
      <Canvas
        dpr={dpr}
        gl={{
          antialias: false, // Partículas com textura radial já possuem antialiasing suave natural
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: false,
        }}
      >
        {/* Monitor de performance ativo */}
        <PerformanceMonitor />

        {/* Câmera principal */}
        <PerspectiveCamera makeDefault position={[0, 0, 6]} far={5000} />

        <Suspense fallback={null}>
          <SpaceAtmosphere />

          {/* Controle de scroll da cena */}
          <SceneController scrollProgress={scrollProgress} />

          {/* Núcleo galáctico ultra-otimizado (100% GPU) */}
          <GalacticCore scrollProgress={scrollProgress} />

          {/* Fase inicial: Flor da Vida */}
          <InitialPhase
            scrollProgress={scrollProgress}
            sharedSphereGeo={sharedSphereGeo}
            sharedGlassGeo={sharedGlassGeo}
            glassMat={glassMat}
          />
        </Suspense>
      </Canvas>
    </Space>
  );
});

HomeBackground.displayName = 'HomeBackground';
