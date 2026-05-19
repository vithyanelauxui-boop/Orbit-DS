import * as React from "react";

import type { IconProps } from "./types";

export function ShovelIcon({
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
            x1={192}
            y1={16}
            x2={240}
            y2={64}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={216}
            y1={40}
            x2={88}
            y2={168}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M32,232a8,8,0,0,1-8-8V144a8,8,0,0,1,2.34-5.66l56-56a8,8,0,0,1,11.32,0l80,80a8,8,0,0,1,0,11.32l-56,56A8,8,0,0,1,112,232Z"
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
          <path d="M245.66,69.66a8,8,0,0,1-11.32,0L216,51.31l-71,71L133.66,111l71-71L186.34,21.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,245.66,69.66ZM88,176a8,8,0,0,1-5.66-13.66L133.66,111,99.31,76.68a16,16,0,0,0-22.62,0l-56,56A15.89,15.89,0,0,0,16,144v80a16,16,0,0,0,16,16h80a15.86,15.86,0,0,0,11.31-4.69l56-56a16,16,0,0,0,0-22.62L145,122.34,93.66,173.66A8,8,0,0,1,88,176Z" />
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
            x1={192}
            y1={16}
            x2={240}
            y2={64}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={216}
            y1={40}
            x2={88}
            y2={168}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M32,232a8,8,0,0,1-8-8V144a8,8,0,0,1,2.34-5.66l56-56a8,8,0,0,1,11.32,0l80,80a8,8,0,0,1,0,11.32l-56,56A8,8,0,0,1,112,232Z"
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
            d="M32,232a8,8,0,0,1-8-8V144a8,8,0,0,1,2.34-5.66l56-56a8,8,0,0,1,11.32,0l80,80a8,8,0,0,1,0,11.32l-56,56A8,8,0,0,1,112,232Z"
            opacity={0.2}
          />
          <line
            x1={192}
            y1={16}
            x2={240}
            y2={64}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={216}
            y1={40}
            x2={88}
            y2={168}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M32,232a8,8,0,0,1-8-8V144a8,8,0,0,1,2.34-5.66l56-56a8,8,0,0,1,11.32,0l80,80a8,8,0,0,1,0,11.32l-56,56A8,8,0,0,1,112,232Z"
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
