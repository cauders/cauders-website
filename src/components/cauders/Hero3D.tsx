
"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';
import type { Mesh } from 'three';

function Scene() {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={150} />
      <pointLight position={[-10, -10, -10]} intensity={100} color="hsl(var(--primary))" />
      
      <TorusKnot ref={meshRef} args={[3.2, 0.4, 256, 32]}>
        <meshStandardMaterial 
            color="hsl(var(--foreground))" 
            roughness={0.1}
            metalness={0.8}
            emissive="hsl(var(--foreground))"
            emissiveIntensity={0.1}
        />
      </TorusKnot>
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 12], fov: 75 }}
      style={{ width: '100%', height: '100%' }}
    >
      <Scene />
    </Canvas>
  );
}
