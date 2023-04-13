import React from "react";
interface PropsType {
  size?: number;
}
export const FaceBook = ({ size = 24 }: PropsType) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M11.9997 0.333008C10.4676 0.333008 8.9505 0.634775 7.53503 1.22108C6.11957 1.80738 4.83345 2.66675 3.7501 3.7501C1.56217 5.93802 0.333008 8.90548 0.333008 11.9997C0.333008 17.1563 3.68134 21.5313 8.31301 23.083C8.89634 23.1763 9.08301 22.8147 9.08301 22.4997V20.528C5.85134 21.228 5.16301 18.9647 5.16301 18.9647C4.62634 17.6113 3.86801 17.2497 3.86801 17.2497C2.80634 16.5263 3.94967 16.5497 3.94967 16.5497C5.11634 16.6313 5.73467 17.7513 5.73467 17.7513C6.74968 19.5247 8.46467 18.9997 9.12968 18.7197C9.23468 17.9613 9.53801 17.448 9.86468 17.1563C7.27468 16.8647 4.55634 15.8613 4.55634 11.4163C4.55634 10.1213 4.99967 9.08301 5.75801 8.25467C5.64134 7.96301 5.23301 6.74967 5.87467 5.17467C5.87467 5.17467 6.85467 4.85967 9.08301 6.36467C10.0047 6.10801 11.008 5.97967 11.9997 5.97967C12.9913 5.97967 13.9947 6.10801 14.9163 6.36467C17.1447 4.85967 18.1247 5.17467 18.1247 5.17467C18.7663 6.74967 18.358 7.96301 18.2413 8.25467C18.9997 9.08301 19.443 10.1213 19.443 11.4163C19.443 15.873 16.713 16.853 14.1113 17.1447C14.5313 17.5063 14.9163 18.218 14.9163 19.303V22.4997C14.9163 22.8147 15.103 23.188 15.698 23.083C20.3297 21.5197 23.6663 17.1563 23.6663 11.9997C23.6663 10.4676 23.3646 8.9505 22.7783 7.53503C22.192 6.11957 21.3326 4.83345 20.2493 3.7501C19.1659 2.66675 17.8798 1.80738 16.4643 1.22108C15.0489 0.634775 13.5318 0.333008 11.9997 0.333008Z"
      fill="black"
    />
  </svg>
);
