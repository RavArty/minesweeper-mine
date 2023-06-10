import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { TopComponent } from './TopComponent';

const meta: Meta<typeof TopComponent> = {
  component: TopComponent,
};

export default meta;

type Story = StoryObj<typeof TopComponent>;

export const Default: Story = {
  render: (args) => <TopComponent {...args} />,
};

export const TopPanel: Story = {
  args: {
    children: 'Mine Sweeper',
    feature: 'Game',
    firstAction: 'ctrl',
    secondAction: 'click',
  },
};

// export const GameLegend: Story = {
//   args: {
//     feature: 'Game',
//     firstAction: 'ctrl',
//     secondAction: 'click',
//   },
// };
