
'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Circle } from '@react-three/drei';
import * as THREE from 'three';
import type { Mesh } from 'three';

function AnimatedCircle({ position, color, radius = 1 }: { position: [number, number, number], color: string, radius?: number }) {
    const meshRef = useRef<Mesh>(null!);

    useFrame((state) => {
        if(meshRef.current) {
            const time = state.clock.getElapsedTime();
            meshRef.current.position.y = position[1] + Math.sin(time * 0.5 + position[0]) * 0.5;
            meshRef.current.position.x = position[0] + Math.cos(time * 0.5 + position[1]) * 0.5;
        }
    });

    return (
        <Circle ref={meshRef} args={[radius, 64]} position={position}>
            <meshStandardMaterial 
                color={color}
                roughness={0.1}
                metalness={0.9}
                emissive={color}
                emissiveIntensity={0.4}
                side={THREE.DoubleSide}
            />
        </Circle>
    )
}

function Scene({ sphereColor }: { sphereColor: string }) {
  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={200} />
      <pointLight position={[-10, -10, -10]} intensity={150} color={sphereColor} />
      
      <AnimatedCircle position={[-4, -1, -5]} color={sphereColor} radius={2.5} />
      <AnimatedCircle position={[4, 2, -6]} color={sphereColor} radius={2.2} />
      <AnimatedCircle position={[2, -3.5, -4]} color={sphereColor} radius={2} />
    </>
  );
}

export default function Contact3DBackground() {
  const primaryColor = 'hsl(var(--primary))';
  const backgroundColor = 'hsl(var(--background))';

  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ width: '100%', height: '100%' }}
    >
      <color attach="background" args={[backgroundColor]} />
      <Scene sphereColor={primaryColor} />
    </Canvas>
  );
}
