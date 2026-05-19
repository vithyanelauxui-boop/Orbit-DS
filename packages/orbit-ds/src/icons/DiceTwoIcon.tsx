import * as React from "react";

import type { IconProps } from "./types";

export function DiceTwoIcon({
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
            x={40}
            y={40}
            width={176}
            height={176}
            rx={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle cx={108} cy={108} r={12} />
          <circle cx={148} cy={148} r={12} />
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
          <path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm-84,88a12,12,0,1,1,12-12A12,12,0,0,1,108,120Zm40,40a12,12,0,1,1,12-12A12,12,0,0,1,148,160Z" />
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
            x={40}
            y={40}
            width={176}
            height={176}
            rx={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <circle cx={104} cy={104} r={16} />
          <circle cx={152} cy={152} r={16} />
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
          <rect x={40} y={40} width={176} height={176} rx={24} opacity={0.2} />
          <rect
            x={40}
            y={40}
            width={176}
            height={176}
            rx={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle cx={108} cy={108} r={12} />
          <circle cx={148} cy={148} r={12} />
        </svg>
      );

    default:
      return null;
  }
}
