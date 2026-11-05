import React from 'react';
import { cn } from '@/lib/utils';
import { optimizeCloudinaryUrl } from '@/lib/seo';

export interface GeometricZincContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  imageSrc?: string;
  zoomScale?: number;
  withRadialGlow?: boolean;
}

export default function GeometricZincContainer({
  children,
  className,
  imageSrc = 'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_1600/v1792816431/image_371_qqfli1.png',
  zoomScale = 1.3,
  withRadialGlow = false,
  ...props
}: GeometricZincContainerProps) {
  const optimizedSrc = optimizeCloudinaryUrl(imageSrc, 1600);

  return (
    <div
      className={cn('relative bg-zinc-gradient text-white overflow-hidden p-0 w-full', className)}
      {...props}
    >
      {withRadialGlow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_15%,rgba(140,234,229,0.18),transparent_70%)]"
        />
      )}

      {optimizedSrc && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden w-full h-full flex items-center justify-center"
        >
          <img
            src={optimizedSrc}
            alt=""
            className="h-full w-auto max-w-none select-none pointer-events-none block"
            style={{
              height: '100%',
              width: 'auto',
              maxWidth: 'none',
              transform: `scale(${zoomScale})`,
            }}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
