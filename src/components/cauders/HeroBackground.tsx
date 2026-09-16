"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function HeroBackground() {
 return (
 <div className={cn(
 "absolute inset-0 z-0 w-full h-[120vh] overflow-hidden rounded-b-3xl",
 )}>
 <Image
 src="https://res.cloudinary.com/cauders/image/upload/v1786997811/ChatGPT_Image_Aug_18_2026_12_40_23_AM_yjtkon.png"
 alt="background gradient"
 fill
 className="object-cover"
 priority
 />
 </div>
 );
}
