import * as React from "react";

import type { IconProps } from "./types";

export function MatrixLogoIcon({
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
          <polyline
            points="64 40 40 40 40 216 64 216"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="192 40 216 40 216 216 192 216"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M128,160V120a24,24,0,0,0-48,0"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M176,160V120a24,24,0,0,0-48,0"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={80}
            y1={96}
            x2={80}
            y2={160}
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
          <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,200H64a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H72V184h8a8,8,0,0,1,0,16Zm80-40a8,8,0,0,1-8-8V120a8,8,0,0,0-16,0v32a8,8,0,0,1-16,0V120a8,8,0,0,0-16,0v32a8,8,0,0,1-16,0V104a8,8,0,0,1,13.66-5.65A23.94,23.94,0,0,1,128,102.13,24,24,0,0,1,168,120v32A8,8,0,0,1,160,160Zm40,32a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h8V72h-8a8,8,0,0,1,0-16h16a8,8,0,0,1,8,8Z" />
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
          <polyline
            points="64 40 40 40 40 216 64 216"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polyline
            points="192 40 216 40 216 216 192 216"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M128,160V120a24,24,0,0,0-48,0"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M176,160V120a24,24,0,0,0-48,0"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={80}
            y1={96}
            x2={80}
            y2={160}
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
          <rect x={40} y={40} width={176} height={176} opacity={0.2} />
          <polyline
            points="64 40 40 40 40 216 64 216"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="192 40 216 40 216 216 192 216"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M128,160V120a24,24,0,0,0-48,0"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M176,160V120a24,24,0,0,0-48,0"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={80}
            y1={96}
            x2={80}
            y2={160}
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
