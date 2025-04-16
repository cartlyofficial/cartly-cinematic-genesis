
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Instances, Instance, OrbitControls } from '@react-three/drei';
import { Color, Vector3 } from 'three';

function DistortedCube({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<any>();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = meshRef.current.rotation.y += 0.001;
      if (hovered && !clicked) {
        meshRef.current.rotation.y += 0.01;
        meshRef.current.rotation.x += 0.01;
      }
      if (clicked) {
        meshRef.current.rotation.y += 0.02;
        meshRef.current.rotation.x -= 0.02;
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={isMobile ? 1.7 : 2.5}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
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

function FloatingParticles() {
  return (
    <Instances limit={100}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshStandardMaterial color="#9b87f5" />
      
      <ParticleGroup count={50} />
    </Instances>
  );
}

function ParticleGroup({ count }: { count: number }) {
  const particles = useRef<any[]>([]);
  const velocities = useRef<Vector3[]>([]);
  
  useEffect(() => {
    // Initialize velocities
    for (let i = 0; i < count; i++) {
      velocities.current.push(
        new Vector3(
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.005
        )
      );
    }
  }, [count]);
  
  useFrame(() => {
    for (let i = 0; i < particles.current.length; i++) {
      const particle = particles.current[i];
      if (particle) {
        // Move particle
        particle.position.x += velocities.current[i].x;
        particle.position.y += velocities.current[i].y;
        particle.position.z += velocities.current[i].z;
        
        // Boundary check
        const limit = 3;
        if (Math.abs(particle.position.x) > limit) velocities.current[i].x *= -1;
        if (Math.abs(particle.position.y) > limit) velocities.current[i].y *= -1;
        if (Math.abs(particle.position.z) > limit) velocities.current[i].z *= -1;
      }
    }
  });
  
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Instance 
          key={i}
          ref={(el) => (particles.current[i] = el)}
          position={[
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5
          ]}
          scale={Math.random() * 0.5 + 0.5}
        />
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
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <DistortedCube isMobile={isMobile} />
        <FloatingParticles />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          maxPolarAngle={Math.PI / 1.75}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
}
