import * as React from "react";

import type { IconProps } from "./types";

export function HandGrabbingIcon({
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
            d="M128,92a20,20,0,0,0-40,0v28"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M168,108V92a20,20,0,0,0-40,0v28"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M88,152V120H68a20,20,0,0,0-20,20v12a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v12"
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
          <path d="M216,104v48a88,88,0,0,1-176,0V136a16,16,0,0,1,32,0v8a8,8,0,0,0,16,0V88a16,16,0,0,1,32,0v16a8,8,0,0,0,16,0V88a16,16,0,0,1,32,0v16a8,8,0,0,0,16,0,16,16,0,0,1,32,0Z" />
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
          <path
            d="M128,92a20,20,0,0,0-40,0v28"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M168,108V92a20,20,0,0,0-40,0v28"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M88,152V120H68a20,20,0,0,0-20,20v12a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v12"
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
            d="M88,120H68a20,20,0,0,0-20,20v12a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0V92a20,20,0,0,0-40,0,20,20,0,0,0-40,0Z"
            opacity={0.2}
          />
          <path
            d="M128,92a20,20,0,0,0-40,0v28"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M168,108V92a20,20,0,0,0-40,0v28"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M88,152V120H68a20,20,0,0,0-20,20v12a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v12"
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
