import * as React from "react";

import type { IconProps } from "./types";

export function ApproximateEqualsIcon({
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
            d="M40,161.61c72-59.69,104,56.47,176-3.22"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M40,97.61c72-59.69,104,56.47,176-3.22"
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
          <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM197.2,160.87c-13.07,11.18-24.9,15.1-35.64,15.1-14.26,0-26.62-6.92-37.47-13-18.41-10.31-32.95-18.45-54.89.31a8,8,0,1,1-10.4-12.16c30.42-26,54.09-12.76,73.11-2.11,18.41,10.31,33,18.45,54.89-.31a8,8,0,0,1,10.4,12.16Zm0-56c-13.07,11.18-24.9,15.1-35.64,15.1-14.26,0-26.62-6.92-37.47-13-18.41-10.31-32.95-18.45-54.89.31A8,8,0,0,1,58.8,95.13c30.42-26,54.09-12.76,73.11-2.11,18.41,10.31,33,18.45,54.89-.31a8,8,0,1,1,10.4,12.16Z" />
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
            d="M40,161.61c72-59.69,104,56.47,176-3.22"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M40,97.61c72-59.69,104,56.47,176-3.22"
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
          <rect x={40} y={40} width={176} height={176} rx={16} opacity={0.2} />
          <path
            d="M40,161.61c72-59.69,104,56.47,176-3.22"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M40,97.61c72-59.69,104,56.47,176-3.22"
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
