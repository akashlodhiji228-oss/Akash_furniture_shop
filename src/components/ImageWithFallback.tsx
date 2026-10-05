import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackCategory?: string;
  className?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackCategory = 'Architectural Material',
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#ECE7DE] ${containerClassName}`}>
      {/* Loading state skeleton */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-[#E6DFD3] animate-pulse" />
      )}

      {/* Actual image */}
      {!error ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      ) : (
        /* Zero broken image fallback: architectural texture with domain insignia */
        <div className="w-full h-full min-h-[160px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#EFEAE1] via-[#E4DDD0] to-[#D9D0C0] text-[#5E3B14]">
          <div className="w-12 h-12 rounded-full border border-[#8C5D28]/30 flex items-center justify-center bg-white/70 shadow-sm mb-3">
            <svg
              className="w-6 h-6 text-[#8C5D28]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
          </div>
          <p className="text-xs uppercase tracking-wider font-semibold text-[#8C5D28]">
            {fallbackCategory}
          </p>
          <p className="text-sm font-medium text-[#1F2228] mt-1 max-w-[200px] line-clamp-2">
            {alt}
          </p>
          <span className="text-[11px] text-[#7A6B58] mt-1">AKASH Ply & Hardware</span>
        </div>
      )}
    </div>
  );
};
