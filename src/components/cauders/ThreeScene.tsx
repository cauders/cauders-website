"use client";

import { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';

function SceneObject() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[2, 1]}>
      <meshStandardMaterial
        color="hsl(var(--primary))"
        metalness={0.1}
        roughness={0.4}
      />
    </Icosahedron>
  );
}

export default function ThreeScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight
        position={[5, 5, 5]}
        color="hsl(var(--primary))"
        intensity={1.5}
      />
      <SceneObject />
    </Canvas>
  );
}