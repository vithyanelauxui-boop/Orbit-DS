import * as React from "react";

import type { IconProps } from "./types";

export function BluetoothXIcon({
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
          <polygon
            points="112 128 176 176 112 224 112 128"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={48}
            y1={80}
            x2={112}
            y2={128}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={48}
            y1={176}
            x2={112}
            y2={128}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={232}
            y1={56}
            x2={184}
            y2={104}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={232}
            y1={104}
            x2={184}
            y2={56}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="144 104 112 128 112 32 144 56"
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
          <path d="M184,176a8,8,0,0,1-3.2,6.4l-64,48A8,8,0,0,1,112,232a7.9,7.9,0,0,1-4.11-1.14,8.3,8.3,0,0,1-3.9-7.18V144L52.76,182.4a8,8,0,0,1-11.16-1.55,8.26,8.26,0,0,1,1.8-11.43L98.66,128,43.38,86.57a8.19,8.19,0,0,1-2.13-10.93,8,8,0,0,1,11.51-2L104,112V32.24a8.21,8.21,0,0,1,2.83-6.34,8,8,0,0,1,10-.3l33.62,25.2A4,4,0,0,1,152,54v52a4,4,0,0,1-1.6,3.2L125.34,128l55.5,41.6A8,8,0,0,1,184,176Zm53.47-77.87L219.37,80l18.11-18.11a8.21,8.21,0,0,0,.41-11.37,8,8,0,0,0-11.49-.18L208.05,68.69,189.93,50.58a8.23,8.23,0,0,0-10.83-.88,8,8,0,0,0-.73,12L196.73,80,178.58,98.13a8.2,8.2,0,0,0-.6,11.1,8,8,0,0,0,11.71.43l18.36-18.35,18.35,18.35a8,8,0,0,0,11.72-.43A8.21,8.21,0,0,0,237.51,98.13Z" />
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
          <polygon
            points="112 128 176 176 112 224 112 128"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={48}
            y1={80}
            x2={112}
            y2={128}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={48}
            y1={176}
            x2={112}
            y2={128}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={232}
            y1={56}
            x2={184}
            y2={104}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={232}
            y1={104}
            x2={184}
            y2={56}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polyline
            points="136.41 109.69 112 128 112 32 136.41 50.31"
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
          <polygon points="112 128 176 176 112 224 112 128" opacity={0.2} />
          <path
            d="M112,32l55.47,41.6a8,8,0,0,1,0,12.8L112,128Z"
            opacity={0.2}
          />
          <polygon
            points="112 128 176 176 112 224 112 128"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={48}
            y1={80}
            x2={112}
            y2={128}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={48}
            y1={176}
            x2={112}
            y2={128}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={232}
            y1={56}
            x2={184}
            y2={104}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={232}
            y1={104}
            x2={184}
            y2={56}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="144 104 112 128 112 32 144 56"
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
