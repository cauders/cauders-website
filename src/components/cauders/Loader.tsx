"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Loader() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch('/lottie/loader-animation.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch(() => {});
  }, []);

  return (
    <div className="w-64 h-64 flex items-center justify-center">
      {animationData ? (
        <Lottie 
          animationData={animationData}
          loop={true}
          autoplay={true}
        />
      ) : (
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      )}
    </div>
  );
}
