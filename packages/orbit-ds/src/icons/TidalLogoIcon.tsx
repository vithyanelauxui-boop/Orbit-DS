import * as React from "react";

import type { IconProps } from "./types";

export function TidalLogoIcon({
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
            x={19.72}
            y={67.72}
            width={56.57}
            height={56.57}
            transform="translate(-53.82 62.06) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <rect
            x={99.72}
            y={67.72}
            width={56.57}
            height={56.57}
            transform="translate(-30.39 118.63) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <rect
            x={99.72}
            y={147.72}
            width={56.57}
            height={56.57}
            transform="translate(-86.96 142.06) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <rect
            x={179.72}
            y={67.72}
            width={56.57}
            height={56.57}
            transform="translate(-6.96 175.2) rotate(-45)"
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
          <path d="M253.66,101.66l-36,36a8,8,0,0,1-11.32,0l-36-36-.34-.38-.34.38L135.31,136l34.35,34.34a8,8,0,0,1,0,11.32l-36,36a8,8,0,0,1-11.32,0l-36-36a8,8,0,0,1,0-11.32L120.69,136,86.34,101.66l-.34-.38-.34.38-36,36a8,8,0,0,1-11.32,0l-36-36a8,8,0,0,1,0-11.32l36-36a8,8,0,0,1,11.32,0l36,36,.34.38.34-.38,36-36a8,8,0,0,1,11.32,0l36,36,.34.38.34-.38,36-36a8,8,0,0,1,11.32,0l36,36A8,8,0,0,1,253.66,101.66Z" />
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
            x={23.13}
            y={69.13}
            width={53.74}
            height={53.74}
            transform="translate(-53.24 63.47) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <rect
            x={99.72}
            y={67.72}
            width={56.57}
            height={56.57}
            transform="translate(-30.39 118.63) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <rect
            x={99.72}
            y={147.72}
            width={56.57}
            height={56.57}
            transform="translate(-86.96 142.06) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <rect
            x={179.13}
            y={69.13}
            width={53.74}
            height={53.74}
            transform="translate(-7.55 173.78) rotate(-45)"
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
          <rect
            x={19.72}
            y={67.72}
            width={56.57}
            height={56.57}
            transform="translate(-53.82 62.06) rotate(-45)"
            opacity={0.2}
          />
          <rect
            x={99.72}
            y={67.72}
            width={56.57}
            height={56.57}
            transform="translate(-30.39 118.63) rotate(-45)"
            opacity={0.2}
          />
          <rect
            x={99.72}
            y={147.72}
            width={56.57}
            height={56.57}
            transform="translate(-86.96 142.06) rotate(-45)"
            opacity={0.2}
          />
          <rect
            x={179.72}
            y={67.72}
            width={56.57}
            height={56.57}
            transform="translate(-6.96 175.2) rotate(-45)"
            opacity={0.2}
          />
          <rect
            x={19.72}
            y={67.72}
            width={56.57}
            height={56.57}
            transform="translate(-53.82 62.06) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <rect
            x={99.72}
            y={67.72}
            width={56.57}
            height={56.57}
            transform="translate(-30.39 118.63) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <rect
            x={99.72}
            y={147.72}
            width={56.57}
            height={56.57}
            transform="translate(-86.96 142.06) rotate(-45)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <rect
            x={179.72}
            y={67.72}
            width={56.57}
            height={56.57}
            transform="translate(-6.96 175.2) rotate(-45)"
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
