import * as React from "react";

import type { IconProps } from "./types";

export function DiamondsFourIcon({
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
            x={99.72}
            y={35.72}
            width={56.57}
            height={56.57}
            transform="translate(-7.76 109.25) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <rect
            x={99.72}
            y={163.72}
            width={56.57}
            height={56.57}
            transform="translate(-98.27 146.75) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <rect
            x={163.72}
            y={99.72}
            width={56.57}
            height={56.57}
            transform="translate(-34.27 173.25) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <rect
            x={35.72}
            y={99.72}
            width={56.57}
            height={56.57}
            transform="translate(-71.76 82.75) rotate(-45)"
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
          <path d="M82.34,69.66a8,8,0,0,1,0-11.32l40-40a8,8,0,0,1,11.32,0l40,40a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0Zm51.32,76.68a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32Zm104-24-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,237.66,122.34Zm-128,0-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,109.66,122.34Z" />
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
            x={101.13}
            y={35.13}
            width={53.74}
            height={53.74}
            transform="translate(-6.35 108.67) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <rect
            x={101.13}
            y={167.13}
            width={53.74}
            height={53.74}
            transform="translate(-99.69 147.33) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <rect
            x={35.13}
            y={101.13}
            width={53.74}
            height={53.74}
            transform="translate(-72.35 81.33) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <rect
            x={167.13}
            y={101.13}
            width={53.74}
            height={53.74}
            transform="translate(-33.69 174.67) rotate(-45)"
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
            x={99.72}
            y={35.72}
            width={56.57}
            height={56.57}
            transform="translate(-7.76 109.25) rotate(-45)"
            opacity={0.2}
          />
          <rect
            x={99.72}
            y={163.72}
            width={56.57}
            height={56.57}
            transform="translate(-98.27 146.75) rotate(-45)"
            opacity={0.2}
          />
          <rect
            x={163.72}
            y={99.72}
            width={56.57}
            height={56.57}
            transform="translate(-34.27 173.25) rotate(-45)"
            opacity={0.2}
          />
          <rect
            x={35.72}
            y={99.72}
            width={56.57}
            height={56.57}
            transform="translate(-71.76 82.75) rotate(-45)"
            opacity={0.2}
          />
          <rect
            x={99.72}
            y={35.72}
            width={56.57}
            height={56.57}
            transform="translate(-7.76 109.25) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <rect
            x={99.72}
            y={163.72}
            width={56.57}
            height={56.57}
            transform="translate(-98.27 146.75) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <rect
            x={163.72}
            y={99.72}
            width={56.57}
            height={56.57}
            transform="translate(-34.27 173.25) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <rect
            x={35.72}
            y={99.72}
            width={56.57}
            height={56.57}
            transform="translate(-71.76 82.75) rotate(-45)"
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
