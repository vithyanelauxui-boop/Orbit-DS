import * as React from "react";

import type { IconProps } from "./types";

export function ParallelogramIcon({
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
            d="M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z"
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
          <path d="M246.58,62.57l-64.8,144A16,16,0,0,1,167.19,216H24A16,16,0,0,1,9.42,193.43l64.8-144A16,16,0,0,1,88.81,40H232a16,16,0,0,1,14.59,22.57Z" />
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
            d="M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z"
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
            d="M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z"
            opacity={0.2}
          />
          <path
            d="M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z"
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
