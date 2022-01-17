import React from 'react';
// import { createStitches } from '@stitches/react';
import { getCssText } from '@synbydesign/common-ui';
import GatsbyPageWrapper from './src/components/GatsbyPageWrapper';

// const { getCssText } = createStitches();

export const wrapPageElement = GatsbyPageWrapper;

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      id="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssText(),
      }}
    />,
  ]);
};
