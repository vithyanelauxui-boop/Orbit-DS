import * as React from "react";

import type { IconProps } from "./types";

export function PhoneXIcon({
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
          <line
            x1={152}
            y1={56}
            x2={200}
            y2={104}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={200}
            y1={56}
            x2={152}
            y2={104}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z"
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
          <path d="M146.34,98.34,164.69,80,146.34,61.66a8,8,0,0,1,11.32-11.32L176,68.69l18.34-18.35a8,8,0,0,1,11.32,11.32L187.32,80l18.34,18.34a8,8,0,0,1-11.32,11.32L176,91.31l-18.34,18.35a8,8,0,0,1-11.32-11.32Zm68,68.12-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L126.87,168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L89.54,41.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,24,88c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,214.37,166.46Z" />
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
          <line
            x1={152}
            y1={56}
            x2={200}
            y2={104}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <line
            x1={200}
            y1={56}
            x2={152}
            y2={104}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
          <path
            d="M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z"
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
          <line
            x1={152}
            y1={56}
            x2={200}
            y2={104}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <line
            x1={200}
            y1={56}
            x2={152}
            y2={104}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
          />
          <path
            d="M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z"
            opacity={0.2}
          />
          <path
            d="M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z"
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
