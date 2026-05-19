import * as React from "react";

import type { IconProps } from "./types";

export function GitPullRequestIcon({
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
            cx={72}
            cy={192}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle
            cx={72}
            cy={64}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={72}
            y1={88}
            x2={72}
            y2={168}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle
            cx={200}
            cy={192}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M200,168V110.63a16,16,0,0,0-4.69-11.32L144,48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="144 96 144 48 192 48"
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
          <path d="M104,64A32,32,0,1,0,64,95v66a32,32,0,1,0,16,0V95A32.06,32.06,0,0,0,104,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192Zm144,0a32,32,0,1,1-40-31V110.63a8,8,0,0,0-2.34-5.66L152,67.31V96a8,8,0,0,1-16,0V48a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H163.31L201,93.66a23.85,23.85,0,0,1,7,17V161A32.06,32.06,0,0,1,232,192Z" />
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
            cx={72}
            cy={192}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <circle
            cx={72}
            cy={64}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={72}
            y1={88}
            x2={72}
            y2={168}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <circle
            cx={200}
            cy={192}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M200,168V110.63a16,16,0,0,0-4.69-11.32L144,48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polyline
            points="144 96 144 48 192 48"
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
          <circle cx={72} cy={64} r={24} opacity={0.2} />
          <circle cx={200} cy={192} r={24} opacity={0.2} />
          <circle
            cx={72}
            cy={192}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle
            cx={72}
            cy={64}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={72}
            y1={88}
            x2={72}
            y2={168}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle
            cx={200}
            cy={192}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M200,168V110.63a16,16,0,0,0-4.69-11.32L144,48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="144 96 144 48 192 48"
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
