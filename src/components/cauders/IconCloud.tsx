"use client";

import { Code, Layers, PenTool, Rocket, Database, Component, Server } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const icons = [
  Code,
  Layers,
  PenTool,
  Rocket,
  Database,
  Component,
  Server,
];

const IconCloud = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }
  
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
            {icons.map((Icon, i) => {
                const style = {
                    '--i': i + 1,
                    top: `${Math.random() * 80}%`,
                    left: `${Math.random() * 90}%`,
                    animation: `float ${15 + Math.random() * 20}s linear infinite`,
                    animationDelay: `-${Math.random() * 20}s`,
                } as React.CSSProperties;

                const sizeClass = i % 3 === 0 ? 'w-16 h-16' : i % 2 === 0 ? 'w-12 h-12' : 'w-10 h-10';

                return (
                    <div
                        key={i}
                        className={cn("absolute text-foreground/10 dark:text-foreground/5", sizeClass)}
                        style={style}
                    >
                        <Icon className="w-full h-full"/>
                    </div>
                );
            })}
        </div>
    );
};

export default IconCloud;