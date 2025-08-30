
"use client";

import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import type { Points as PointsType } from 'three';

interface StarFieldProps {
  scrollProgress: number;
}

function StarField({ scrollProgress }: StarFieldProps) {
  const ref = useRef<PointsType>(null!);

  const [sphere, colors] = useMemo(() => {
    const sphere = new Float32Array(5000 * 3);
    const colors = new Float32Array(5000 * 3);
    const color = new THREE.Color();

    for (let i = 0; i < 5000; i++) {
      const i3 = i * 3;
      // Position
      const x = (Math.random() - 0.5) * 15;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 15;
      sphere[i3] = x;
      sphere[i3 + 1] = y;
      sphere[i3 + 2] = z;

      // Color
      color.set(Math.random() > 0.8 ? 'hsl(var(--primary))' : 'hsl(var(--foreground))');
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    return [sphere, colors];
  }, []);

  useFrame((state, delta) => {
    if(ref.current) {
        ref.current.rotation.x -= delta / 30;
        ref.current.rotation.y -= delta / 45;

        // Move particles towards camera based on scroll
        ref.current.position.z = THREE.MathUtils.lerp(0, 10, scrollProgress);
        ref.current.rotation.x = THREE.MathUtils.lerp(0, Math.PI / 4, scrollProgress);
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.025}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export default function StickyScroll3D({ scrollProgress }: { scrollProgress: number }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
    >
      <ambientLight intensity={0.5} />
      <StarField scrollProgress={scrollProgress} />
    </Canvas>
  );
}
