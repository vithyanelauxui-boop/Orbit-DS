import * as React from "react";

import type { IconProps } from "./types";

export function MagnetIcon({
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
            d="M26.34,128.88,55,157.54a8,8,0,0,0,11.37-.06L127.29,95a24,24,0,0,1,33.61-.33c9.69,9.34,9.46,25.14-.05,34.65L98.54,189.6a8,8,0,0,0-.08,11.4l28.66,28.66a8,8,0,0,0,11.26.05l61.74-60.43c31.19-31.19,32.1-82,1.14-113.42a80,80,0,0,0-113.57-.43L26.31,117.6A8,8,0,0,0,26.34,128.88Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={128.57}
            y1={160.57}
            x2={168.36}
            y2={200.36}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={55.77}
            y1={87.77}
            x2={95.56}
            y2={127.56}
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
          <path d="M207,50.25A87.46,87.46,0,0,0,144.6,24h-.33A87.48,87.48,0,0,0,82,49.81L20.61,112a16,16,0,0,0,.06,22.56l28.66,28.66a15.92,15.92,0,0,0,11.32,4.69h.09a16,16,0,0,0,11.36-4.82L133,100.69a16.08,16.08,0,0,1,22.41-.21,15.6,15.6,0,0,1,4.73,11.19,16.89,16.89,0,0,1-4.85,12L93,183.88a16,16,0,0,0-.17,22.79l28.66,28.66a16.06,16.06,0,0,0,22.52.12L205.81,175C240.26,140.5,240.79,84.56,207,50.25ZM60.65,151.89,32,123.24,61.42,93.43,89.9,121.91ZM132.79,224l-28.68-28.65,30.13-29.13,28.49,28.48Z" />
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
            d="M26.34,128.88,55,157.54a8,8,0,0,0,11.37-.06L127.29,95a24,24,0,0,1,33.61-.33c9.69,9.34,9.46,25.14-.05,34.65L98.54,189.6a8,8,0,0,0-.08,11.4l28.66,28.66a8,8,0,0,0,11.26.05l61.74-60.43c31.19-31.19,32.1-82,1.14-113.42a80,80,0,0,0-113.57-.43L26.31,117.6A8,8,0,0,0,26.34,128.88Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={128.57}
            y1={160.57}
            x2={168.36}
            y2={200.36}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={55.77}
            y1={87.77}
            x2={95.56}
            y2={127.56}
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
            d="M128.57,160.57l-30,29a8,8,0,0,0-.08,11.4l28.66,28.66a8,8,0,0,0,11.26.05l30-29.35Z"
            opacity={0.2}
          />
          <path
            d="M55.77,87.77,26.31,117.6a8,8,0,0,0,0,11.28L55,157.54a8,8,0,0,0,11.38-.06l29.18-29.92Z"
            opacity={0.2}
          />
          <path
            d="M26.34,128.88,55,157.54a8,8,0,0,0,11.37-.06L127.29,95a24,24,0,0,1,33.61-.33c9.69,9.34,9.46,25.14-.05,34.65L98.54,189.6a8,8,0,0,0-.08,11.4l28.66,28.66a8,8,0,0,0,11.26.05l61.74-60.43c31.19-31.19,32.1-82,1.14-113.42a80,80,0,0,0-113.57-.43L26.31,117.6A8,8,0,0,0,26.34,128.88Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={128.57}
            y1={160.57}
            x2={168.36}
            y2={200.36}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={55.77}
            y1={87.77}
            x2={95.56}
            y2={127.56}
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
