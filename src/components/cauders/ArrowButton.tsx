
'use client';

import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface ArrowButtonProps {
  href: string;
  text: string;
  className?: string;
}

export default function ArrowButton({ href, text, className }: ArrowButtonProps) {
  return (
    <Link href={href} className={cn("inline-flex group", className)}>
      <div className="relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 ease-out">
        <div className="flex items-center">
          <div className="border-2 border-r-0 border-white text-white px-6 py-2.5 rounded-bl-3xl rounded-br-sm rounded-tr-sm group-hover:bg-white group-hover:text-black transition-colors duration-300">
            <span className="text-sm font-medium">{text}</span>
          </div>
          <div className="border-2 border-white bg-white p-3 rounded-tr-sm rounded-br-sm">
            <ArrowUpRight className="w-5 h-5 text-black" />
          </div>
        </div>
      </div>
    </Link>
  );
}
