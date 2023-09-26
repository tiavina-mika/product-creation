/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Retour2 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`retour-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11 19.5L12.0575 18.4425L6.3725 12.75H21.5V11.25H6.3725L12.0575 5.5575L11 4.5L3.5 12L11 19.5Z"
        fill="#303030"
      />
    </svg>
  );
};
