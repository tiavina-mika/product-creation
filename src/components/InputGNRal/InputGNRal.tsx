/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChevronRight } from "../../icons/ChevronRight";
import "./style.css";

interface Props {
  showContentPlus: boolean;
  contentPlus: string;
  showAvatarRight: boolean;
  showWorkflowColor: boolean;
  showToggle: boolean;
  showAddRight: boolean;
  type: string;
  showDropdownContent: boolean;
  showType: boolean;
  showDescription: boolean;
  addRight: string;
  showTagDriverBlocProduitWorkflow: boolean;
  showEmoji: boolean;
  showProgressbar: boolean;
  content: string;
  showAddLeft: boolean;
  description: string;
  emoji: string;
  showChevron: boolean;
  subtitleContent: string;
  showAvatarLeft: boolean;
  addLeft: string;
  showSubtitle: boolean;
  showEmoji1: boolean;
  state: "filled" | "selected" | "empty" | "disabled";
  className: any;
  inputChampsClassName: any;
  frameClassName: any;
  frameClassNameOverride: any;
  lineClassName: any;
  line: string;
}

export const InputGNRal = ({
  showContentPlus = false,
  contentPlus = "Produit",
  showAvatarRight = true,
  showWorkflowColor = false,
  showToggle = false,
  showAddRight = true,
  type = "Problématique",
  showDropdownContent = false,
  showType = false,
  showDescription = true,
  addRight = "+",
  showTagDriverBlocProduitWorkflow = false,
  showEmoji = true,
  showProgressbar = false,
  content = "Laurent.P@foodchéri.com",
  showAddLeft = true,
  description = "Jaugez l’impact de ce driver sur votre problématique.",
  emoji = "👑",
  showChevron = true,
  subtitleContent = "Subtitle",
  showAvatarLeft = false,
  addLeft = "+",
  showSubtitle = true,
  showEmoji1 = true,
  state,
  className,
  inputChampsClassName,
  frameClassName,
  frameClassNameOverride,
  lineClassName,
  line = "https://c.animaapp.com/liYbXXOM/img/line-3-8.svg",
}: Props): JSX.Element => {
  return (
    <div className={`input-g-n-ral ${className}`}>
      <div className={`input-champs state-0-${state} ${state === "empty" ? inputChampsClassName : undefined}`}>
        {showEmoji && (
          <div className={`frame ${state === "empty" ? frameClassName : undefined}`}>
            {showEmoji1 && <div className="text-wrapper">{emoji}</div>}

            <div className={`div ${state === "empty" ? frameClassNameOverride : undefined}`}>
              {showAddLeft && <div className="text-wrapper-2">{addLeft}</div>}

              <img
                className={`line ${state === "empty" ? lineClassName : undefined}`}
                alt="Line"
                src={
                  state === "empty"
                    ? line
                    : state === "selected"
                    ? "https://c.animaapp.com/liYbXXOM/img/line-3-4.svg"
                    : "https://c.animaapp.com/liYbXXOM/img/line-3-6.svg"
                }
              />
            </div>
          </div>
        )}

        <div className="laurent-p-foodch-ri">
          {state === "empty" && <>{content}</>}

          {["disabled", "filled", "selected"].includes(state) && <div className="laurent-p-foodch-ri-2">{content}</div>}
        </div>
        {showAvatarRight && (
          <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/liYbXXOM/img/ellipse-76-3@2x.png" />
        )}

        {showChevron && <ChevronRight className="chevron-right" color={state === "disabled" ? "#A0A0A0" : "#303030"} />}

        {showAddRight && (
          <div className="add-right">
            <img
              className="img"
              alt="Line"
              src={
                state === "empty"
                  ? "https://c.animaapp.com/liYbXXOM/img/line-3-8.svg"
                  : state === "selected"
                  ? "https://c.animaapp.com/liYbXXOM/img/line-3-4.svg"
                  : "https://c.animaapp.com/liYbXXOM/img/line-3-6.svg"
              }
            />
            <div className="text-wrapper-3">{addRight}</div>
          </div>
        )}
      </div>
      {showSubtitle && (
        <div className={`subtitle-wrapper state-5-${state}`}>
          <div className="subtitle">{subtitleContent}</div>
        </div>
      )}
    </div>
  );
};

InputGNRal.propTypes = {
  showContentPlus: PropTypes.bool,
  contentPlus: PropTypes.string,
  showAvatarRight: PropTypes.bool,
  showWorkflowColor: PropTypes.bool,
  showToggle: PropTypes.bool,
  showAddRight: PropTypes.bool,
  type: PropTypes.string,
  showDropdownContent: PropTypes.bool,
  showType: PropTypes.bool,
  showDescription: PropTypes.bool,
  addRight: PropTypes.string,
  showTagDriverBlocProduitWorkflow: PropTypes.bool,
  showEmoji: PropTypes.bool,
  showProgressbar: PropTypes.bool,
  content: PropTypes.string,
  showAddLeft: PropTypes.bool,
  description: PropTypes.string,
  emoji: PropTypes.string,
  showChevron: PropTypes.bool,
  subtitleContent: PropTypes.string,
  showAvatarLeft: PropTypes.bool,
  addLeft: PropTypes.string,
  showSubtitle: PropTypes.bool,
  showEmoji1: PropTypes.bool,
  state: PropTypes.oneOf(["filled", "selected", "empty", "disabled"]),
  line: PropTypes.string,
};
