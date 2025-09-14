"use client";

import Lottie from "lottie-react";
import { cn } from "@/lib/utils";

export default function Loader() {
  return (
    <div className={cn(
        "fixed inset-0 z-[1000] flex items-center justify-center bg-background transition-opacity duration-500"
    )}>
      <div className="w-64 h-64">
        <Lottie 
            src="/lottie/loader-animation.json"
            loop={true}
            autoplay={true}
        />
      </div>
    </div>
  );
}
