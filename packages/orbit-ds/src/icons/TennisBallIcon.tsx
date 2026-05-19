import * as React from "react";

import type { IconProps } from "./types";

export function TennisBallIcon({
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
          <circle
            cx={128}
            cy={128}
            r={96}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M127.83,32A96,96,0,0,1,32,127.83"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M224,128.17A96,96,0,0,0,128.17,224"
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
          <path d="M24.81,115.41a103.9,103.9,0,0,1,90.6-90.65,4,4,0,0,1,4.47,3.79,87.82,87.82,0,0,1-91.27,91.33A4,4,0,0,1,24.81,115.41Zm202.54,20.7c-1.12,0-2.23-.07-3.35-.07a87.84,87.84,0,0,0-87.88,91.41,4,4,0,0,0,4.47,3.79,103.9,103.9,0,0,0,90.6-90.66A4,4,0,0,0,227.35,136.11Zm-76.89,14.35A103.33,103.33,0,0,1,224,120c1,0,2.06,0,3.09,0a4,4,0,0,0,4.12-4.43,103.91,103.91,0,0,0-90.88-90.89,4,4,0,0,0-4.43,4.12,103.72,103.72,0,0,1-30.36,76.7A103.33,103.33,0,0,1,32,136c-1,0-2.06,0-3.09,0a4,4,0,0,0-4.12,4.43,103.91,103.91,0,0,0,90.88,90.89,4,4,0,0,0,4.43-4.12A103.72,103.72,0,0,1,150.46,150.46Z" />
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
          <circle
            cx={128}
            cy={128}
            r={96}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M127.83,32A96,96,0,0,1,32,127.83"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M224,128.17A96,96,0,0,0,128.17,224"
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
            d="M32,128a96,96,0,0,1,95.83-96h0A96,96,0,0,1,32,127.83Z"
            opacity={0.2}
          />
          <path
            d="M128.17,224.17a96,96,0,0,1,95.83-96h0A96,96,0,0,1,128.17,224Z"
            opacity={0.2}
          />
          <circle
            cx={128}
            cy={128}
            r={96}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M127.83,32A96,96,0,0,1,32,127.83"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M224,128.17A96,96,0,0,0,128.17,224"
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
