import React from "react";
import { ChampsSaisie } from "../../components/ChampsSaisie";
import { InputGNRal } from "../../components/InputGNRal";
import { InputSub } from "../../components/InputSub";
import { PrimaryButton } from "../../components/PrimaryButton";
import { TagDriverBloc } from "../../components/TagDriverBloc";
import { BaguetteMagiqueFilled } from "../../icons/BaguetteMagiqueFilled";
import { Retour1 } from "../../icons/Retour1";
import "./style.css";

export const ProduitsCration = (): JSX.Element => {
  return (
    <div className="produits-cration">
      <PrimaryButton className="primary-button-instance" content="Create product" state="default" />
      <div className="champs">
        <div className="header-settings-n">
          <div className="frame-2">
            <Retour1 className="retour" />
          </div>
          <div className="frame-3">
            <div className="driver-details">Create product</div>
            <div className="fid-lisation">My new product</div>
          </div>
        </div>
        <div className="container">
          <div className="text-wrapper-5">Product informations</div>
          <InputGNRal
            className="input-gnral"
            content="Product name"
            emoji="🏎"
            frameClassName="design-component-instance-node"
            frameClassNameOverride="input-gnral-2"
            inputChampsClassName="input-g-n-ral-instance"
            line="https://c.animaapp.com/liYbXXOM/img/line-3.svg"
            lineClassName="input-gnral-3"
            showAddLeft={false}
            showAddRight={false}
            showAvatarRight={false}
            showChevron={false}
            state="empty"
            subtitleContent="Product name"
          />
          <ChampsSaisie
            className="champs-saisie-instance"
            content="Product description"
            state="default"
            subtitleContent="Product details"
          />
        </div>
        <div className="text-wrapper-6">Product short name</div>
        <div className="frame-4">
          <div className="frame-5">
            <BaguetteMagiqueFilled className="baguette-magique" />
            <p className="p">We suggest you these short names</p>
          </div>
          <div className="frame-6">
            <TagDriverBloc
              className="tag-driver-bloc-produit-workflow"
              content="BLU"
              showEmoji={false}
              type="blocs-default"
            />
            <TagDriverBloc
              className="tag-driver-bloc-produit-workflow"
              content="BTA"
              showEmoji={false}
              type="blocs-default"
            />
            <TagDriverBloc
              className="tag-driver-bloc-produit-workflow"
              content="BAB"
              showEmoji={false}
              type="blocs-default"
            />
          </div>
        </div>
      </div>
      <InputSub className="input-sub-instance" content="BAB" state="default" subName="Short name" />
    </div>
  );
};
