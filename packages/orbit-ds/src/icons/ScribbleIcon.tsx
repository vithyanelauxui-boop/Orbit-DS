import * as React from "react";

import type { IconProps } from "./types";

export function ScribbleIcon({
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
          <path
            d="M88,40,46.63,81.37a22.62,22.62,0,0,0,0,32h0a22.62,22.62,0,0,0,32,0l66.74-66.74a22.62,22.62,0,0,1,32,0h0a22.62,22.62,0,0,1,0,32L78.63,177.37a22.62,22.62,0,0,0,0,32h0a22.62,22.62,0,0,0,32,0l66.74-66.74a22.62,22.62,0,0,1,32,0h0a22.62,22.62,0,0,1,0,32L200,184a22.62,22.62,0,0,0,0,32h0"
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
          <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM193.66,169.66l-8,8a9,9,0,0,0,0,12.68l4,4a8,8,0,0,1-11.32,11.32l-4-4a25,25,0,0,1,0-35.32l8-8a9,9,0,0,0,0-12.68,9,9,0,0,0-12.68,0l-48,48a25,25,0,0,1-35.32-35.32l72-72a9,9,0,0,0,0-12.68,9,9,0,0,0-12.68,0l-48,48A25,25,0,0,1,62.34,86.34l28-28a8,8,0,0,1,11.32,11.32l-28,28a9,9,0,0,0,0,12.68,9,9,0,0,0,12.68,0l48-48a25,25,0,0,1,35.32,35.32l-72,72a9,9,0,0,0,0,12.68,9,9,0,0,0,12.68,0l48-48a25,25,0,0,1,35.32,35.32Z" />
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
          <path
            d="M88,40,46.63,81.37a22.62,22.62,0,0,0,0,32h0a22.62,22.62,0,0,0,32,0l66.74-66.74a22.62,22.62,0,0,1,32,0h0a22.62,22.62,0,0,1,0,32L78.63,177.37a22.62,22.62,0,0,0,0,32h0a22.62,22.62,0,0,0,32,0l66.74-66.74a22.62,22.62,0,0,1,32,0h0a22.62,22.62,0,0,1,0,32L200,184a22.62,22.62,0,0,0,0,32h0"
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
            d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Z"
            opacity={0.2}
          />
          <path
            d="M88,40,46.63,81.37a22.62,22.62,0,0,0,0,32h0a22.62,22.62,0,0,0,32,0l66.74-66.74a22.62,22.62,0,0,1,32,0h0a22.62,22.62,0,0,1,0,32L78.63,177.37a22.62,22.62,0,0,0,0,32h0a22.62,22.62,0,0,0,32,0l66.74-66.74a22.62,22.62,0,0,1,32,0h0a22.62,22.62,0,0,1,0,32L200,184a22.62,22.62,0,0,0,0,32h0"
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
