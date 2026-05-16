import * as React from "react";

import type { IconProps } from "./types";

export function FileVueIcon({
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
          <line
            x1={200}
            y1={180}
            x2={176}
            y2={180}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="40 152 60 208 80 152"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="152 32 152 88 208 88"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="208 208 176 208 176 152 208 152"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M108,152v38a18,18,0,0,0,36,0V152"
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
          <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24h-96a16,16,0,0,0-16,16v76a4,4,0,0,0,4,4H212a4,4,0,0,0,4-4V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44ZM87.36,155,67.47,210.69a8,8,0,0,1-15.08,0L32.5,155A8.21,8.21,0,0,1,37,144.55a8,8,0,0,1,10.46,4.76l12.47,34.9,12.47-34.9a8,8,0,0,1,10.46-4.76A8.22,8.22,0,0,1,87.36,155ZM184,160v12h15.73a8.19,8.19,0,0,1,8.26,7.47,8,8,0,0,1-8,8.53H184v12h23.73a8.18,8.18,0,0,1,8.26,7.47,8,8,0,0,1-8,8.53H176a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h31.74a8.18,8.18,0,0,1,8.26,7.47,8,8,0,0,1-8,8.53Zm-32-8v37.45c0,14.14-11.07,26.12-25.22,26.54A26,26,0,0,1,100,190V152.27a8.18,8.18,0,0,1,7.47-8.25,8,8,0,0,1,8.54,8v37.65A10.23,10.23,0,0,0,125.27,200,10,10,0,0,0,136,190V152.27a8.18,8.18,0,0,1,7.47-8.25A8,8,0,0,1,152,152Z" />
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
          <polyline
            points="148 32 148 92 208 92"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M48,108V40a8,8,0,0,1,8-8h96l56,56v20"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={204}
            y1={180}
            x2={180}
            y2={180}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polyline
            points="36 152 56 208 76 152"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polyline
            points="212 208 180 208 180 152 212 152"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M108,152v38a18,18,0,0,0,36,0V152"
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
          <polygon points="152 32 152 88 208 88 152 32" opacity={0.2} />
          <path
            d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="152 32 152 88 208 88"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={200}
            y1={180}
            x2={176}
            y2={180}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="40 152 60 208 80 152"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="208 208 176 208 176 152 208 152"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M108,152v38a18,18,0,0,0,36,0V152"
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
