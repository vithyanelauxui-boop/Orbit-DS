import * as React from "react";

import type { IconProps } from "./types";

export function CurrencyNgnIcon({
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
            x1={40}
            y1={144}
            x2={216}
            y2={144}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={40}
            y1={112}
            x2={216}
            y2={112}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="64 210 64 46 192 210 192 46"
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
          <path d="M143.55,136H160v23ZM96,120h16.45L96,97Zm136,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-32,0a8,8,0,0,0-8-8H176V72a8,8,0,0,0-16,0v48H132.12L94.51,67.35A8,8,0,0,0,80,72v48H64a8,8,0,0,0,0,16H80v48a8,8,0,0,0,16,0V136h27.88l37.61,52.65A8,8,0,0,0,168,192a7.91,7.91,0,0,0,2.44-.38A8,8,0,0,0,176,184V136h16A8,8,0,0,0,200,128Z" />
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
            x1={40}
            y1={128}
            x2={216}
            y2={128}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polyline
            points="64 210 64 46 192 210 192 46"
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
          <polygon
            points="115.51 112 115.51 112 64 46 64 144 140.49 144 192 210 192 112 115.51 112"
            opacity={0.2}
          />
          <line
            x1={40}
            y1={144}
            x2={216}
            y2={144}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={40}
            y1={112}
            x2={216}
            y2={112}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="64 210 64 46 192 210 192 46"
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
