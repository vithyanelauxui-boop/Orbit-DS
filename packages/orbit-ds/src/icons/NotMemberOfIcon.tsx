import * as React from "react";

import type { IconProps } from "./types";

export function NotMemberOfIcon({
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
          <line
            x1={208}
            y1={40}
            x2={48}
            y2={216}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={200}
            y1={128}
            x2={48}
            y2={128}
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
          <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM190,69.27,145.63,120H176a8,8,0,0,1,0,16H131.63l-28.76,32.87A47.72,47.72,0,0,0,128,176h48a8,8,0,0,1,0,16H128a63.62,63.62,0,0,1-35.78-11L78,197.27a8,8,0,0,1-12-10.54l14.21-16.24A64,64,0,0,1,128,64h45.37L178,58.73a8,8,0,1,1,12,10.54ZM128,80h31.37l-35,40H80.68A48.07,48.07,0,0,1,128,80ZM80.68,136h29.69L90.84,158.32A47.78,47.78,0,0,1,80.68,136Z" />
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
          <line
            x1={208}
            y1={40}
            x2={48}
            y2={216}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={200}
            y1={128}
            x2={48}
            y2={128}
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
            d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72Z"
            opacity={0.2}
          />
          <line
            x1={208}
            y1={40}
            x2={48}
            y2={216}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={200}
            y1={128}
            x2={48}
            y2={128}
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
