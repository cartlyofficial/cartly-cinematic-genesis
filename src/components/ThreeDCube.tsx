
import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { Color } from 'three';

function DistortedCube({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<any>();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  return (
    <mesh
      ref={meshRef}
      scale={isMobile ? 1.7 : 2.5}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
      rotation={[0.5, 0.5, 0]}
    >
      <icosahedronGeometry args={[1, 1]} />
      <MeshDistortMaterial
        color={clicked ? new Color("#33C3F0") : new Color("#9b87f5")}
        attach="material"
        distort={clicked ? 0.6 : 0.3}
        speed={clicked ? 4 : 2}
        roughness={0.4}
      />
    </mesh>
  );
}

// Simpler particles that won't cause performance issues
function SimpleParticles({ count = 20 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} position={[
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 5
        ]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#9b87f5" />
        </mesh>
      ))}
    </>
  );
}

export default function ThreeDCube({ className }: { className?: string }) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <div className={`w-full h-full ${className}`}>
      <Suspense fallback={<div className="flex items-center justify-center h-full">Loading 3D effects...</div>}>
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <DistortedCube isMobile={isMobile} />
          <SimpleParticles />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            maxPolarAngle={Math.PI / 1.75}
            minPolarAngle={Math.PI / 2.5}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
