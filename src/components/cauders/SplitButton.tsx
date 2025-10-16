
'use client';

import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface SplitButtonProps {
  emailPlaceholder?: string;
  buttonClassName?: string;
  inputClassName?: string;
  iconClassName?: string;
}

export default function SplitButton({ 
    emailPlaceholder = "Enter Your Email",
    buttonClassName,
    inputClassName,
    iconClassName
}: SplitButtonProps) {
  return (
    <div className="flex items-center gap-1.5">
      <input
        type="email"
        placeholder={emailPlaceholder}
        className={cn(
            "flex-grow h-12 px-6 rounded-l-full rounded-r-[2px] border-2 border-white/30 bg-white/15 backdrop-blur-[50px] text-white text-base font-normal placeholder:text-white/70 placeholder:text-sm placeholder:font-normal transition-all duration-300 hover:bg-white/25 hover:border-white/50 focus:outline-none focus:ring-0 focus:border-white/50",
            inputClassName
        )}
      />
      <button 
        type="submit" 
        className={cn(
            "bg-white text-foreground hover:bg-gray-200 rounded-l-[2px] rounded-r-full w-14 h-12 flex-shrink-0 flex items-center justify-center border-2 border-white",
            buttonClassName
        )}
      >
        <ArrowUpRight className={cn("w-6 h-6", iconClassName)} />
      </button>
    </div>
  );
}
