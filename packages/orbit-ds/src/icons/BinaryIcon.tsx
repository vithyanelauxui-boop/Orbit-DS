import * as React from "react";

import type { IconProps } from "./types";

export function BinaryIcon({
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
          <ellipse
            cx={94}
            cy={72}
            rx={30}
            ry={40}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <ellipse
            cx={166}
            cy={184}
            rx={30}
            ry={40}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="176 112 176 32 152 45.33"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="96 224 96 144 72 157.33"
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
          <path d="M168,168c0,4.75-1.11,9.16-3.05,12.11A7.77,7.77,0,0,1,158,184c-9.72,0-10-14.36-10-16,0-4.74,1.11-9.16,3.05-12.11A7.77,7.77,0,0,1,158,152C167.72,152,168,166.36,168,168ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM140.84,75.58a8,8,0,0,0,10.74,3.58L156,76.94V112a8,8,0,0,0,16,0V64a8,8,0,0,0-11.58-7.16l-16,8A8,8,0,0,0,140.84,75.58ZM112,144a8,8,0,0,0-11.58-7.16l-16,8a8,8,0,0,0,7.16,14.32L96,156.94V192a8,8,0,0,0,16,0Zm16-56c0-18.84-10.69-32-26-32S76,69.16,76,88s10.69,32,26,32S128,106.84,128,88Zm56,80c0-18.84-10.69-32-26-32s-26,13.16-26,32,10.69,32,26,32S184,186.84,184,168ZM102,72a7.77,7.77,0,0,0-7,3.89c-1.94,3-3,7.37-3,12.11,0,1.64.28,16,10,16a7.77,7.77,0,0,0,7-3.89c1.94-3,3-7.36,3-12.11C112,86.36,111.72,72,102,72Z" />
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
          <ellipse
            cx={92}
            cy={72}
            rx={28}
            ry={36}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polyline
            points="180 108 180 36 156 48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <ellipse
            cx={164}
            cy={184}
            rx={28}
            ry={36}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polyline
            points="92 220 92 148 68 160"
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
          <rect x={32} y={32} width={192} height={192} rx={16} opacity={0.2} />
          <ellipse
            cx={94}
            cy={72}
            rx={30}
            ry={40}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <ellipse
            cx={166}
            cy={184}
            rx={30}
            ry={40}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="176 112 176 32 152 45.33"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="96 224 96 144 72 157.33"
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
