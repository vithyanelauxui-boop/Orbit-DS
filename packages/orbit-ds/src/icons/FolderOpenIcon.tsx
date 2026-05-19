import * as React from "react";

import type { IconProps } from "./types";

export function FolderOpenIcon({
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
            d="M32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h72a8,8,0,0,1,8,8v24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M32,208l30.18-90.53A8,8,0,0,1,69.77,112H232a8,8,0,0,1,7.59,10.53L211.09,208Z"
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
          <path d="M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Z" />
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
            d="M32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h72a8,8,0,0,1,8,8v28"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M32,208l30.18-86.53A8,8,0,0,1,69.77,116H232a8,8,0,0,1,7.59,10.53L211.09,208Z"
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
            d="M69.77,112H208V88a8,8,0,0,0-8-8H128L98.13,57.6a8,8,0,0,0-4.8-1.6H40a8,8,0,0,0-8,8V208l30.18-90.53A8,8,0,0,1,69.77,112Z"
            opacity={0.2}
          />
          <path
            d="M32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h72a8,8,0,0,1,8,8v24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M32,208l30.18-90.53A8,8,0,0,1,69.77,112H232a8,8,0,0,1,7.59,10.53L211.09,208Z"
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
