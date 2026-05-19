import * as React from "react";

import type { IconProps } from "./types";

export function TriangleDashedIcon({
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
            x1={152}
            y1={216}
            x2={104}
            y2={216}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M225.21,184l4.66,8.09C236,202.79,228.08,216,215.46,216H192"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M64,216H40.54C27.92,216,20,202.79,26.13,192.09L30.79,184"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={179.14}
            y1={104}
            x2={202.18}
            y2={144}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M99.89,64l13.7-23.78c6.3-11,22.52-11,28.82,0L156.11,64"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={53.82}
            y1={144}
            x2={76.86}
            y2={104}
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
          <path d="M236.8,188.09,149.35,36.22a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.34,24.34,0,0,0,40.55,224h174.9a24.34,24.34,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM108,200H60.79A12,12,0,0,1,50.4,182l24.18-42a8,8,0,0,1,13.87,8L67.71,184H108a8,8,0,0,1,0,16Zm-1.12-84A8,8,0,0,1,93,108l24.59-42.7a12,12,0,0,1,20.8,0L163,108a8,8,0,0,1-13.87,8L128,79.31Zm98.72,78a12.05,12.05,0,0,1-10.39,6H148a8,8,0,0,1,0-16h40.29l-20.74-36a8,8,0,0,1,13.87-8l24.18,42A12,12,0,0,1,205.6,194Z" />
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
            x1={152}
            y1={216}
            x2={104}
            y2={216}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M225.21,184l4.66,8.09C236,202.79,228.08,216,215.46,216H192"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M64,216H40.54C27.92,216,20,202.79,26.13,192.09L30.79,184"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={179.14}
            y1={104}
            x2={202.18}
            y2={144}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M99.89,64l13.7-23.78c6.3-11,22.52-11,28.82,0L156.11,64"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={53.82}
            y1={144}
            x2={76.86}
            y2={104}
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
            d="M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z"
            opacity={0.2}
          />
          <line
            x1={152}
            y1={216}
            x2={104}
            y2={216}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M225.21,184l4.66,8.09C236,202.79,228.08,216,215.46,216H192"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M64,216H40.54C27.92,216,20,202.79,26.13,192.09L30.79,184"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={179.14}
            y1={104}
            x2={202.18}
            y2={144}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M99.89,64l13.7-23.78c6.3-11,22.52-11,28.82,0L156.11,64"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={53.82}
            y1={144}
            x2={76.86}
            y2={104}
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
