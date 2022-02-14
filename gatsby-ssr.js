import React from 'react';
import GatsbyPageWrapper from './src/components/GatsbyPageWrapper';
// eslint-disable-next-line
import googleAnalytics from 'raw-loader!./src/includes/ga.js.txt';

export const wrapPageElement = GatsbyPageWrapper;

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes, setBodyAttributes }, pluginOptions) => {
  setHeadComponents([
    <script key="google-tagmanager" async src="https://www.googletagmanager.com/gtag/js?id=UA-162757-4" />,
    <script key="script-ga" dangerouslySetInnerHTML={{ __html: googleAnalytics }} />,
  ]);
};
