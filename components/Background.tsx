'use client';

import React, { useEffect, useState } from 'react';

interface BackgroundProps {
  dots?: {
    display: boolean;
    color: string;
    size: string;
  };
  mask?: string;
}

const Background: React.FC<BackgroundProps> = ({ dots, mask }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const gridSize = 50; // Espacement plus petit entre les points (dix fois plus dense)
  const pointSize = parseInt(dots?.size || '2', 5); // Taille des points (plus petits)
  const glowIntensity = '5px'; // Intensité du glow pour l'effet néon

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const renderPoints = () => {
    const points = [];
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    for (let y = 0; y < screenHeight; y += gridSize) {
      for (let x = 0; x < screenWidth; x += gridSize) {
        const distance = Math.sqrt(
          Math.pow(x - position.x, 2) + Math.pow(y - position.y, 2)
        );

        let color = dots?.color || 'rgba(255, 255, 255, 0.8)'; // Par défaut couleur blanche
        if (distance < 150) color = 'cyan';
        else if (distance < 300) color = 'magenta';
        else if (distance < 450) color = 'blue';

        points.push(
          <div
            key={`${x}-${y}`}
            style={{
              width: pointSize,
              height: pointSize,
              backgroundColor: color,
              borderRadius: '50%',
              position: 'absolute',
              top: y,
              left: x,
              transition: 'background-color 0.15s ease, transform 0.15s ease',
              boxShadow: `0 0 ${glowIntensity} ${color}`, // Effet de néon sur les points
            }}
          />
        );
      }
    }

    return points;
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        backgroundColor: 'black',
        position: 'relative',
        zIndex: -1,
      }}
    >
      {dots?.display && renderPoints()}
      
      {/* Animation de l'éclairage autour de la souris */}
      <div
        style={{
          position: 'absolute',
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: '100px',
          height: '100px',
          borderRadius: '50%', 
          background: 'rgba(255, 255, 255, 0.1)',
          transform: 'translate(-50%, -50%)',
          animation: 'pulse 2s infinite ease-out',
          pointerEvents: 'none',
          filter: `
            drop-shadow(0 0 ${glowIntensity} rgba(255, 255, 255, 0.8))
            drop-shadow(0 0 25px rgba(255, 255, 255, 0.5))
            drop-shadow(0 0 50px rgba(255, 255, 255, 0.3))
          `, // Utilisation de drop-shadow pour un effet centré
        }}
      />
    </div>
  );
};

export default Background;
