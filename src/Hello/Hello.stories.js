import React from 'react';
import Hello from './Hello';

export default {
  title: 'components/basic/Hello',
  component: Hello,
};

export const standard = () => <Hello name="Storybook" />;
export const big = () => <Hello name="Storybook" big />;
