import * as React from "react";

import type { IconProps } from "./types";

export function SmileySadIcon({
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
            d="M168,176c-8.3-14.35-22.23-24-40-24s-31.7,9.65-40,24"
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
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm80,86.92A8,8,0,0,1,161.08,180c-7.47-12.91-19.21-20-33.08-20s-25.61,7.1-33.08,20a8,8,0,1,1-13.84-8c10.29-17.79,27.39-28,46.92-28s36.63,10.2,46.92,28A8,8,0,0,1,172,182.92ZM164,120a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z" />
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
            d="M167,172a48,48,0,0,0-78,0"
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
            d="M168,176c-8.3-14.35-22.23-24-40-24s-31.7,9.65-40,24"
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
