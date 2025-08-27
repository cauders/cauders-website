"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import * as THREE from 'three';

function RotatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Torus ref={meshRef} args={[3.5, 0.8, 32, 100]}>
        <meshStandardMaterial 
            color="hsl(var(--primary))" 
            roughness={0.5}
            metalness={0.2}
            wireframe
        />
    </Torus>
  );
}

export default function Hero3DBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <RotatingTorus />
    </Canvas>
  );
}
