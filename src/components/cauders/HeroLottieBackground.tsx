"use client";

import Lottie from "lottie-react";

export default function HeroLottieBackground() {
  const style = {
    height: '100%',
    width: '100%',
  };

  return (
    <Lottie 
      animationData={'/lottie/hero-animation.json'} 
      style={style}
      loop={true}
      autoplay={true}
    />
  );
}
