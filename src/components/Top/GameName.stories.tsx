import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { GameName } from './GameName';

const meta: Meta<typeof GameName> = {
  component: GameName,
};

export default meta;

type Story = StoryObj<typeof GameName>;

export const Default: Story = {
  render: (args) => <GameName {...args} />,
};

export const MineSweeperGameName: Story = {
  args: {
    children: 'Mine Sweeper',
  },
};

// const Template: StoryObj = (args) => <Legend {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   firstAction: 'ctrl',
//   secondAction: 'click',
// };
