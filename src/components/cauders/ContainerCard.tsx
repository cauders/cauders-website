import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerCardProps extends React.HTMLAttributes<HTMLDivElement> {
 hoverEffect?: boolean;
}

export default function ContainerCard({ 
 className, 
 hoverEffect = false, 
 children, 
 ...props 
}: ContainerCardProps) {
 return (
 <div
 className={cn(
 "bg-card border-0 rounded-2xl shadow-smooth-lift text-foreground",
 hoverEffect && "hover:-translate-y-1 transition-transform duration-300",
 className
 )}
 {...props}
 >
 {children}
 </div>
 );
}
