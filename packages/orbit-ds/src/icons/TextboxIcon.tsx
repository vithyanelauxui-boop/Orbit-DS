import * as React from "react";

import type { IconProps } from "./types";

export function TextboxIcon({
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
            x1={112}
            y1={48}
            x2={112}
            y2={208}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M144,72h88a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H144"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M112,184H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h88"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={48}
            y1={112}
            x2={80}
            y2={112}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={64}
            y1={112}
            x2={64}
            y2={144}
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
          <path d="M248,80v96a16,16,0,0,1-16,16H140a4,4,0,0,1-4-4V68a4,4,0,0,1,4-4h92A16,16,0,0,1,248,80ZM120,48V208a8,8,0,0,1-16,0V192H24A16,16,0,0,1,8,176V80A16,16,0,0,1,24,64h80V48a8,8,0,0,1,16,0ZM88,112a8,8,0,0,0-8-8H48a8,8,0,0,0,0,16h8v24a8,8,0,0,0,16,0V120h8A8,8,0,0,0,88,112Z" />
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
            x1={112}
            y1={48}
            x2={112}
            y2={208}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M152,72h80a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H152"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M112,184H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h88"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={52}
            y1={112}
            x2={76}
            y2={112}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={64}
            y1={112}
            x2={64}
            y2={144}
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
          <rect x={16} y={72} width={224} height={112} rx={8} opacity={0.2} />
          <line
            x1={112}
            y1={48}
            x2={112}
            y2={208}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M144,72h88a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H144"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M112,184H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h88"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={48}
            y1={112}
            x2={80}
            y2={112}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={64}
            y1={112}
            x2={64}
            y2={144}
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
