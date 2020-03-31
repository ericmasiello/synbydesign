import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Example from './Example';

storiesOf('Example', module)
  .addDecorator(withKnobs)
  .add('default', () => <Example>Hello World</Example>);
