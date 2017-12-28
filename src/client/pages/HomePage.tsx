import * as React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';

interface Props {
  className?: string;
}

export const Home: React.SFC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Hero />
    </div>
  );
};

Home.displayName = 'Home';

export default {
  component: styled(Home)`
  `,
};
