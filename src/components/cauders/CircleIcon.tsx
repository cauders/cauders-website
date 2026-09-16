import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CircleIconProps {
 icon: LucideIcon;
 className?: string;
 iconClassName?: string;
}

export default function CircleIcon({ icon: Icon, className, iconClassName }: CircleIconProps) {
 return (
 <div className={cn("bg-white p-3 rounded-full flex items-center justify-center shadow-sm text-zinc-900", className)}>
 <Icon className={cn("w-5 h-5", iconClassName)} strokeWidth={1.5} />
 </div>
 );
}
