import React, { useEffect, useState } from 'react';

export default function CursorMaskBackground() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', handleMouseMove);

    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        maskImage: `radial-gradient(circle 150px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(0, 0, 0, 1), transparent)`,
        WebkitMaskImage: `radial-gradient(circle 150px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(0, 0, 0, 1), transparent)`,
        background: 'linear-gradient(to right, #ff7eb3, #ff758c)',
      }}
    />
  );
}
