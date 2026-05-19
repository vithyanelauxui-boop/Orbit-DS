import * as React from "react";

import type { IconProps } from "./types";

export function WheelchairIcon({
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
          <polyline
            points="104 72 104 136 192 136 224 200 248 192"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle
            cx={104}
            cy={48}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M168,96H112a64,64,0,0,0,0,128c29.82,0,56.9-20.4,64-48"
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
          <path d="M250.53,199.59l-24,8a8,8,0,0,1-9.69-4L187.05,144H104a8,8,0,0,1-8-8V106.34A56,56,0,0,0,112,216c25.91,0,50.09-18.05,56.25-42a8,8,0,1,1,15.5,4c-8.06,31.3-38.23,54-71.75,54A72,72,0,0,1,96,89.81v-19a28,28,0,1,1,16,0V88h56a8,8,0,0,1,0,16H112v24h80a8,8,0,0,1,7.15,4.42l28.9,57.8,17.42-5.81a8,8,0,0,1,5.06,15.18Z" />
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
          <polyline
            points="104 68 104 136 192 136 224 200 244 192"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <circle
            cx={104}
            cy={46}
            r={22}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M168,96H112a64,64,0,1,0,57.57,92"
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
          <circle cx={104} cy={48} r={24} opacity={0.2} />
          <polyline
            points="104 72 104 136 192 136 224 200 248 192"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle
            cx={104}
            cy={48}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M168,96H112a64,64,0,0,0,0,128c29.82,0,56.9-20.4,64-48"
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
