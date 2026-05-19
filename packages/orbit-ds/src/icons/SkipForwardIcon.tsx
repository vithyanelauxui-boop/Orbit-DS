import * as React from "react";

import type { IconProps } from "./types";

export function SkipForwardIcon({
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
            x1={200}
            y1={40}
            x2={200}
            y2={216}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M56,47.88V208.12a8,8,0,0,0,12.19,6.65L196.3,134.65a7.83,7.83,0,0,0,0-13.3L68.19,41.23A8,8,0,0,0,56,47.88Z"
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
          <path d="M208,40V216a8,8,0,0,1-16,0V146.77L72.43,221.55A15.95,15.95,0,0,1,48,208.12V47.88A15.95,15.95,0,0,1,72.43,34.45L192,109.23V40a8,8,0,0,1,16,0Z" />
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
            x1={200}
            y1={40}
            x2={200}
            y2={216}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M56,47.88V208.12a8,8,0,0,0,12.19,6.65L196.3,134.65a7.83,7.83,0,0,0,0-13.3L68.19,41.23A8,8,0,0,0,56,47.88Z"
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
            d="M56,47.88V208.12a8,8,0,0,0,12.19,6.65L196.3,134.65a7.83,7.83,0,0,0,0-13.3L68.19,41.23A8,8,0,0,0,56,47.88Z"
            opacity={0.2}
          />
          <line
            x1={200}
            y1={40}
            x2={200}
            y2={216}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M56,47.88V208.12a8,8,0,0,0,12.19,6.65L196.3,134.65a7.83,7.83,0,0,0,0-13.3L68.19,41.23A8,8,0,0,0,56,47.88Z"
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
