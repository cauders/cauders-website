"use client"

import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Icosahedron, useScroll, TorusKnot, Sphere } from '@react-three/drei'
import { useRef, useMemo, type Ref } from 'react';

const AnimatedShape = ({ shapeType, position, color, rotationSpeed = 0.2, scale = 1 }: { shapeType: string, position: [number, number, number], color: string, rotationSpeed?: number, scale?: number}) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.x += delta * rotationSpeed * 0.5;
        ref.current.rotation.y += delta * rotationSpeed;
    }
  });

  const geometry = useMemo(() => {
    switch (shapeType) {
        case 'icosahedron':
            return <Icosahedron args={[1, 0]} ref={ref as Ref<THREE.Mesh>} position={position} scale={scale}><meshStandardMaterial color={color} roughness={0.5} metalness={0.8} /></Icosahedron>
        case 'torus':
            return <TorusKnot args={[0.8, 0.25, 256, 32]} ref={ref as Ref<THREE.Mesh>} position={position} scale={scale}><meshStandardMaterial color={color} roughness={0.1} metalness={0.9} /></TorusKnot>
        case 'sphere':
             return <Sphere args={[1, 32, 32]} ref={ref as Ref<THREE.Mesh>} position={position} scale={scale}><meshStandardMaterial color={color} roughness={0.7} metalness={0.6} /></Sphere>
        default:
            return null;
    }
  }, [shapeType, position, color, scale]);
  
  return geometry;
}

const SceneContent = () => {
    const { camera } = useThree();
    const scroll = useScroll();

    useFrame(() => {
      camera.position.z = 5 + scroll.offset * 5;
    })

    const shapes = useMemo(() => [
        { type: 'icosahedron', pos: [-4, 2, -10], color: '#8CEAE5', scale: 0.8 },
        { type: 'torus', pos: [5, -3, -15], color: '#8CEAE5', scale: 1 },
        { type: 'sphere', pos: [-6, -4, -5], color: '#ffffff', scale: 1.2 },
        { type: 'icosahedron', pos: [6, 4, -8], color: '#ffffff', scale: 0.6 },
        { type: 'torus', pos: [-2, -6, -20], color: '#8CEAE5', scale: 0.7 },
        { type: 'sphere', pos: [3, 6, -12], color: '#ffffff', scale: 0.9 },
    ], []);

    return (
        <>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={100} />
            <pointLight position={[-10, -10, -5]} intensity={80} color="#8CEAE5" />
            
            {shapes.map((shape, i) => (
                <AnimatedShape key={i} shapeType={shape.type} position={shape.pos as [number, number, number]} color={shape.color} scale={shape.scale} />
            ))}
        </>
    )
}

export default function ThreeScene() {
    return (
        <Canvas>
            <SceneContent />
        </Canvas>
    )
}
