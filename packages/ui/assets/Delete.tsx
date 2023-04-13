import React from "react";
interface PropsType {
  size?: number;
}
export const Delete = ({ size = 50 }: PropsType) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none">
    <path
      d="M20.8333 37.5003C21.3859 37.5003 21.9158 37.2808 22.3065 36.8901C22.6972 36.4994 22.9167 35.9695 22.9167 35.417V22.917C22.9167 22.3645 22.6972 21.8346 22.3065 21.4439C21.9158 21.0532 21.3859 20.8337 20.8333 20.8337C20.2808 20.8337 19.7509 21.0532 19.3602 21.4439C18.9695 21.8346 18.75 22.3645 18.75 22.917V35.417C18.75 35.9695 18.9695 36.4994 19.3602 36.8901C19.7509 37.2808 20.2808 37.5003 20.8333 37.5003ZM41.6667 12.5003H33.3333V10.417C33.3333 8.75939 32.6749 7.16968 31.5028 5.99757C30.3306 4.82547 28.7409 4.16699 27.0833 4.16699H22.9167C21.2591 4.16699 19.6694 4.82547 18.4972 5.99757C17.3251 7.16968 16.6667 8.75939 16.6667 10.417V12.5003H8.33333C7.7808 12.5003 7.25089 12.7198 6.86019 13.1105C6.46949 13.5012 6.25 14.0311 6.25 14.5837C6.25 15.1362 6.46949 15.6661 6.86019 16.0568C7.25089 16.4475 7.7808 16.667 8.33333 16.667H10.4167V39.5837C10.4167 41.2413 11.0751 42.831 12.2472 44.0031C13.4194 45.1752 15.0091 45.8337 16.6667 45.8337H33.3333C34.9909 45.8337 36.5806 45.1752 37.7528 44.0031C38.9249 42.831 39.5833 41.2413 39.5833 39.5837V16.667H41.6667C42.2192 16.667 42.7491 16.4475 43.1398 16.0568C43.5305 15.6661 43.75 15.1362 43.75 14.5837C43.75 14.0311 43.5305 13.5012 43.1398 13.1105C42.7491 12.7198 42.2192 12.5003 41.6667 12.5003ZM20.8333 10.417C20.8333 9.86446 21.0528 9.33455 21.4435 8.94385C21.8342 8.55315 22.3641 8.33366 22.9167 8.33366H27.0833C27.6359 8.33366 28.1658 8.55315 28.5565 8.94385C28.9472 9.33455 29.1667 9.86446 29.1667 10.417V12.5003H20.8333V10.417ZM35.4167 39.5837C35.4167 40.1362 35.1972 40.6661 34.8065 41.0568C34.4158 41.4475 33.8859 41.667 33.3333 41.667H16.6667C16.1141 41.667 15.5842 41.4475 15.1935 41.0568C14.8028 40.6661 14.5833 40.1362 14.5833 39.5837V16.667H35.4167V39.5837ZM29.1667 37.5003C29.7192 37.5003 30.2491 37.2808 30.6398 36.8901C31.0305 36.4994 31.25 35.9695 31.25 35.417V22.917C31.25 22.3645 31.0305 21.8346 30.6398 21.4439C30.2491 21.0532 29.7192 20.8337 29.1667 20.8337C28.6141 20.8337 28.0842 21.0532 27.6935 21.4439C27.3028 21.8346 27.0833 22.3645 27.0833 22.917V35.417C27.0833 35.9695 27.3028 36.4994 27.6935 36.8901C28.0842 37.2808 28.6141 37.5003 29.1667 37.5003Z"
      fill="black"
    />
  </svg>
);