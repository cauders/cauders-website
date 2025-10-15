"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function HeroBackground() {
    return (
        <div className={cn(
            "absolute inset-0 z-0 w-full h-full overflow-hidden",
        )}>
           <Image
                src="/images/background/hero-bg.svg"
                alt="background gradient"
                fill
                className="object-cover"
                priority
           />
        </div>
    );
}
