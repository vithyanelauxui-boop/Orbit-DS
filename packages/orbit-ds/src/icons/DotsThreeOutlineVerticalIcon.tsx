import * as React from "react";

import type { IconProps } from "./types";

export function DotsThreeOutlineVerticalIcon({
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
            r={24}
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={16}
          />
          <circle
            cx={128}
            cy={48}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={16}
          />
          <circle
            cx={128}
            cy={208}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
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
          <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128ZM128,76a28,28,0,1,0-28-28A28,28,0,0,0,128,76Zm0,104a28,28,0,1,0,28,28A28,28,0,0,0,128,180Z" />
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
            r={20}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <circle
            cx={128}
            cy={48}
            r={20}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <circle
            cx={128}
            cy={208}
            r={20}
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
          <circle cx={128} cy={128} r={24} opacity={0.2} />
          <circle cx={128} cy={48} r={24} opacity={0.2} />
          <circle cx={128} cy={208} r={24} opacity={0.2} />
          <circle
            cx={128}
            cy={128}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={16}
          />
          <circle
            cx={128}
            cy={48}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={16}
          />
          <circle
            cx={128}
            cy={208}
            r={24}
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={16}
          />
        </svg>
      );

    default:
      return null;
  }
}
