import React, { useState } from 'react';
import { SmileLine } from './SmileLine';

interface SafeImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspectRatioClass?: string;
  bgClass?: string;
  isPriority?: boolean;
  className?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  width,
  height,
  aspectRatioClass = 'aspect-[2/1]',
  bgClass = 'bg-soft',
  isPriority = false,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative w-full ${aspectRatioClass} ${bgClass} rounded-3xl overflow-hidden flex items-center justify-center border border-ink/10 ${className}`}
    >
      {hasError ? (
        <div className="flex flex-col items-center justify-center p-6 text-center" aria-hidden="true">
          <SmileLine variant="section" className="w-12 h-4" />
          <span className="text-xs text-muted font-medium mt-1">Clínica Turia</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={isPriority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setHasError(true)}
          className="w-full h-full object-contain transition-opacity duration-300"
        />
      )}
    </div>
  );
};
