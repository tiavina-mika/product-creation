/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  subtitleContent: string;
  content: string;
  showSubtitle: boolean;
  state: "filled" | "default";
  className: any;
}

export const ChampsSaisie = ({
  subtitleContent = "Subtitle",
  content = "Décrivez votre problème. Indiquez le maximum d’informations. Ce champs n’a qu’une limite, la vôtre.",
  showSubtitle = true,
  state,
  className,
}: Props): JSX.Element => {
  return (
    <div className={`champs-saisie state-7-${state} ${className}`}>
      <p className="d-crivez-votre-probl">{content}</p>
      {showSubtitle && (
        <div className="div-wrapper">
          <div className="subtitle-2">{subtitleContent}</div>
        </div>
      )}
    </div>
  );
};

ChampsSaisie.propTypes = {
  subtitleContent: PropTypes.string,
  content: PropTypes.string,
  showSubtitle: PropTypes.bool,
  state: PropTypes.oneOf(["filled", "default"]),
};
