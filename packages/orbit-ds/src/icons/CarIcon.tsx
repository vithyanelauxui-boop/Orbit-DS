import * as React from "react";

import type { IconProps } from "./types";

export function CarIcon({
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
            x1={16}
            y1={112}
            x2={240}
            y2={112}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M224,176v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V176"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M72,176v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V176"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={64}
            y1={144}
            x2={80}
            y2={144}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={176}
            y1={144}
            x2={192}
            y2={144}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M224,112,194.11,44.75A8,8,0,0,0,186.8,40H69.2a8,8,0,0,0-7.31,4.75L32,112v64H224Z"
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
          <path d="M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16v-8h96v8a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM80,152H56a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm120,0H176a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM44.31,104,69.2,48H186.8l24.89,56Z" />
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
            x1={16}
            y1={112}
            x2={240}
            y2={112}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M224,168v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V168"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M76,168v32a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V168"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M224,112,194.11,44.75A8,8,0,0,0,186.8,40H69.2a8,8,0,0,0-7.31,4.75L32,112v56H224Z"
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
            d="M224,176v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V176Z"
            opacity={0.2}
          />
          <path
            d="M72,176v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V176Z"
            opacity={0.2}
          />
          <path
            d="M224,112,194.11,44.75A8,8,0,0,0,186.8,40H69.2a8,8,0,0,0-7.31,4.75L32,112Z"
            opacity={0.2}
          />
          <line
            x1={16}
            y1={112}
            x2={240}
            y2={112}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M224,176v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V176"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M72,176v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V176"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={64}
            y1={144}
            x2={80}
            y2={144}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={176}
            y1={144}
            x2={192}
            y2={144}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M224,112,194.11,44.75A8,8,0,0,0,186.8,40H69.2a8,8,0,0,0-7.31,4.75L32,112v64H224Z"
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
