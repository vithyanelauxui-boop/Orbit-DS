import * as React from "react";

import type { IconProps } from "./types";

export function LockSimpleOpenIcon({
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
            y={88}
            width={176}
            height={128}
            rx={8}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32"
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
          <path d="M224,96V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V96A16,16,0,0,1,48,80H80V56A48.05,48.05,0,0,1,128,8c23.2,0,43.32,16.15,47.84,38.41a8,8,0,0,1-15.68,3.18C157.2,35,143.37,24,128,24A32,32,0,0,0,96,56V80H208A16,16,0,0,1,224,96Z" />
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
            y={88}
            width={176}
            height={128}
            rx={8}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32"
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
          <rect x={40} y={88} width={176} height={128} rx={8} opacity={0.2} />
          <rect
            x={40}
            y={88}
            width={176}
            height={128}
            rx={8}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32"
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
