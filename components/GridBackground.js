// components/GridBackground.js
"use client"; // Assure-toi que cette directive est présente
import { useEffect, useState } from 'react';

export default function GridBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Indique que le composant est maintenant côté client

    const handleMouseMove = (e) => {
      const points = document.querySelectorAll('.grid-point');
      points.forEach((point) => {
        const rect = point.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(e.clientX - (rect.left + rect.width / 2), 2) +
          Math.pow(e.clientY - (rect.top + rect.height / 2), 2)
        );

        // Plus la souris est proche, plus le point s'éclaire
        const intensity = 1 - Math.min(distance / 50, 1); // Ajuste la distance pour l'effet
        const color = `rgba(255, 255, 255, ${intensity})`; // Couleur blanche avec opacité
        const shadow = `0 0 10px rgba(255, 255, 255, ${intensity})`; // Effet de lumière

        point.style.backgroundColor = color;
        point.style.boxShadow = shadow;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Ne rend le fond que côté client
  return isClient ? (
    <div className="grid-background">
      {Array.from({ length: 1000 }).map((_, index) => (
        <div key={index} className="grid-point"></div>
      ))}
    </div>
  ) : null;
}