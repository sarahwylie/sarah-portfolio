"use client";
import Image from 'next/image';
import { useState } from 'react';

const HoverImage = ({ defaultSrc, hoverSrc, altText, width, height }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? hoverSrc : defaultSrc}
        alt={altText}
        width={width}
        height={height}
        className="rounded-xl w-full h-auto shadow-lg zoom-hover"
      />
    </div>
  );
};

export default HoverImage;