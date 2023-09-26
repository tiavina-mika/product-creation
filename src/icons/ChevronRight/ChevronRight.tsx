/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const ChevronRight = ({ color = "#303030", className }: Props): JSX.Element => {
  return (
    <svg
      className={`chevron-right ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.85 8.15018L5.84999 13.1502L5.14999 12.4502L9.44999 8.15018L5.14999 3.85018L5.84999 3.15018L10.85 8.15018Z"
        fill={color}
      />
    </svg>
  );
};

ChevronRight.propTypes = {
  color: PropTypes.string,
};
