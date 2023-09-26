import { InputGNRal } from ".";

export default {
  title: "Components/InputGNRal",
  component: InputGNRal,
  argTypes: {
    state: {
      options: ["filled", "selected", "empty", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showContentPlus: false,
    contentPlus: "Produit",
    showAvatarRight: true,
    showWorkflowColor: false,
    showToggle: false,
    showAddRight: true,
    type: "Problématique",
    showDropdownContent: false,
    showType: false,
    showDescription: true,
    addRight: "+",
    showTagDriverBlocProduitWorkflow: false,
    showEmoji: true,
    showProgressbar: false,
    content: "Laurent.P@foodchéri.com",
    showAddLeft: true,
    description: "Jaugez l’impact de ce driver sur votre problématique.",
    emoji: "👑",
    showChevron: true,
    subtitleContent: "Subtitle",
    showAvatarLeft: false,
    addLeft: "+",
    showSubtitle: true,
    showEmoji1: true,
    state: "filled",
    className: {},
    inputChampsClassName: {},
    frameClassName: {},
    frameClassNameOverride: {},
    lineClassName: {},
    line: "https://c.animaapp.com/liYbXXOM/img/line-3-8.svg",
  },
};
