import * as React from "react";

import type { IconProps } from "./types";

export function TrainRegionalIcon({
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
            d="M70.11,32H185.89a8,8,0,0,1,7.72,5.9L216,120l-22.39,82.1a8,8,0,0,1-7.72,5.9H70.11a8,8,0,0,1-7.72-5.9L40,120,62.39,37.9A8,8,0,0,1,70.11,32Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={128}
            y1={208}
            x2={128}
            y2={136}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="40 120 128 136 216 120"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={96}
            y1={88}
            x2={160}
            y2={88}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={96}
            y1={208}
            x2={72}
            y2={240}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={160}
            y1={208}
            x2={184}
            y2={240}
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
          <path d="M168,88a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,88Zm55.72,34.1-22.39,82.11A16,16,0,0,1,185.89,216H176l14.4,19.2a8,8,0,1,1-12.8,9.6L156,216H100L78.4,244.8a8,8,0,1,1-12.8-9.6L80,216H70.11a16,16,0,0,1-15.44-11.79L32.28,122.1a8.08,8.08,0,0,1,0-4.2L54.67,35.79A16,16,0,0,1,70.11,24H185.89a16,16,0,0,1,15.44,11.79l22.39,82.11A8.08,8.08,0,0,1,223.72,122.1ZM136,152a8,8,0,0,0-16,0v40a8,8,0,0,0,16,0Zm70-38.31L185.89,40H70.11L50,113.69l78,14.18Z" />
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
            d="M70.11,32H185.89a8,8,0,0,1,7.72,5.9L216,120l-22.39,82.1a8,8,0,0,1-7.72,5.9H70.11a8,8,0,0,1-7.72-5.9L40,120,62.39,37.9A8,8,0,0,1,70.11,32Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={128}
            y1={208}
            x2={128}
            y2={136}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polyline
            points="40 120 128 136 216 120"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={96}
            y1={88}
            x2={160}
            y2={88}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={96}
            y1={208}
            x2={72}
            y2={240}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={160}
            y1={208}
            x2={184}
            y2={240}
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
            d="M40,120l88,16,88-16-22.39,82.1a8,8,0,0,1-7.72,5.9H70.11a8,8,0,0,1-7.72-5.9Z"
            opacity={0.2}
          />
          <path
            d="M70.11,32H185.89a8,8,0,0,1,7.72,5.9L216,120l-22.39,82.1a8,8,0,0,1-7.72,5.9H70.11a8,8,0,0,1-7.72-5.9L40,120,62.39,37.9A8,8,0,0,1,70.11,32Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={128}
            y1={208}
            x2={128}
            y2={136}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="40 120 128 136 216 120"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={96}
            y1={88}
            x2={160}
            y2={88}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={96}
            y1={208}
            x2={72}
            y2={240}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={160}
            y1={208}
            x2={184}
            y2={240}
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
