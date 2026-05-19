import * as React from "react";

import type { IconProps } from "./types";

export function PerspectiveIcon({
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
            d="M216,208a8,8,0,0,1-9.43,7.87l-160-29.09A8,8,0,0,1,40,178.91V77.09a8,8,0,0,1,6.57-7.87l160-29.09A8,8,0,0,1,216,48Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={16}
            y1={128}
            x2={240}
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
          <path d="M248,136a8,8,0,0,1-8,8H224v64a16,16,0,0,1-16,16,16.47,16.47,0,0,1-2.87-.26l-160-29.09A16,16,0,0,1,32,178.91V144H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,136ZM36,112H220a4,4,0,0,0,4-4V48.42a16.48,16.48,0,0,0-4.07-11.08,16,16,0,0,0-14.79-5.08l-160,29.09A16,16,0,0,0,32,77.09V108A4,4,0,0,0,36,112Z" />
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
            d="M216,208a8,8,0,0,1-9.43,7.87l-160-29.09A8,8,0,0,1,40,178.91V77.09a8,8,0,0,1,6.57-7.87l160-29.09A8,8,0,0,1,216,48Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={16}
            y1={128}
            x2={240}
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
            d="M216,208a8,8,0,0,1-9.43,7.87l-160-29.09A8,8,0,0,1,40,178.91V77.09a8,8,0,0,1,6.57-7.87l160-29.09A8,8,0,0,1,216,48Z"
            opacity={0.2}
          />
          <path
            d="M216,208a8,8,0,0,1-9.43,7.87l-160-29.09A8,8,0,0,1,40,178.91V77.09a8,8,0,0,1,6.57-7.87l160-29.09A8,8,0,0,1,216,48Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={16}
            y1={128}
            x2={240}
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
