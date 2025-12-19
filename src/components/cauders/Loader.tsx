"use client";

import Lottie from "lottie-react";

export default function Loader() {
  return (
    <div className="w-64 h-64">
      <Lottie 
          src="/lottie/loader-animation.json"
          loop={true}
          autoplay={true}
      />
    </div>
  );
}
