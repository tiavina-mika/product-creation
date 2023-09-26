import { TagDriverBloc } from ".";

export default {
  title: "Components/TagDriverBloc",
  component: TagDriverBloc,
  argTypes: {
    type: {
      options: [
        "produit-default",
        "produit-selected",
        "blocs-default",
        "blocs-disabled",
        "produits-disabled",
        "blocs-selected",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    emoji: "🏎",
    showIconLeft: false,
    showImpact: false,
    showClose: false,
    content: "Expérience Client",
    showWorkflowColor: false,
    showEmoji: true,
    type: "produit-default",
    className: {},
  },
};
