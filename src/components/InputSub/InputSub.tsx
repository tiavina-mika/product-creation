/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  subName: string;
  content: string;
  state: "filled" | "default";
  className: any;
}

export const InputSub = ({
  subName = "Mon espace de travail",
  content = "SuperHeros Limited",
  state,
  className,
}: Props): JSX.Element => {
  return (
    <div className={`input-sub state-9-${state} ${className}`}>
      <div className="superheros-limited">{content}</div>
      {state === "default" && (
        <div className="mon-espace-de-wrapper">
          <div className="mon-espace-de">{subName}</div>
        </div>
      )}
    </div>
  );
};

InputSub.propTypes = {
  subName: PropTypes.string,
  content: PropTypes.string,
  state: PropTypes.oneOf(["filled", "default"]),
};
