import * as React from "react";

import type { IconProps } from "./types";

export function ArrowFatLeftIcon({
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
            d="M120,32,24,128l96,96V176h88a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H120Z"
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
          <path d="M224,88v80a16,16,0,0,1-16,16H128v40a8,8,0,0,1-13.66,5.66l-96-96a8,8,0,0,1,0-11.32l96-96A8,8,0,0,1,128,32V72h80A16,16,0,0,1,224,88Z" />
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
            d="M120,32,24,128l96,96V176h88a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H120Z"
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
            d="M120,32,24,128l96,96V176h88a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H120Z"
            opacity={0.2}
          />
          <path
            d="M120,32,24,128l96,96V176h88a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H120Z"
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
