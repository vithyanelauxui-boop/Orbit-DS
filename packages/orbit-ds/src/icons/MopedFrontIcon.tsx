import * as React from "react";

import type { IconProps } from "./types";

export function MopedFrontIcon({
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
          <rect
            x={104}
            y={144}
            width={48}
            height={96}
            rx={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle
            cx={128}
            cy={48}
            r={32}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={160}
            y1={48}
            x2={208}
            y2={48}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={48}
            y1={48}
            x2={96}
            y2={48}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M104,208H80a8,8,0,0,1-8-8V136a56,56,0,0,1,56-56h0a56,56,0,0,1,56,56v64a8,8,0,0,1-8,8H152"
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
          <path d="M208,40H167.2a40,40,0,0,0-78.4,0H48a8,8,0,0,0,0,16H88.8a40,40,0,0,0,12.58,21.82A64.08,64.08,0,0,0,64,136v64a16,16,0,0,0,16,16H96a32,32,0,0,0,64,0h16a16,16,0,0,0,16-16V136a64.08,64.08,0,0,0-37.38-58.18A40,40,0,0,0,167.2,56H208a8,8,0,0,0,0-16ZM144,216a16,16,0,0,1-32,0V168a16,16,0,0,1,32,0ZM128,72a24,24,0,1,1,24-24A24,24,0,0,1,128,72Z" />
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
          <rect
            x={108}
            y={144}
            width={40}
            height={96}
            rx={20}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <circle
            cx={128}
            cy={48}
            r={32}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={160}
            y1={48}
            x2={208}
            y2={48}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={48}
            y1={48}
            x2={96}
            y2={48}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M108,208H80a8,8,0,0,1-8-8V136a56,56,0,0,1,56-56h0a56,56,0,0,1,56,56v64a8,8,0,0,1-8,8H148"
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
          <rect x={104} y={144} width={48} height={96} rx={24} opacity={0.2} />
          <circle cx={128} cy={48} r={32} opacity={0.2} />
          <rect
            x={104}
            y={144}
            width={48}
            height={96}
            rx={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle
            cx={128}
            cy={48}
            r={32}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={160}
            y1={48}
            x2={208}
            y2={48}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={48}
            y1={48}
            x2={96}
            y2={48}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M104,208H80a8,8,0,0,1-8-8V136a56,56,0,0,1,56-56h0a56,56,0,0,1,56,56v64a8,8,0,0,1-8,8H152"
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
