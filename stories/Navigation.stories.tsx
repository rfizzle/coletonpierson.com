import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navigation from "../components/Navigation";

export default {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
};
