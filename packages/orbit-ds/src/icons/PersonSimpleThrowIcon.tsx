import * as React from "react";

import type { IconProps } from "./types";

export function PersonSimpleThrowIcon({
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
          <circle
            cx={128}
            cy={56}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle cx={64} cy={96} r={16} />
          <path
            d="M216,105.6s-32-25.67-80,7c-50.47,34.3-80,20.85-80,20.85"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M143.89,107.62C143,126.17,144,208,64,232"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="139.94 145.95 176 176 160 224"
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
          <path d="M96,56a32,32,0,1,1,32,32A32,32,0,0,1,96,56ZM221,99.36c-1.5-1.2-37.22-29-89.51,6.57C86,136.84,59.57,126.23,59.32,126.12a8,8,0,1,0-6.63,14.56c.61.28,7.49,3.27,19.67,3.27,14.21,0,35.64-4.11,62.77-21.29-2.28,29.41-12.73,83.47-73.43,101.68a8,8,0,1,0,4.6,15.32c34.83-10.45,59.45-32.34,73.2-65.08a141.86,141.86,0,0,0,5.1-14.33l22.08,18.4-14.27,42.82a8,8,0,0,0,15.18,5.06l16-48a8,8,0,0,0-2.47-8.68l-32.42-27a215.91,215.91,0,0,0,3-30.34c36.18-18.57,59-.85,59.28-.65a8,8,0,1,0,10-12.48ZM64,112A16,16,0,1,0,48,96,16,16,0,0,0,64,112Z" />
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
          <circle
            cx={128}
            cy={56}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <circle cx={64} cy={96} r={20} />
          <path
            d="M216,113.6s-32-25.67-80,7c-50.47,34.3-80,20.85-80,20.85"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polyline
            points="139.94 145.95 176 176 160 224"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M143.56,115.8c-1.3,27.56-8.3,94.82-79.56,116.2"
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
          <circle cx={128} cy={56} r={24} opacity={0.2} />
          <circle
            cx={128}
            cy={56}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle cx={64} cy={96} r={16} />
          <path
            d="M216,105.6s-32-25.67-80,7c-50.47,34.3-80,20.85-80,20.85"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M143.89,107.62C143,126.17,144,208,64,232"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="139.94 145.95 176 176 160 224"
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
