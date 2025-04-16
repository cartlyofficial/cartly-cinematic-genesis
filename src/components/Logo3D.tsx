
import { useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import { Color } from 'three';

function AnimatedText() {
  const meshRef = useRef<any>();
  const [hovered, setHovered] = useState(false);
  
  return (
    <Center>
      <Text3D
        ref={meshRef}
        font={'/fonts/Inter_Regular.json'}
        size={0.5}
        height={0.1}
        curveSegments={6}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelSegments={3}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        C
        <meshStandardMaterial 
          color={hovered ? new Color("#33C3F0") : new Color("#9b87f5")} 
          emissive={hovered ? new Color("#33C3F0") : new Color("#6E59A5")} 
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </Center>
  );
}

export default function Logo3D({ className }: { className?: string }) {
  return (
    <div className={`w-10 h-10 ${className}`}>
      <Suspense fallback={<div className="w-10 h-10 flex items-center justify-center">C</div>}>
        <Canvas camera={{ position: [0, 0, 1.5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <AnimatedText />
        </Canvas>
      </Suspense>
    </div>
  );
}
