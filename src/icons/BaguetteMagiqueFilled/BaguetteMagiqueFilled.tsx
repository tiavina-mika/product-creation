/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const BaguetteMagiqueFilled = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`baguette-magique-filled ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 17 16"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15.207 12L6.5 3.293C6.30952 3.1112 6.05632 3.00976 5.793 3.00976C5.52968 3.00976 5.27648 3.1112 5.086 3.293L3.793 4.586C3.60577 4.77366 3.50063 5.02792 3.50063 5.293C3.50063 5.55808 3.60577 5.81234 3.793 6L12.4995 14.707C12.6872 14.8942 12.9414 14.9994 13.2065 14.9994C13.4716 14.9994 13.7258 14.8942 13.9135 14.707L15.207 13.414C15.3945 13.2265 15.4998 12.9722 15.4998 12.707C15.4998 12.4418 15.3945 12.1875 15.207 12ZM4.5 5.293L5.793 4L8.293 6.5L6.9995 7.7935L4.4995 5.2935L4.5 5.293ZM1.5 8L2.5 7L3.5 8L2.5 9L1.5 8ZM7.5 2L8.5 1L9.5 2L8.5 3L7.5 2ZM1.5 2L2.5 1L3.5 2L2.5 3L1.5 2Z"
        fill="#3D5AF1"
      />
    </svg>
  );
};
