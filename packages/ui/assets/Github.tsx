import React from "react";
interface PropsType {
  size?: number;
  onClick?: () => void;
}
export const Github = ({ size = 28, onClick }: PropsType) => (
  <svg
    width={size}
    height={size}
    onClick={onClick}
    viewBox="0 0 28 28"
    fill="none"
  >
    <path
      d="M25.6663 13.9997C25.6663 7.55967 20.4397 2.33301 13.9997 2.33301C7.55967 2.33301 2.33301 7.55967 2.33301 13.9997C2.33301 19.6463 6.34634 24.348 11.6663 25.433V17.4997H9.33301V13.9997H11.6663V11.083C11.6663 8.83134 13.498 6.99967 15.7497 6.99967H18.6663V10.4997H16.333C15.6913 10.4997 15.1663 11.0247 15.1663 11.6663V13.9997H18.6663V17.4997H15.1663V25.608C21.058 25.0247 25.6663 20.0547 25.6663 13.9997Z"
      fill="black"
    />
  </svg>
);
