import * as React from "react";

import type { IconProps } from "./types";

export function FlowerTulipIcon({
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
            x1={128}
            y1={232}
            x2={128}
            y2={176}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M48,56h0a80,80,0,0,1,80,80v40a0,0,0,0,1,0,0h0A80,80,0,0,1,48,96V56A0,0,0,0,1,48,56Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M208,56h0a0,0,0,0,1,0,0V96a80,80,0,0,1-80,80h0a0,0,0,0,1,0,0V136a80,80,0,0,1,80-80Z"
            transform="translate(336 232) rotate(180)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="80 208 128 232 176 208"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M86.77,66C100,38,128,24,128,24s28,14,41.23,42"
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
          <path d="M208,48a87.48,87.48,0,0,0-35.36,7.43c-15.1-25.37-39.92-38-41.06-38.59a8,8,0,0,0-7.16,0c-1.14.58-26,13.22-41.06,38.59A87.48,87.48,0,0,0,48,48a8,8,0,0,0-8,8V96a88.11,88.11,0,0,0,80,87.63v35.43L83.58,200.84a8,8,0,1,0-7.16,14.32l48,24a8,8,0,0,0,7.16,0l48-24a8,8,0,0,0-7.16-14.32L136,219.06V183.63A88.11,88.11,0,0,0,216,96V56A8,8,0,0,0,208,48ZM56,96V64.44A72.1,72.1,0,0,1,120,136v31.56A72.1,72.1,0,0,1,56,96Zm144,0a72.1,72.1,0,0,1-64,71.56V136a72.1,72.1,0,0,1,64-71.56Z" />
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
            x1={128}
            y1={232}
            x2={128}
            y2={176}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M48,56h0a80,80,0,0,1,80,80v40a0,0,0,0,1,0,0h0A80,80,0,0,1,48,96V56A0,0,0,0,1,48,56Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M208,56h0a0,0,0,0,1,0,0V96a80,80,0,0,1-80,80h0a0,0,0,0,1,0,0V136a80,80,0,0,1,80-80Z"
            transform="translate(336 232) rotate(180)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polyline
            points="80 208 128 232 176 208"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M86.77,66C100,38,128,24,128,24s28,14,41.23,42"
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
            d="M128,136a80,80,0,0,1,41.23-70v0C156,38,128,24,128,24S100,38,86.77,66v0A80,80,0,0,1,128,136Z"
            opacity={0.2}
          />
          <path
            d="M48,56h0a80,80,0,0,1,80,80v40a0,0,0,0,1,0,0h0A80,80,0,0,1,48,96V56A0,0,0,0,1,48,56Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M208,56h0a0,0,0,0,1,0,0V96a80,80,0,0,1-80,80h0a0,0,0,0,1,0,0V136A80,80,0,0,1,208,56Z"
            transform="translate(336 232) rotate(180)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="80 208 128 232 176 208"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M86.77,66C100,38,128,24,128,24s28,14,41.23,42"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={128}
            y1={232}
            x2={128}
            y2={176}
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
