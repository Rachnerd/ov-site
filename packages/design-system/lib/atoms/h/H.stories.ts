import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import type { H, HeadingSize } from "./H";
import "./H";
import { ifDefined } from "lit/directives/if-defined.js";

const meta: Meta<H> = {
  title: "Example/Atoms/H",
  component: "ov-h",
};

export default meta;

const HEADING_SIZES = [1, 2, 3, 4, 5] satisfies HeadingSize[];

export const Primary: StoryObj<H> = {
  render: ({ size, as }) =>
    html`<ov-h size="${size}" as="${ifDefined(as)}"
      >Heading ${size} ${as ? `as ${as}` : ""}</ov-h
    >`,
  args: {
    size: 1,
    as: undefined,
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: HEADING_SIZES,
    },
    as: {
      control: { type: "select" },
      options: ["Undefined", ...HEADING_SIZES],
      mapping: {
        Undefined: undefined,
      },
    },
  },
};

export const AllSizes: StoryObj<H> = {
  render: () =>
    html`
      <ov-h size="1">Heading 1</ov-h>
      <ov-h size="2">Heading 2</ov-h>
      <ov-h size="3">Heading 3</ov-h>
      <ov-h size="4">Heading 4</ov-h>
      <ov-h size="5">Heading 5</ov-h>
    `,
};

export const Accessibility: StoryObj<H> = {
  render: () =>
    html`
      <ov-h h="1">Heading 1</ov-h>
      <ov-h h="1" as="2">Heading 1</ov-h>
      <ov-h h="1" as="3">Heading 1</ov-h>
      <ov-h h="1" as="4">Heading 1</ov-h>
      <ov-h h="1" as="5">Heading 1</ov-h>
    `,
};
