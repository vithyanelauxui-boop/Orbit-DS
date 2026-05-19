import * as React from "react";

import type { IconProps } from "./types";

export function FlipHorizontalIcon({
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
            d="M96.63,36.89C100,28.86,112,31.29,112,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M159.37,36.89C156,28.86,144,31.29,144,40V200a8,8,0,0,0,8,8h64a8,8,0,0,0,7.37-11.12Z"
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
          <path d="M120,40V200a16,16,0,0,1-16,16H40a16,16,0,0,1-14.78-22.15l64-159.93.06-.14A16,16,0,0,1,120,40ZM229.33,208.84A16,16,0,0,1,216,216H152a16,16,0,0,1-16-16V40a16,16,0,0,1,30.74-6.23l.06.14,64,159.93A16,16,0,0,1,229.33,208.84ZM216,200l-.06-.15L152,40V200Z" />
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
            d="M92.63,36.89C96,28.86,108,31.29,108,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M163.37,36.89C160,28.86,148,31.29,148,40V200a8,8,0,0,0,8,8h60a8,8,0,0,0,7.37-11.12Z"
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
            d="M96.63,36.89C100,28.86,112,31.29,112,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z"
            opacity={0.2}
          />
          <path
            d="M96.63,36.89C100,28.86,112,31.29,112,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M159.37,36.89C156,28.86,144,31.29,144,40V200a8,8,0,0,0,8,8h64a8,8,0,0,0,7.37-11.12Z"
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
