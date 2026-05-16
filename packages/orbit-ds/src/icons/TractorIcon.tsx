import * as React from "react";

import type { IconProps } from "./types";

export function TractorIcon({
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
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect width={256} height={256} fill="none" />
          <circle
            cx={212}
            cy={188}
            r={28}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle
            cx={68}
            cy={172}
            r={44}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle cx={68} cy={172} r={12} />
          <path
            d="M232,168V134a8,8,0,0,0-5.7-7.66L144,104V48H56V96"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={40}
            y1={48}
            x2={56}
            y2={48}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={144}
            y1={48}
            x2={160}
            y2={48}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M40,96H68a76,76,0,0,1,76,76v12h40.28"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={144}
            y1={104}
            x2={144}
            y2={184}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={184}
            y1={114.83}
            x2={184}
            y2={72}
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
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect width={256} height={256} fill="none" />
          <path d="M80,172a12,12,0,1,1-12-12A12,12,0,0,1,80,172Zm40,0a52,52,0,1,1-52-52A52.06,52.06,0,0,1,120,172Zm-24,0a28,28,0,1,0-28,28A28,28,0,0,0,96,172Zm152,16a36,36,0,0,1-71.77,4H144a8,8,0,0,1-8-8V172a68.07,68.07,0,0,0-68-68H40a8,8,0,0,1,0-16h8V56H40a8,8,0,0,1,0-16H160a8,8,0,0,1,0,16h-8V97.88l24,6.5V72a8,8,0,0,1,16,0v36.71l36.39,9.86.21.06A15.89,15.89,0,0,1,240,134v31.46A35.8,35.8,0,0,1,248,188Zm-20,0a16,16,0,1,0-16,16A16,16,0,0,0,228,188Z" />
        </svg>
      );

    case "bold":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect width={256} height={256} fill="none" />
          <circle
            cx={212}
            cy={188}
            r={28}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <circle
            cx={64}
            cy={176}
            r={40}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <circle cx={64} cy={176} r={16} />
          <path
            d="M232,168V134a8,8,0,0,0-5.7-7.66L144,104V48H56V96"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={40}
            y1={48}
            x2={56}
            y2={48}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={144}
            y1={48}
            x2={160}
            y2={48}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M40,96H68a76,76,0,0,1,76,76v12h40.28"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={144}
            y1={104}
            x2={144}
            y2={184}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={184}
            y1={114.83}
            x2={184}
            y2={76}
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
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect width={256} height={256} fill="none" />
          <circle cx={212} cy={188} r={28} opacity={0.2} />
          <circle cx={68} cy={172} r={44} opacity={0.2} />
          <circle
            cx={212}
            cy={188}
            r={28}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle
            cx={68}
            cy={172}
            r={44}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <circle cx={68} cy={172} r={12} />
          <path
            d="M232,168V134a8,8,0,0,0-5.7-7.66L144,104V48H56V96"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={40}
            y1={48}
            x2={56}
            y2={48}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={144}
            y1={48}
            x2={160}
            y2={48}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M40,96H68a76,76,0,0,1,76,76v12h40.28"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={144}
            y1={104}
            x2={144}
            y2={184}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={184}
            y1={114.83}
            x2={184}
            y2={72}
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
