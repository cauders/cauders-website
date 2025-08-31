
"use client";

import Lottie from "lottie-react";
import animationData from "@/../public/lottie/loader-animation.json";
import { cn } from "@/lib/utils";

export default function Loader() {
  return (
    <div className={cn(
        "fixed inset-0 z-[1000] flex items-center justify-center bg-background transition-opacity duration-500"
    )}>
      <div className="w-64 h-64">
        <Lottie 
            animationData={animationData} 
            loop={true}
            autoplay={true}
        />
      </div>
    </div>
  );
}
