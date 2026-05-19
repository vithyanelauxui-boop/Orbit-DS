import * as React from "react";

import type { IconProps } from "./types";

export function WalletIcon({
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
            d="M40,56V184a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H56A16,16,0,0,1,40,56h0A16,16,0,0,1,56,40H192"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle cx={180} cy={132} r={12} />
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
          <path d="M216,64H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,56V184a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm-36,80a12,12,0,1,1,12-12A12,12,0,0,1,180,144Z" />
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
          <circle cx={180} cy={136} r={16} />
          <path
            d="M40,60.73V180a20,20,0,0,0,20,20H204a20,20,0,0,0,20-20V100a20,20,0,0,0-20-20H60.48C49.63,80,40.4,71.57,40,60.73A20,20,0,0,1,60,40H192"
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
            d="M40,184a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H56A16,16,0,0,1,40,56Z"
            opacity={0.2}
          />
          <path
            d="M40,56V184a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H56A16,16,0,0,1,40,56h0A16,16,0,0,1,56,40H192"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle cx={180} cy={132} r={12} />
        </svg>
      );

    default:
      return null;
  }
}
