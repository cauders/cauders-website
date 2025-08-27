"use client";

import Lottie from "lottie-react";
import animationData from "@/../public/lottie/hero-animation.json";

export default function HeroLottieBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-full h-full">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}
