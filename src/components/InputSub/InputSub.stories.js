import { InputSub } from ".";

export default {
  title: "Components/InputSub",
  component: InputSub,
  argTypes: {
    state: {
      options: ["filled", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    subName: "Mon espace de travail",
    content: "SuperHeros Limited",
    state: "filled",
    className: {},
  },
};
