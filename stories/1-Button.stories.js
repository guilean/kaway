import React from "react";

import { action } from "@storybook/addon-actions";
import { Button } from "../src/lib/Button";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Button",
  component: Button,
  decorators: [withA11y, withKnobs]
};

export const ButtonText = () => (
  <Button
    disabled={boolean("disabled", true)}
    text={text("text", "dummy")}
    onClick={action("clicked")}
  />
);

ButtonText.story = {
  name: "Button text"
};
