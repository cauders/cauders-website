import { cn } from '@/lib/utils';

interface BlurCircleProps {
  className?: string;
}

export default function BlurCircle({ className }: BlurCircleProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute rounded-full -z-10 pointer-events-none',
        className,
        'w-[600px] h-[600px] md:w-[800px] md:h-[800px]'
      )}
      style={{
        background: 'radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 75%)',
        contain: 'paint',
      }}
    />
  );
}
