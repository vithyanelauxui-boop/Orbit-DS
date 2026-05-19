import * as React from "react";

import type { IconProps } from "./types";

export function MarkdownLogoIcon({
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
          <rect
            x={16}
            y={56}
            width={224}
            height={144}
            rx={8}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="56 152 56 104 88 136 120 104 120 152"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={176}
            y1={104}
            x2={176}
            y2={152}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="200 128 176 152 152 128"
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
          <path d="M232,48H24A16,16,0,0,0,8,64V192a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48ZM128,152a8,8,0,0,1-16,0V123.31L93.66,141.66a8,8,0,0,1-11.32,0L64,123.31V152a8,8,0,0,1-16,0V104a8,8,0,0,1,13.66-5.66L88,124.69l26.34-26.35A8,8,0,0,1,128,104Zm77.66-18.34-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L168,132.69V104a8,8,0,0,1,16,0v28.69l10.34-10.35a8,8,0,0,1,11.32,11.32Z" />
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
          <rect
            x={16}
            y={56}
            width={224}
            height={144}
            rx={8}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polyline
            points="60 148 60 108 88 136 116 108 116 148"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={176}
            y1={108}
            x2={176}
            y2={148}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polyline
            points="196 132 176 148 156 132"
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
          <rect x={16} y={56} width={224} height={144} rx={8} opacity={0.2} />
          <rect
            x={16}
            y={56}
            width={224}
            height={144}
            rx={8}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="56 152 56 104 88 136 120 104 120 152"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={176}
            y1={104}
            x2={176}
            y2={152}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="200 128 176 152 152 128"
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
