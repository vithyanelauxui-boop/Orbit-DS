import * as React from "react";

import type { IconProps } from "./types";

export function NewspaperClippingIcon({
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
            d="M32,216V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V216l-32-16-32,16-32-16L96,216,64,200Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={144}
            y1={112}
            x2={192}
            y2={112}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={144}
            y1={144}
            x2={192}
            y2={144}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <rect
            x={64}
            y={96}
            width={48}
            height={64}
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
          <path d="M216,40H40A16,16,0,0,0,24,56V216a8,8,0,0,0,11.58,7.15L64,208.94l28.42,14.21a8,8,0,0,0,7.16,0L128,208.94l28.42,14.21a8,8,0,0,0,7.16,0L192,208.94l28.42,14.21A8,8,0,0,0,232,216V56A16,16,0,0,0,216,40ZM116,160a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm76-8H144a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm0-32H144a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z" />
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
            d="M32,216V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V216l-32-16-32,16-32-16L96,216,64,200Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={148}
            y1={108}
            x2={184}
            y2={108}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={148}
            y1={148}
            x2={184}
            y2={148}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <rect
            x={72}
            y={96}
            width={40}
            height={64}
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
            d="M216,48H40a8,8,0,0,0-8,8V216l32-16,32,16,32-16,32,16,32-16,32,16V56A8,8,0,0,0,216,48ZM112,160H64V96h48Z"
            opacity={0.2}
          />
          <path
            d="M32,216V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V216l-32-16-32,16-32-16L96,216,64,200Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={144}
            y1={112}
            x2={192}
            y2={112}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={144}
            y1={144}
            x2={192}
            y2={144}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <rect
            x={64}
            y={96}
            width={48}
            height={64}
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
