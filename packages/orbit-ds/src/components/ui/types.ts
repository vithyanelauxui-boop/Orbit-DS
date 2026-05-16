import * as React from "react"

export type IconVariant =
  | "regular"
  | "fill"
  | "bold"
  | "duotone"

export interface IconProps
  extends React.SVGProps<SVGSVGElement> {
  variant?: IconVariant
  size?: number
}