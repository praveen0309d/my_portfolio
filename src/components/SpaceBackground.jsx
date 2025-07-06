// src/components/SpaceBackground.jsx

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';

function Space() {
  const spaceRef = useRef();
  const { scene } = useGLTF('/models/moon_photo_realistic__8_k.glb');
  const { viewport } = useThree();
  const [target, setTarget] = useState([0, 0]);

  // Track cursor movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setTarget([x * viewport.width * 0.2, y * viewport.height * 0.2]); // scale sensitivity
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [viewport]);

  useFrame(() => {
    if (spaceRef.current) {
      // Subtle continuous rotation
      spaceRef.current.rotation.y += 0.0005;
      spaceRef.current.rotation.x += 0.0002;

      // Smooth follow cursor
      spaceRef.current.position.x += (target[0] - spaceRef.current.position.x) * 0.02;
      spaceRef.current.position.y += (target[1] - spaceRef.current.position.y) * 0.02;
    }
  });

  return <primitive ref={spaceRef} object={scene} scale={4} />;
}

function SpaceBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: 'black',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <Canvas camera={{ position: [0, 0, 40], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Space />
      </Canvas>
    </div>
  );
}

export default SpaceBackground;
