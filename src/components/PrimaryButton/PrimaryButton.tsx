/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  content2: string;
  showContent2: boolean;
  content: string;
  state: "disabled" | "hover" | "error" | "default";
  className: any;
}

export const PrimaryButton = ({
  content2 = "Continuer",
  showContent2 = false,
  content = "Continuer",
  state,
  className,
}: Props): JSX.Element => {
  return (
    <div className={`primary-button ${state} ${className}`}>
      <div className="continuer">{content}</div>
    </div>
  );
};

PrimaryButton.propTypes = {
  content2: PropTypes.string,
  showContent2: PropTypes.bool,
  content: PropTypes.string,
  state: PropTypes.oneOf(["disabled", "hover", "error", "default"]),
};
