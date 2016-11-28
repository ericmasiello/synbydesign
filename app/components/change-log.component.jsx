import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import Navigation from './navigation.component';
import ScreenReaderFocusElm from './screen-reader-focus-elm.component';
import { TITLE, UI_IDS } from '../configuration';

const ChangeLogItem = ({ item }) => (
  <li>
    <h2 className="h4">{item.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: item.htmlContent }} />
  </li>
);

ChangeLogItem.propTypes = {
  item: PropTypes.shape({
    ID: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    htmlContent: PropTypes.string.isRequired,
  }),
};

const ChangeLog = ({ changeLog, loadedChangeLog }) => {
  let contents = (<p>Loading...</p>);
  let pageTitle = `Loading... Change Log for ${TITLE}`;

  if (loadedChangeLog) {
    pageTitle = `Change Log for ${TITLE}`;
    contents = (
      <ul>
        {changeLog.map(item => <ChangeLogItem item={item} key={item.ID} />)}
      </ul>
    );
  }

  return (
    <section className="container-fluid">
      <DocumentTitle title={pageTitle} />
      <Navigation view={'detail'} />
      <ScreenReaderFocusElm elmId={UI_IDS.changeLog}>
        {contents}
      </ScreenReaderFocusElm>
    </section>
  );
};

ChangeLog.propTypes = {
  changeLog: PropTypes.arrayOf(ChangeLogItem.propTypes.item).isRequired,
  loadedChangeLog: PropTypes.bool.isRequired,
};

export default ChangeLog;
