import * as React from "react";

import type { IconProps } from "./types";

export function GifIcon({
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
            x1={136}
            y1={72}
            x2={136}
            y2={184}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="232 72 176 72 176 184"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={224}
            y1={128}
            x2={176}
            y2={128}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M72,128H96v24a32,32,0,0,1-64,0V104A32,32,0,0,1,64,72c14.91,0,28.45,10.2,32,24"
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
          <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM112,144a32,32,0,0,1-64,0V112a32,32,0,0,1,55.85-21.33,8,8,0,1,1-11.92,10.66A16,16,0,0,0,64,112v32a16,16,0,0,0,32,0v-8H88a8,8,0,0,1,0-16h16a8,8,0,0,1,8,8Zm32,24a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm60-72H176v24h20a8,8,0,0,1,0,16H176v32a8,8,0,0,1-16,0V88a8,8,0,0,1,8-8h36a8,8,0,0,1,0,16Z" />
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
            x1={136}
            y1={72}
            x2={136}
            y2={184}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polyline
            points="232 72 176 72 176 184"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={224}
            y1={128}
            x2={176}
            y2={128}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M72,128H96v24a32,32,0,0,1-64,0V104A32,32,0,0,1,64,72c14.91,0,28.45,10.2,32,24"
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
          <line
            x1={136}
            y1={72}
            x2={136}
            y2={184}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="232 72 176 72 176 184"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={224}
            y1={128}
            x2={176}
            y2={128}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M72,128H96v24a32,32,0,0,1-64,0V104A32,32,0,0,1,64,72c14.91,0,28.45,10.2,32,24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M208,40H48A16,16,0,0,0,32,56V200a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Z"
            opacity={0.2}
          />
        </svg>
      );

    default:
      return null;
  }
}
