import * as React from "react";

import type { IconProps } from "./types";

export function BarnIcon({
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
            d="M240,128,200,72,132.44,25.34a8,8,0,0,0-8.88,0L56,72,16,128"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={16}
            y1={200}
            x2={240}
            y2={200}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="72 200 72 120 184 120 184 200"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={184}
            y1={120}
            x2={72}
            y2={200}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={72}
            y1={120}
            x2={184}
            y2={200}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={112}
            y1={88}
            x2={144}
            y2={88}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={32}
            y1={105.6}
            x2={32}
            y2={200}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={224}
            y1={105.6}
            x2={224}
            y2={200}
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
          <path d="M240,192h-8V130.57l1.49,2.08a8,8,0,1,0,13-9.3l-40-56a8,8,0,0,0-2-1.94L137,18.77l-.1-.07a16,16,0,0,0-17.76,0l-.1.07L51.45,65.42a8,8,0,0,0-2,1.94l-40,56a8,8,0,1,0,13,9.3L24,130.57V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM112,80h32a8,8,0,1,1,0,16H112a8,8,0,1,1,0-16Zm52.64,40L128,146.17,91.36,120ZM72,125.83,114.24,156,72,186.17ZM91.36,192,128,165.83,164.64,192ZM184,186.17,141.76,156,184,125.83Z" />
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
            y1={84}
            x2={144}
            y2={84}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M240,128,200,72,132.44,25.34a8,8,0,0,0-8.88,0L56,72,16,128"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={16}
            y1={200}
            x2={240}
            y2={200}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polyline
            points="76 200 76 124 180 124 180 200"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={76}
            y1={124}
            x2={184}
            y2={200}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={32}
            y1={105.6}
            x2={32}
            y2={200}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={224}
            y1={105.6}
            x2={224}
            y2={200}
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
          <rect x={72} y={120} width={112} height={80} opacity={0.2} />
          <path
            d="M240,128,200,72,132.44,25.34a8,8,0,0,0-8.88,0L56,72,16,128"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={16}
            y1={200}
            x2={240}
            y2={200}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="72 200 72 120 184 120 184 200"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={184}
            y1={120}
            x2={72}
            y2={200}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={72}
            y1={120}
            x2={184}
            y2={200}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={112}
            y1={88}
            x2={144}
            y2={88}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={32}
            y1={105.6}
            x2={32}
            y2={200}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={224}
            y1={105.6}
            x2={224}
            y2={200}
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
