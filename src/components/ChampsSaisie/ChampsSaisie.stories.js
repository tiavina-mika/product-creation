import { ChampsSaisie } from ".";

export default {
  title: "Components/ChampsSaisie",
  component: ChampsSaisie,
  argTypes: {
    state: {
      options: ["filled", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    subtitleContent: "Subtitle",
    content: "Décrivez votre problème. Indiquez le maximum d’informations. Ce champs n’a qu’une limite, la vôtre.",
    showSubtitle: true,
    state: "filled",
    className: {},
  },
};
