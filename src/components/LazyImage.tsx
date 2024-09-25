/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
}

export default function LazyImage({ src, alt }: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    window.open(src, "_blank");
  };

  return (
    <div
      className="relative h-full w-full cursor-pointer"
      onClick={handleClick}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-400">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
