import * as React from "react";

import type { IconProps } from "./types";

export function HeartBreakIcon({
  variant = "regular",
  size = 24,
  ...props
}: IconProps) {
  switch (variant) {
    case "regular":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 256 256"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect width={256} height={256} fill="none" />
          <path
            d="M128,75.63,116.18,63.82A54,54,0,0,0,24,102c0,66,104,122,104,122s104-56,104-122a54,54,0,0,0-92.18-38.18L112,91.63l30.18,30.19L120,144"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
        </svg>
      );

    case "fill":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 256 256"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect width={256} height={256} fill="none" />
          <path d="M239.81,107.5c-5.19,67.42-103.7,121.23-108,123.54a8,8,0,0,1-7.58,0C119.8,228.67,16,172,16,102a62,62,0,0,1,96.47-51.55,4,4,0,0,1,.61,6.17L99.72,70a8,8,0,0,0,0,11.31l32.53,32.53L111,135a8,8,0,1,0,11.31,11.31l26.88-26.87a8,8,0,0,0,0-11.31L116.7,75.63l17.47-17.47h0A61.63,61.63,0,0,1,178.41,40C214.73,40.23,242.59,71.29,239.81,107.5Z" />
        </svg>
      );

    case "bold":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 256 256"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect width={256} height={256} fill="none" />
          <path
            d="M128,75.63,116.18,63.82A54,54,0,0,0,24,102c0,66,104,122,104,122s104-56,104-122a54,54,0,0,0-92.18-38.18L112,91.63l30.18,30.19L120,144"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
        </svg>
      );

    case "duotone":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 256 256"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect width={256} height={256} fill="none" />
          <path
            d="M178,48a53.79,53.79,0,0,0-38.18,15.82L128,75.63,116.18,63.82A54,54,0,0,0,24,102c0,66,104,122,104,122s104-56,104-122A54,54,0,0,0,178,48Z"
            opacity={0.2}
          />
          <path
            d="M128,75.63,116.18,63.82A54,54,0,0,0,24,102c0,66,104,122,104,122s104-56,104-122a54,54,0,0,0-92.18-38.18L112,91.63l30.18,30.19L120,144"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
        </svg>
      );

    default:
      return null;
  }
}
