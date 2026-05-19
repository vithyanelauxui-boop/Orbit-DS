import * as React from "react";

import type { IconProps } from "./types";

export function DoorOpenIcon({
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
            x1={24}
            y1={224}
            x2={232}
            y2={224}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle cx={132} cy={132} r={12} />
          <line
            x1={168}
            y1={32}
            x2={168}
            y2={224}
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
          <path d="M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-64,0H64V40H168Zm-40-84a12,12,0,1,1,12,12A12,12,0,0,1,128,132Z" />
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
            x1={24}
            y1={224}
            x2={232}
            y2={224}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <circle cx={120} cy={128} r={16} />
          <line
            x1={160}
            y1={32}
            x2={160}
            y2={224}
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
          <path d="M168,32V224h32V40a8,8,0,0,0-8-8Z" opacity={0.2} />
          <line
            x1={24}
            y1={224}
            x2={232}
            y2={224}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle cx={132} cy={132} r={12} />
          <line
            x1={168}
            y1={32}
            x2={168}
            y2={224}
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
