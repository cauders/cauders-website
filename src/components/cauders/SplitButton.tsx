'use client';

import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import type { ChangeEvent } from 'react';

interface SplitButtonProps {
  emailPlaceholder?: string;
  buttonClassName?: string;
  inputClassName?: string;
  iconClassName?: string;
  emailValue: string;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SplitButton({ 
    emailPlaceholder = "Enter Your Email",
    buttonClassName,
    inputClassName,
    iconClassName,
    emailValue,
    onEmailChange
}: SplitButtonProps) {
  return (
    <div className="flex items-center gap-1.5">
      <input
        type="email"
        placeholder={emailPlaceholder}
        value={emailValue}
        onChange={onEmailChange}
        required
        className={cn(
            "flex-grow h-10 md:h-12 px-4 md:px-6 rounded-l-full rounded-r-[2px] border-2 border-white/30 bg-white/15 backdrop-blur-[50px] text-white placeholder:text-white/70 transition-all duration-300 hover:bg-white/25 hover:border-white/50 focus:outline-none focus:ring-0 focus:border-white/50",
            "text-sm md:text-base placeholder:text-xs md:placeholder:text-sm placeholder:font-normal",
            inputClassName
        )}
      />
      <button 
        type="submit" 
        className={cn(
            "bg-white text-foreground hover:bg-gray-200 rounded-r-full w-12 h-10 md:w-14 md:h-12 flex-shrink-0 flex items-center justify-center border-2 border-white",
            "rounded-l-[2px]",
            buttonClassName
        )}
      >
        <ArrowUpRight className={cn("w-5 h-5 md:w-6 md:h-6", iconClassName)} />
      </button>
    </div>
  );
}
