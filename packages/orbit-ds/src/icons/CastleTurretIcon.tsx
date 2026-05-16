import * as React from "react";

import type { IconProps } from "./types";

export function CastleTurretIcon({
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
          <path
            d="M192,224V112l13.66-13.66A8,8,0,0,0,208,92.69V48a8,8,0,0,0-8-8H176V72H144V40H112V72H80V40H56a8,8,0,0,0-8,8V92.69a8,8,0,0,0,2.34,5.65L64,112V224"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M104,224V168a24,24,0,0,1,48,0v56"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={40}
            y1={224}
            x2={216}
            y2={224}
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
          <path d="M216,216H200V115.31L211.31,104A15.86,15.86,0,0,0,216,92.69V48a16,16,0,0,0-16-16H180a8,8,0,0,0-8,8V64H148V40a8,8,0,0,0-8-8H116a8,8,0,0,0-8,8V64H84V40a8,8,0,0,0-8-8H56A16,16,0,0,0,40,48V92.69A15.86,15.86,0,0,0,44.69,104L56,115.31V216H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM112,168a16,16,0,0,1,32,0v48H112Z" />
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
          <path
            d="M192,224V112l13.66-13.66A8,8,0,0,0,208,92.69V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V92.69a8,8,0,0,0,2.34,5.65L64,112V224"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={100}
            y1={76}
            x2={100}
            y2={40}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={156}
            y1={76}
            x2={156}
            y2={40}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M104,224V168a24,24,0,0,1,48,0v56"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={40}
            y1={224}
            x2={216}
            y2={224}
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
          <path
            d="M192,224V112l13.66-13.66A8,8,0,0,0,208,92.69V48a8,8,0,0,0-8-8H176V72H144V40H112V72H80V40H56a8,8,0,0,0-8,8V92.69a8,8,0,0,0,2.34,5.65L64,112V224h40V168a24,24,0,0,1,48,0v56Z"
            opacity={0.2}
          />
          <path
            d="M192,224V112l13.66-13.66A8,8,0,0,0,208,92.69V48a8,8,0,0,0-8-8H176V72H144V40H112V72H80V40H56a8,8,0,0,0-8,8V92.69a8,8,0,0,0,2.34,5.65L64,112V224"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M104,224V168a24,24,0,0,1,48,0v56"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={40}
            y1={224}
            x2={216}
            y2={224}
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
