
'use client';

import { useRef, useState, useEffect } from 'react';
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

function Scene({ primaryColor }: { primaryColor: string }) {
  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={200} />
      <pointLight position={[-10, -10, -10]} intensity={150} color={primaryColor} />
      
      <AnimatedSphere position={[-2.5, -1, -5]} color={primaryColor} radius={1.5} />
      <AnimatedSphere position={[3, 2, -6]} color={primaryColor} radius={1.2} />
      <AnimatedSphere position={[1, -2.5, -4]} color={primaryColor} radius={1} />
    </>
  );
}

export default function Contact3DBackground() {
  const [primaryColor, setPrimaryColor] = useState('#8CEAE5'); // Default color

  useEffect(() => {
    // This code runs only on the client, after the component mounts
    const primaryHsl = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    if (primaryHsl) {
        // three.js can handle HSL strings directly, e.g., 'hsl(177, 78%, 72%)'
        const colorString = `hsl(${primaryHsl})`;
        setPrimaryColor(colorString);
    }
  }, []);

  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ width: '100%', height: '100%' }}
    >
      <color attach="background" args={['black']} />
      <Scene primaryColor={primaryColor} />
    </Canvas>
  );
}
