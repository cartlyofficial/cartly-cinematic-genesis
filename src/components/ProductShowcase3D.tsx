
import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, PresentationControls, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';

function Model(props: any) {
  const { scene } = useGLTF('/laptop.glb');
  
  return <primitive object={scene} {...props} />;
}

export default function ProductShowcase3D({ className }: { className?: string }) {
  return (
    <div className={`w-full h-[500px] ${className}`}>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full"
      >
        <Suspense fallback={<div className="flex items-center justify-center h-full">Loading 3D model...</div>}>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            
            <PresentationControls
              global
              rotation={[0.13, 0.1, 0]}
              polar={[-0.4, 0.2]}
              azimuth={[-0.8, 0.8]}
              config={{ mass: 2, tension: 400 }}
              snap={{ mass: 4, tension: 400 }}
            >
              <group position={[0, -0.8, 0]} scale={0.75}>
                <Model />
              </group>
            </PresentationControls>
            
            <ContactShadows 
              position={[0, -1.5, 0]} 
              opacity={0.4} 
              scale={5} 
              blur={2.4} 
            />
            <Environment preset="city" />
          </Canvas>
        </Suspense>
      </motion.div>
    </div>
  );
}
