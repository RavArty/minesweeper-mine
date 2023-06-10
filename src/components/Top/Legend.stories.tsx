import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Legend } from './Legend';

const meta: Meta<typeof Legend> = {
  component: Legend,
};

export default meta;
// export default {
//   title: 'Top/Legend',
//   component: Legend,
//   argTypes: {
//     firstAction: { control: 'text' },
//     secondAction: { control: 'text' },
//   },
// };

type Story = StoryObj<typeof Legend>;

export const Default: Story = {
  render: (args) => <Legend {...args} />,
};

export const GameLegend: Story = {
  args: {
    feature: 'Game',
    firstAction: 'ctrl',
    secondAction: 'click',
  },
};
// const Template: StoryObj = (args) => <Legend {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   firstAction: 'ctrl',
//   secondAction: 'click',
// };
