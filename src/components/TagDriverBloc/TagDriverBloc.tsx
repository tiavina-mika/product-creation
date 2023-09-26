/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  emoji: string;
  showIconLeft: boolean;
  showImpact: boolean;
  showClose: boolean;
  content: string;
  showWorkflowColor: boolean;
  showEmoji: boolean;
  type:
    | "produit-default"
    | "produit-selected"
    | "blocs-default"
    | "blocs-disabled"
    | "produits-disabled"
    | "blocs-selected";
  className: any;
}

export const TagDriverBloc = ({
  emoji = "🏎",
  showIconLeft = false,
  showImpact = false,
  showClose = false,
  content = "Expérience Client",
  showWorkflowColor = false,
  showEmoji = true,
  type,
  className,
}: Props): JSX.Element => {
  return (
    <div className={`tag-driver-bloc ${type} ${className}`}>
      {showEmoji && <div className="text-wrapper-4">{emoji}</div>}

      <div className="exp-rience-client">{content}</div>
    </div>
  );
};

TagDriverBloc.propTypes = {
  emoji: PropTypes.string,
  showIconLeft: PropTypes.bool,
  showImpact: PropTypes.bool,
  showClose: PropTypes.bool,
  content: PropTypes.string,
  showWorkflowColor: PropTypes.bool,
  showEmoji: PropTypes.bool,
  type: PropTypes.oneOf([
    "produit-default",
    "produit-selected",
    "blocs-default",
    "blocs-disabled",
    "produits-disabled",
    "blocs-selected",
  ]),
};
