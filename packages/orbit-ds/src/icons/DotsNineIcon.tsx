import * as React from "react";

import type { IconProps } from "./types";

export function DotsNineIcon({
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
          <circle cx={60} cy={60} r={12} />
          <circle cx={128} cy={60} r={12} />
          <circle cx={196} cy={60} r={12} />
          <circle cx={60} cy={128} r={12} />
          <circle cx={128} cy={128} r={12} />
          <circle cx={196} cy={128} r={12} />
          <circle cx={60} cy={196} r={12} />
          <circle cx={128} cy={196} r={12} />
          <circle cx={196} cy={196} r={12} />
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
          <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM76,192a12,12,0,1,1,12-12A12,12,0,0,1,76,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,76,140Zm0-52A12,12,0,1,1,88,76,12,12,0,0,1,76,88Zm52,104a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,128,88Zm52,104a12,12,0,1,1,12-12A12,12,0,0,1,180,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,180,140Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z" />
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
          <circle cx={60} cy={60} r={16} />
          <circle cx={128} cy={60} r={16} />
          <circle cx={196} cy={60} r={16} />
          <circle cx={60} cy={128} r={16} />
          <circle cx={128} cy={128} r={16} />
          <circle cx={196} cy={128} r={16} />
          <circle cx={60} cy={196} r={16} />
          <circle cx={128} cy={196} r={16} />
          <circle cx={196} cy={196} r={16} />
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
          <circle cx={60} cy={60} r={12} />
          <circle cx={128} cy={60} r={12} />
          <circle cx={196} cy={60} r={12} />
          <circle cx={60} cy={128} r={12} />
          <circle cx={128} cy={128} r={12} />
          <circle cx={196} cy={128} r={12} />
          <circle cx={60} cy={196} r={12} />
          <circle cx={128} cy={196} r={12} />
          <circle cx={196} cy={196} r={12} />
        </svg>
      );

    default:
      return null;
  }
}
