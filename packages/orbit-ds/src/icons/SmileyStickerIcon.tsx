import * as React from "react";

import type { IconProps } from "./types";

export function SmileyStickerIcon({
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
            d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M156.22,219.79a95.9,95.9,0,1,1,63.57-63.58Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle cx={92} cy={108} r={12} />
          <circle cx={164} cy={108} r={12} />
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
          <path d="M128,24a104,104,0,1,0,30.57,203.43,7.9,7.9,0,0,0,3.3-2l63.57-63.57a8,8,0,0,0,2-3.31A104.09,104.09,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm82.92,60c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8ZM164,120a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z" />
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
            d="M156.22,219.79a95.9,95.9,0,1,1,63.57-63.58Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <circle cx={92} cy={108} r={16} />
          <circle cx={164} cy={108} r={16} />
          <path
            d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24"
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
          <path d="M156.22,219.79a95.9,95.9,0,1,1,63.57-63.58Z" opacity={0.2} />
          <path
            d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M156.22,219.79a95.9,95.9,0,1,1,63.57-63.58Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle cx={92} cy={108} r={12} />
          <circle cx={164} cy={108} r={12} />
        </svg>
      );

    default:
      return null;
  }
}
