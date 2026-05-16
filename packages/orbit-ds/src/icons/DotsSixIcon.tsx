import * as React from "react";

import type { IconProps } from "./types";

export function DotsSixIcon({
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
          <circle cx={60} cy={92} r={12} />
          <circle cx={128} cy={92} r={12} />
          <circle cx={196} cy={92} r={12} />
          <circle cx={60} cy={164} r={12} />
          <circle cx={128} cy={164} r={12} />
          <circle cx={196} cy={164} r={12} />
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
          <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM68,168a12,12,0,1,1,12-12A12,12,0,0,1,68,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,68,112Zm60,56a12,12,0,1,1,12-12A12,12,0,0,1,128,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,128,112Zm60,56a12,12,0,1,1,12-12A12,12,0,0,1,188,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,188,112Z" />
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
          <circle cx={60} cy={92} r={16} />
          <circle cx={128} cy={92} r={16} />
          <circle cx={196} cy={92} r={16} />
          <circle cx={60} cy={164} r={16} />
          <circle cx={128} cy={164} r={16} />
          <circle cx={196} cy={164} r={16} />
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
          <rect x={16} y={48} width={224} height={160} rx={16} opacity={0.2} />
          <circle cx={60} cy={92} r={12} />
          <circle cx={128} cy={92} r={12} />
          <circle cx={196} cy={92} r={12} />
          <circle cx={60} cy={164} r={12} />
          <circle cx={128} cy={164} r={12} />
          <circle cx={196} cy={164} r={12} />
        </svg>
      );

    default:
      return null;
  }
}
