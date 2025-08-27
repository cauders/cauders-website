
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
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={150} />
      <pointLight position={[-10, -10, -10]} intensity={100} color="hsl(var(--primary))" />
      
      <TorusKnot ref={meshRef} args={[2.5, 0.4, 256, 32]}>
        <meshStandardMaterial 
            color="hsl(var(--primary))" 
            roughness={0.1}
            metalness={0.8}
            emissive="hsl(var(--primary))"
            emissiveIntensity={0.2}
        />
      </TorusKnot>
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 12], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
    >
      <Scene />
    </Canvas>
  );
}
