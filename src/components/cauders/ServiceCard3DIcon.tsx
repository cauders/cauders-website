
"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Cone, Octahedron, Torus } from '@react-three/drei';
import type { Mesh } from 'three';

export type ModelProps = {
  geometry: 'Torus' | 'Box' | 'Octahedron' | 'Cone';
};

function Model({ geometry }: ModelProps) {
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case 'Torus':
        return <Torus ref={meshRef} args={[1, 0.4, 16, 100]} />;
      case 'Box':
        return <Box ref={meshRef} args={[1.5, 1.5, 1.5]} />;
      case 'Octahedron':
        return <Octahedron ref={meshRef} args={[1]} />;
      case 'Cone':
        return <Cone ref={meshRef} args={[1, 1.5, 32]} />;
      default:
        return <Box ref={meshRef} />;
    }
  };

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="hsl(var(--primary))" />
      
      {renderGeometry()}
      <meshStandardMaterial 
        color="hsl(var(--primary))" 
        roughness={0.2}
        metalness={0.7}
        emissive="hsl(var(--primary))"
        emissiveIntensity={0.1}
      />
    </>
  );
}

export default function ServiceCard3DIcon({ geometry }: ModelProps) {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <Model geometry={geometry} />
    </Canvas>
  );
}
