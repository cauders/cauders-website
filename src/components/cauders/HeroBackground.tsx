"use client";

import { cn } from "@/lib/utils";

export default function HeroBackground() {
    return (
        <div className={cn(
            "absolute inset-0 z-0 w-full h-full overflow-hidden",
        )}>
           <svg width="100%" height="100%" viewBox="0 0 1640 928" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                <g clipPath="url(#clip0_192_64)">
                    <rect width="1640" height="928" fill="hsl(var(--background))" />
                    <g filter="url(#filter0_f_192_64)">
                        <ellipse cx="1708.38" cy="431.091" rx="218.724" ry="297.493" transform="rotate(149.826 1708.38 431.091)" fill="hsl(var(--primary) / 0.5)" />
                    </g>
                    <ellipse cx="248.513" cy="577.508" rx="0.591443" ry="0.591443" fill="#D9D9D9" />
                    <g filter="url(#filter1_f_192_64)">
                        <path d="M1308 770C954.621 896.161 496.377 1085.51 471.5 1015.83C446.623 946.152 793.62 627.494 1147 501.332C1500.38 375.171 1678.62 57.3194 1703.5 127C1728.38 196.681 1661.38 643.839 1308 770Z" fill="hsl(var(--primary) / 0.5)" />
                    </g>
                    <g opacity="0.76" filter="url(#filter2_f_192_64)">
                        <ellipse cx="-226.5" cy="503.422" rx="315.096" ry="466.682" transform="rotate(-32.2465 -226.5 503.422)" fill="hsl(var(--primary) / 0.5)" />
                    </g>
                    <g filter="url(#filter3_f_192_64)">
                        <ellipse cx="549.229" cy="810.743" rx="204.772" ry="228.694" transform="rotate(70.3528 549.229 810.743)" fill="hsl(var(--primary) / 0.5)" />
                    </g>
                </g>
                <defs>
                    <filter id="filter0_f_192_64" x="1019.11" y="-296.876" width="1378.55" height="1455.93" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="224.1" result="effect1_foregroundBlur_192_64" />
                    </filter>
                    <filter id="filter1_f_192_64" x="299.238" y="-53.8669" width="1579.91" height="1255.66" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="85.5" result="effect1_foregroundBlur_192_64" />
                    </filter>
                    <filter id="filter2_f_192_64" x="-935.825" y="-270.305" width="1418.65" height="1547.45" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="172.3" result="effect1_foregroundBlur_192_64" />
                    </filter>
                    <filter id="filter3_f_192_64" x="43.1508" y="323.174" width="1012.16" height="975.139" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="139.95" result="effect1_foregroundBlur_192_64" />
                    </filter>
                    <clipPath id="clip0_192_64">
                        <rect width="1640" height="928" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}