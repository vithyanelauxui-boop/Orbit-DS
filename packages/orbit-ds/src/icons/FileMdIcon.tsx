import * as React from "react";

import type { IconProps } from "./types";

export function FileMdIcon({
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
            d="M208,224V88L152,32H56a8,8,0,0,0-8,8v72"
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
          <path
            d="M128,152v56h16a28,28,0,0,0,0-56Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="96 208 96 152 68 192 40 152 40 208"
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
          <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H196a4,4,0,0,1,4,4V224a8,8,0,0,0,9.19,7.91,8.15,8.15,0,0,0,6.81-8.16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Zm-8,56H128a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h15.32c19.66,0,36.21-15.48,36.67-35.13A36,36,0,0,0,144,144Zm-.49,56H136V160h8a20,20,0,0,1,20,20.77C163.58,191.59,154.34,200,143.51,200ZM104,152v55.73A8.17,8.17,0,0,1,96.53,216,8,8,0,0,1,88,208V177.38l-13.32,19a8.3,8.3,0,0,1-4.2,3.2,8,8,0,0,1-9-3L48,177.38v30.35A8.17,8.17,0,0,1,40.53,216,8,8,0,0,1,32,208V152.31a8.27,8.27,0,0,1,4.56-7.53,8,8,0,0,1,10,2.63L68,178.05l21.27-30.39a8.28,8.28,0,0,1,8.06-3.55A8,8,0,0,1,104,152Z" />
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
          <polyline
            points="88 208 88 152 60 192 32 152 32 208"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M128,152v56h16a28,28,0,0,0,0-56Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <polyline
            points="148 32 148 92 208 92"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M208,224V88L152,32H56a8,8,0,0,0-8,8v68"
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
          <polygon points="152 32 152 88 208 88 152 32" opacity={0.2} />
          <path
            d="M208,224V88L152,32H56a8,8,0,0,0-8,8v72"
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
          <path
            d="M128,152v56h16a28,28,0,0,0,0-56Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <polyline
            points="96 208 96 152 68 192 40 152 40 208"
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
