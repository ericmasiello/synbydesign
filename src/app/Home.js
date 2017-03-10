/* @flow */
import React from 'react';
import About from './About';
import { PortfolioListContainer } from './Portfolio';

export default function Home() {
  return (
    <div>
      This is the home view!
      <About />
      <PortfolioListContainer />
    </div>
  );
}
