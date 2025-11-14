"use client";

import Image from "next/image";

export default function PatternIcons() {
  const icons = Array.from({ length: 12 });

  return (
    <div className="fixed inset-0 pointer-events-none z-1">
      {icons.map((_, i) => (
        <div
          key={i}
          className="absolute cursor-pointer floating transition-transform duration-1000 "
          style={{
            top: `${10 + i * 30}%`,
            left: `${5 + ((i * 30) % 90)}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          <Image
            src="/clacket.png"
            alt="pattern-icon"
            width={40}
            height={40}
            className="opacity-60 hover:opacity-80 transition-opacity"
          />
        </div>
      ))}
    </div>
  );
}
