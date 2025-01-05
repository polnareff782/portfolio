"use client"; // Marque ce composant comme un Client Component

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function ThreeScene() {
  return (
    <div className="h-screen bg-black">
      <Canvas>
        {/* Contrôle de la caméra */}
        <OrbitControls enableZoom={false} />

        {/* Lumières */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />

        {/* Sphère animée */}
        <Sphere visible args={[1, 32, 32]} scale={2}>
          <MeshDistortMaterial
            color="#FF00FF" // Couleur de la sphère
            attach="material"
            distort={0.6} // Intensité de la distorsion
            speed={1.5} // Vitesse de l'animation
          />
        </Sphere>
      </Canvas>
    </div>
  );
}