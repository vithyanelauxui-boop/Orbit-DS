import * as React from "react";

import type { IconProps } from "./types";

export function DropboxLogoIcon({
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
            points="76 48 24 84 76 120 128 84 76 48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polygon
            points="180 48 128 84 180 120 232 84 180 48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polygon
            points="76 120 24 156 76 192 128 156 76 120"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polygon
            points="180 120 128 156 180 192 232 156 180 120"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="104.11 211.46 128 228 151.89 211.46"
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
          <path d="M188,120,128,80l55.56-37a8,8,0,0,1,8.88,0L238,73.34a8,8,0,0,1,0,13.32ZM72.44,43a8,8,0,0,0-8.88,0L18,73.34a8,8,0,0,0,0,13.32L68,120l60-40ZM238,153.34,188,120l-60,40,55.56,37a8,8,0,0,0,8.88,0L238,166.66A8,8,0,0,0,238,153.34Zm-220,0a8,8,0,0,0,0,13.32L63.56,197a8,8,0,0,0,8.88,0L128,160,68,120Zm150.61,52.95-38.37-25.58a4,4,0,0,0-4.44,0L87.41,206.29a4,4,0,0,0,0,6.65L123.56,237a8,8,0,0,0,8.88,0l36.15-24.1A4,4,0,0,0,168.59,206.29Z" />
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
            points="76 48 24 84 76 120 128 84 76 48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polygon
            points="180 48 128 84 180 120 232 84 180 48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polygon
            points="76 120 24 156 76 192 128 156 76 120"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polygon
            points="180 120 128 156 180 192 232 156 180 120"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polyline
            points="111.14 216.32 128 228 144.86 216.32"
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
          <polygon points="76 48 24 84 76 120 128 84 76 48" opacity={0.2} />
          <polygon points="180 48 128 84 180 120 232 84 180 48" opacity={0.2} />
          <polygon points="76 120 24 156 76 192 128 156 76 120" opacity={0.2} />
          <polygon
            points="180 120 128 156 180 192 232 156 180 120"
            opacity={0.2}
          />
          <polygon
            points="76 48 24 84 76 120 128 84 76 48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polygon
            points="180 48 128 84 180 120 232 84 180 48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polygon
            points="76 120 24 156 76 192 128 156 76 120"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polygon
            points="180 120 128 156 180 192 232 156 180 120"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="104.11 211.46 128 228 151.89 211.46"
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
