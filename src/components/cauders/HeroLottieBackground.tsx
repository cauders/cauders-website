"use client";

import Lottie from "lottie-react";
import animationData from "../../../public/lottie/hero-animation.json";

export default function HeroLottieBackground() {
  const style = {
    height: '100%',
    width: '100%',
  };

  return (
    <Lottie 
      animationData={animationData} 
      style={style}
      loop={true}
      autoplay={true}
    />
  );
}
