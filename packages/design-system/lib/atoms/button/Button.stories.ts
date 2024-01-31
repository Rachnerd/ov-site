import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import type { Button, HeadingSize } from "./Button";
import "./Button";
import { ifDefined } from "lit/directives/if-defined.js";

const meta: Meta<Button> = {
  title: "Example/Atoms/Button",
  component: "ov-button",
};

export default meta;

export const Primary: StoryObj<Button> = {
  render: () => html`<ov-button>Click</ov-button>`,
};
