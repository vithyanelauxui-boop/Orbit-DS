import * as React from "react";

import type { IconProps } from "./types";

export function FishIcon({
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
          <circle cx={156} cy={76} r={12} />
          <path
            d="M8,175.87l56.07,16.06,16,56.07,24-56.07C258.51,188.26,220,38.68,219,37c-1.73-1-151.25-39.46-155,114.9Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M185.82,167.62A44,44,0,0,1,136.2,119.8,44,44,0,0,1,88.38,70.21"
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
          <path d="M168,76a12,12,0,1,1-12-12A12,12,0,0,1,168,76Zm48.72,67.64c-19.37,34.9-55.44,53.76-107.24,56.1l-22,51.41A8,8,0,0,1,80.1,256l-.51,0a8,8,0,0,1-7.19-5.78L57.6,198.39,5.8,183.56a8,8,0,0,1-1-15.05l51.41-22c2.35-51.78,21.21-87.84,56.09-107.22,24.75-13.74,52.74-15.84,71.88-15.18,18.64.64,36,4.27,38.86,6a8,8,0,0,1,2.83,2.83c1.69,2.85,5.33,20.21,6,38.85C232.55,90.89,230.46,118.89,216.72,143.64Zm-4.3-100.07c-14.15-3-64.1-11-100.3,14.75a81.21,81.21,0,0,0-16,15.07,36,36,0,0,0,39.35,38.44,8,8,0,0,1,8.73,8.73,36,36,0,0,0,38.47,39.34,80.81,80.81,0,0,0,15-16C223.42,107.73,215.42,57.74,212.42,43.57Z" />
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
          <circle cx={156} cy={76} r={16} />
          <path
            d="M12,175.87l52.07,16.06,16,52.07,24-52.07C258.51,188.26,220,38.68,219,37c-1.73-1-151.25-39.46-155,114.9Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M185.82,167.62A44,44,0,0,1,136.2,119.8,44,44,0,0,1,88.38,70.21"
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
            d="M148.89,155.11A43.91,43.91,0,0,1,136.2,119.8,44,44,0,0,1,88.38,70.22c-13.9,18-23.41,44.16-24.31,81.65L8,175.87l56.07,16.06,16,56.07,24-56.07c37.51-.9,63.64-10.41,81.68-24.31A43.92,43.92,0,0,1,148.89,155.11Z"
            opacity={0.2}
          />
          <circle cx={156} cy={76} r={12} />
          <path
            d="M8,175.87l56.07,16.06,16,56.07,24-56.07C258.51,188.26,220,38.68,219,37c-1.73-1-151.25-39.46-155,114.9Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M185.82,167.62A44,44,0,0,1,136.2,119.8,44,44,0,0,1,88.38,70.21"
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
