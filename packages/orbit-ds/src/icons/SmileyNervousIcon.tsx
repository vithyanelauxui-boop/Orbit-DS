import * as React from "react";

import type { IconProps } from "./types";

export function SmileyNervousIcon({
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
          <circle
            cx={128}
            cy={128}
            r={96}
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={16}
          />
          <circle cx={92} cy={108} r={12} />
          <circle cx={164} cy={108} r={12} />
          <path
            d="M80,168c12,0,12-16,24-16s12,16,24,16,12-16,24-16,12,16,24,16"
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
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12,12,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm84,80c-10,0-15.05-6.74-18.4-11.2-3-4-3.92-4.8-5.6-4.8s-2.57.76-5.6,4.8C143.05,169.26,138,176,128,176s-15-6.74-18.4-11.2c-3-4-3.92-4.8-5.6-4.8s-2.57.76-5.6,4.8C95.05,169.26,90,176,80,176a8,8,0,0,1,0-16c1.68,0,2.57-.76,5.6-4.8C89,150.74,94,144,104,144s15,6.74,18.4,11.2c3,4,3.92,4.8,5.6,4.8s2.57-.76,5.6-4.8C137,150.74,142,144,152,144s15.05,6.74,18.4,11.2c3,4,3.92,4.8,5.6,4.8a8,8,0,0,1,0,16Z" />
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
          <circle
            cx={128}
            cy={128}
            r={96}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <circle cx={92} cy={108} r={16} />
          <circle cx={164} cy={108} r={16} />
          <path
            d="M86.72,165.81C92.65,161.43,94.79,152,104,152c12,0,12,16,24,16s12-16,24-16c9.21,0,11.35,9.43,17.28,13.81"
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
          <circle cx={128} cy={128} r={96} opacity={0.2} />
          <circle
            cx={128}
            cy={128}
            r={96}
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={16}
          />
          <circle cx={92} cy={108} r={12} />
          <circle cx={164} cy={108} r={12} />
          <path
            d="M80,168c12,0,12-16,24-16s12,16,24,16,12-16,24-16,12,16,24,16"
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
