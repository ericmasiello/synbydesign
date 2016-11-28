import React, { PropTypes } from 'react';
import ScreenReaderFocusElm from './screen-reader-focus-elm.component';
import { UI_IDS } from '../configuration';

const AboutContent = ({ aboutContent }) => (
  <section className="container-fluid">
    <ScreenReaderFocusElm elmId={UI_IDS.about}>
      <div className="well h4" dangerouslySetInnerHTML={{ __html: aboutContent }} />
    </ScreenReaderFocusElm>
  </section>
);

AboutContent.propTypes = {
  aboutContent: PropTypes.string.isRequired,
};

AboutContent.defaultProps = {
  content: '<p>Loading...</p>',
  loadedAboutContent: false,
};

export default AboutContent;
