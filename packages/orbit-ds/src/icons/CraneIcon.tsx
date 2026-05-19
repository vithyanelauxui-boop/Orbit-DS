import * as React from "react";

import type { IconProps } from "./types";

export function CraneIcon({
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
            x1={24}
            y1={168}
            x2={128}
            y2={168}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M24,200V96a8,8,0,0,1,8-8h72l24,80v32a8,8,0,0,1-8,8H32A8,8,0,0,1,24,200Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={56}
            y1={88}
            x2={56}
            y2={168}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M104,88,224,24V160a8,8,0,0,1-8,8H200a8,8,0,0,1-8-8v-8"
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
          <path d="M228.12,17.14a8,8,0,0,0-7.88-.2L102,80H32A16,16,0,0,0,16,96V200a16,16,0,0,0,16,16h88a16,16,0,0,0,16-16V168a7.31,7.31,0,0,0-.08-1.05l0-.24a9.6,9.6,0,0,0-.22-1,.09.09,0,0,0,0-.05v0a.64.64,0,0,1,0-.07L113.54,92,216,37.33V160H200v-8a8,8,0,0,0-16,0v8a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V24A8,8,0,0,0,228.12,17.14ZM48,96v64H32V96ZM32,200h0V176h88v24Z" />
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
            x1={24}
            y1={168}
            x2={128}
            y2={168}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M24,200V96a8,8,0,0,1,8-8h72l24,80v32a8,8,0,0,1-8,8H32A8,8,0,0,1,24,200Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={64}
            y1={88}
            x2={64}
            y2={168}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M104,88,224,24V160a8,8,0,0,1-8,8H196a8,8,0,0,1-8-8v-8"
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
          <polygon points="56 168 56 88 104 88 128 168 56 168" opacity={0.2} />
          <line
            x1={24}
            y1={168}
            x2={128}
            y2={168}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M24,200V96a8,8,0,0,1,8-8h72l24,80v32a8,8,0,0,1-8,8H32A8,8,0,0,1,24,200Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={56}
            y1={88}
            x2={56}
            y2={168}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M104,88,224,24V160a8,8,0,0,1-8,8H200a8,8,0,0,1-8-8v-8"
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
