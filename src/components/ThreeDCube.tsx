
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import { Color } from 'three';

function DistortedCube({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<any>();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = meshRef.current.rotation.y += 0.001;
      if (hovered) {
        meshRef.current.rotation.y += 0.01;
        meshRef.current.rotation.x += 0.01;
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={isMobile ? 1.7 : 2.5}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[1, 1]} />
      <MeshDistortMaterial
        color={new Color("#9b87f5")}
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.4}
      />
    </mesh>
  );
}

export default function ThreeDCube({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <DistortedCube isMobile={false} />
      </Canvas>
    </div>
  );
}
