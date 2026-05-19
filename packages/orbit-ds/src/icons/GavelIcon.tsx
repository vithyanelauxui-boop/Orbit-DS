import * as React from "react";

import type { IconProps } from "./types";

export function GavelIcon({
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
            x={50.75}
            y={44.69}
            width={106.51}
            height={38.63}
            rx={8}
            transform="translate(-14.79 92.28) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <rect
            x={138.75}
            y={132.69}
            width={106.51}
            height={38.63}
            rx={8}
            transform="translate(-51.24 180.28) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={145.66}
            y1={49.66}
            x2={206.34}
            y2={110.34}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={89.66}
            y1={105.66}
            x2={150.34}
            y2={166.34}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M132,148,61,219a17,17,0,0,1-24,0h0a17,17,0,0,1,0-24l71-71"
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
          <path d="M52.69,99.31a16,16,0,0,1,0-22.63l64-64a16,16,0,0,1,22.63,22.63l-64,64a16,16,0,0,1-22.63,0Zm190.63,17.37a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.63h0a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.68Zm-35.11-15.8L155.12,47.79a4,4,0,0,0-5.66,0L87.8,109.45a4,4,0,0,0,0,5.66L103,130.34,28.69,204.69a16,16,0,0,0,22.62,22.62L125.66,153l15.23,15.23a4,4,0,0,0,5.66,0l61.66-61.66A4,4,0,0,0,208.21,100.88Z" />
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
            x={50.75}
            y={44.69}
            width={106.51}
            height={38.63}
            rx={8}
            transform="translate(-14.79 92.28) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <rect
            x={138.75}
            y={132.69}
            width={106.51}
            height={38.63}
            rx={8}
            transform="translate(-51.24 180.28) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={145.66}
            y1={49.66}
            x2={206.34}
            y2={110.34}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={89.66}
            y1={105.66}
            x2={150.34}
            y2={166.34}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M134.14,150.14l-68,68a20,20,0,0,1-28.28-28.28l68-68"
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
          <rect
            x={50.75}
            y={44.69}
            width={106.51}
            height={38.63}
            rx={8}
            transform="translate(-14.79 92.28) rotate(-45)"
            opacity={0.2}
          />
          <rect
            x={138.75}
            y={132.69}
            width={106.51}
            height={38.63}
            rx={8}
            transform="translate(-51.24 180.28) rotate(-45)"
            opacity={0.2}
          />
          <rect
            x={50.75}
            y={44.69}
            width={106.51}
            height={38.63}
            rx={8}
            transform="translate(-14.79 92.28) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <rect
            x={138.75}
            y={132.69}
            width={106.51}
            height={38.63}
            rx={8}
            transform="translate(-51.24 180.28) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={145.66}
            y1={49.66}
            x2={206.34}
            y2={110.34}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={89.66}
            y1={105.66}
            x2={150.34}
            y2={166.34}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M132,148,61,219a17,17,0,0,1-24,0h0a17,17,0,0,1,0-24l71-71"
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
