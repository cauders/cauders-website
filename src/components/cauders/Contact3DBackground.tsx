
'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import type { Mesh } from 'three';

function AnimatedSphere({ position, color, radius = 1 }: { position: [number, number, number], color: string, radius?: number }) {
    const meshRef = useRef<Mesh>(null!);

    useFrame((state) => {
        if(meshRef.current) {
            const time = state.clock.getElapsedTime();
            meshRef.current.position.y = position[1] + Math.sin(time * 0.5 + position[0]) * 0.5;
            meshRef.current.position.x = position[0] + Math.cos(time * 0.5 + position[1]) * 0.5;
        }
    });

    return (
        <Sphere ref={meshRef} args={[radius, 32, 32]} position={position}>
            <meshStandardMaterial 
                color={color}
                roughness={0.1}
                metalness={0.9}
                emissive={color}
                emissiveIntensity={0.4}
            />
        </Sphere>
    )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={200} />
      <pointLight position={[-10, -10, -10]} intensity={150} color="hsl(var(--primary))" />
      
      <AnimatedSphere position={[-2.5, -1, -5]} color="hsl(var(--primary))" radius={1.5} />
      <AnimatedSphere position={[3, 2, -6]} color="hsl(var(--primary))" radius={1.2} />
      <AnimatedSphere position={[1, -2.5, -4]} color="hsl(var(--primary))" radius={1} />
    </>
  );
}

export default function Contact3DBackground() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ width: '100%', height: '100%' }}
    >
      <color attach="background" args={['black']} />
      <Scene />
    </Canvas>
  );
}

    
