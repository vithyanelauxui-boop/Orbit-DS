import * as React from "react";

import type { IconProps } from "./types";

export function BookOpenUserIcon({
  variant = "regular",
  size = 24,
  ...props
}: IconProps) {
  switch (variant) {
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
          <path d="M240,80V200a8,8,0,0,1-8,8H160a24,24,0,0,0-24,23.94,7.9,7.9,0,0,1-5.12,7.55A8,8,0,0,1,120,232a24,24,0,0,0-24-24H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H88a32,32,0,0,1,32,32v63.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V104a32,32,0,0,1,32-32h64A8,8,0,0,1,240,80ZM88.81,56H89a47.92,47.92,0,0,1,36,17.4,4,4,0,0,0,6.08,0A47.92,47.92,0,0,1,167,56h.19a4,4,0,0,0,3.54-5.84,48,48,0,0,0-85.46,0A4,4,0,0,0,88.81,56Z" />
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
            d="M128,116a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M24,200H96a32,32,0,0,1,32,32V116A32,32,0,0,0,96,84H24Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M96,48a40,40,0,0,1,64,0"
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
            d="M160,80a32,32,0,0,0-32,32A32,32,0,0,0,96,80H24V200H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32h72V80Z"
            opacity={0.3}
          />
          <path
            d="M128,112a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M24,200H96a32,32,0,0,1,32,32V112A32,32,0,0,0,96,80H24Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M96,48a40,40,0,0,1,64,0"
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
