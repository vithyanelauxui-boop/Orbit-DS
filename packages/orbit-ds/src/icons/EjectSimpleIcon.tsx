import * as React from "react";

import type { IconProps } from "./types";

export function EjectSimpleIcon({
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
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect width={256} height={256} fill="none" />
          <line
            x1={224}
            y1={200}
            x2={32}
            y2={200}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M33.82,138.8,115.48,38a16.1,16.1,0,0,1,25,0L222.18,138.8a8.1,8.1,0,0,1-6.26,13.2H40.08A8.1,8.1,0,0,1,33.82,138.8Z"
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
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect width={256} height={256} fill="none" />
          <path d="M232,200a8,8,0,0,1-8,8H32a8,8,0,1,1,0-16H224A8,8,0,0,1,232,200ZM40.09,160H215.91a16.1,16.1,0,0,0,12.48-26.23L146.74,32.94a24.11,24.11,0,0,0-37.48,0L27.61,133.77A16.1,16.1,0,0,0,40.09,160Z" />
        </svg>
      );

    case "bold":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect width={256} height={256} fill="none" />
          <line
            x1={224}
            y1={200}
            x2={32}
            y2={200}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M33.82,138.8,115.48,38a16.1,16.1,0,0,1,25,0L222.18,138.8a8.1,8.1,0,0,1-6.26,13.2H40.08A8.1,8.1,0,0,1,33.82,138.8Z"
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
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect width={256} height={256} fill="none" />
          <path
            d="M33.82,138.8,115.48,38a16.1,16.1,0,0,1,25,0L222.18,138.8a8.1,8.1,0,0,1-6.26,13.2H40.08A8.1,8.1,0,0,1,33.82,138.8Z"
            opacity={0.2}
          />
          <line
            x1={224}
            y1={200}
            x2={32}
            y2={200}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M33.82,138.8,115.48,38a16.1,16.1,0,0,1,25,0L222.18,138.8a8.1,8.1,0,0,1-6.26,13.2H40.08A8.1,8.1,0,0,1,33.82,138.8Z"
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
