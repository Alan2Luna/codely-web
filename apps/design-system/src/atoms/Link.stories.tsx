import { Meta, Story } from "@storybook/react";

import { Link, LinkProps } from "./Link";

export default {
  title: "Atoms/Link",
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => <Link href="https://codely.tv" {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  mode: "primary",
  children: "link",
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: "secondary",
  children: "link",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  mode: "tertiary",
  children: "link",
};

export const Inverted = Template.bind({});
Inverted.args = {
  mode: "inverted",
  children: "link",
};
