"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function HomePageBackground() {
    return (
        <div className={cn(
            "fixed inset-0 z-0 w-full h-screen overflow-hidden",
        )}>
           <Image
                src="/images/background/home-page-bg.svg"
                alt="background"
                fill
                className="object-cover"
                priority
           />
        </div>
    );
}
