import { cn } from '@/lib/utils';
import Image from 'next/image';

interface GlassBadgeProps {
 text: string;
 className?: string;
}

export default function GlassBadge({ text, className }: GlassBadgeProps) {
 return (
 <div className={cn(
 "inline-flex items-center justify-center gap-3 rounded-full",
 "px-5 py-2",
 "border border-primary/50",
 "bg-transparent",
 "backdrop-blur-sm",
 "text-primary text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-normal",
 className
 )}>
 <Image 
 src="https://res.cloudinary.com/cauders/image/upload/v1786552819/arrow-cy_olfzuh.svg"
 alt="arrow icon"
 width={12}
 height={12}
 className=""
 style={{ width: 'auto', height: 'auto' }}
 />
 <span className="mt-[1px]">{text}</span>
 </div>
 );
}
