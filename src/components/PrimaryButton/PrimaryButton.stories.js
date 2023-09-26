import { PrimaryButton } from ".";

export default {
  title: "Components/PrimaryButton",
  component: PrimaryButton,
  argTypes: {
    state: {
      options: ["disabled", "hover", "error", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    content2: "Continuer",
    showContent2: false,
    content: "Continuer",
    state: "disabled",
    className: {},
  },
};
