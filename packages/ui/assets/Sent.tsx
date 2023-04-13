import React from "react";

interface PropsType {
  size?: number;
}

export const Sent = ({ size = 50 }: PropsType) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none">
    <path
      d="M42.3748 19.4168L13.2081 4.83344C12.0571 4.26054 10.7573 4.05658 9.4861 4.24938C8.21489 4.44217 7.03407 5.02233 6.10464 5.91076C5.17521 6.79919 4.54239 7.95265 4.29248 9.21388C4.04256 10.4751 4.1877 11.7827 4.70812 12.9584L9.70812 24.1459C9.82157 24.4164 9.88 24.7068 9.88 25.0001C9.88 25.2934 9.82157 25.5838 9.70812 25.8543L4.70812 37.0418C4.28457 37.9933 4.10552 39.0355 4.18724 40.0738C4.26895 41.1121 4.60883 42.1135 5.176 42.987C5.74316 43.8605 6.51963 44.5784 7.43483 45.0756C8.35003 45.5727 9.37495 45.8332 10.4164 45.8334C11.3919 45.8237 12.3529 45.5959 13.2289 45.1668L42.3956 30.5834C43.4302 30.063 44.2998 29.2653 44.9075 28.2794C45.5151 27.2935 45.8369 26.1582 45.8369 25.0001C45.8369 23.842 45.5151 22.7067 44.9075 21.7208C44.2998 20.7349 43.4302 19.9372 42.3956 19.4168H42.3748ZM40.5206 26.8543L11.3539 41.4376C10.971 41.6215 10.5409 41.6839 10.1214 41.6165C9.70195 41.549 9.31313 41.3549 9.0071 41.0602C8.70107 40.7655 8.49245 40.3843 8.40922 39.9677C8.32599 39.551 8.37213 39.1189 8.54145 38.7293L13.5206 27.5418C13.5851 27.3924 13.6407 27.2393 13.6873 27.0834H28.0414C28.594 27.0834 29.1239 26.8639 29.5146 26.4732C29.9053 26.0825 30.1248 25.5526 30.1248 25.0001C30.1248 24.4476 29.9053 23.9177 29.5146 23.527C29.1239 23.1363 28.594 22.9168 28.0414 22.9168H13.6873C13.6407 22.7609 13.5851 22.6078 13.5206 22.4584L8.54145 11.2709C8.37213 10.8813 8.32599 10.4492 8.40922 10.0325C8.49245 9.61591 8.70107 9.23469 9.0071 8.94C9.31313 8.6453 9.70195 8.45121 10.1214 8.38375C10.5409 8.3163 10.971 8.37871 11.3539 8.5626L40.5206 23.1459C40.8619 23.3208 41.1483 23.5864 41.3482 23.9135C41.5482 24.2407 41.654 24.6167 41.654 25.0001C41.654 25.3835 41.5482 25.7595 41.3482 26.0867C41.1483 26.4138 40.8619 26.6794 40.5206 26.8543Z"
      fill="black"
    />
  </svg>
);