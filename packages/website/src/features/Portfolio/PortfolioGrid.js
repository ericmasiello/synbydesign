import React, { useMemo } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './PortfolioGrid.module.css';

export function PortfolioGrid(props) {
  const { as: Component, className, ...rest } = props;
  const classes = classNames(styles.grid, className);
  return <Component className={classes} {...rest} />;
}

PortfolioGrid.defaultProps = {
  as: 'ul',
};

PortfolioGrid.propTypes = {
  as: PropTypes.elementType,
};

export function PortfolioGridItem(props) {
  const { as: Component, className, column, row, ...rest } = props;
  const style = useMemo(
    () => ({
      '--item-column': column,
      '--item-row': row,
    }),
    [row, column]
  );
  const classes = classNames(styles.item, className);
  return <Component className={classes} style={style} {...rest} />;
}

PortfolioGridItem.defaultProps = {
  as: 'li',
};

PortfolioGridItem.propTypes = {
  as: PropTypes.elementType,
  column: PropTypes.string,
  row: PropTypes.string,
};

export function PortfolioGridLink(props) {
  const { as: Component, className, ...rest } = props;
  const classes = classNames(styles.link, className);
  return <Component className={classes} {...rest} />;
}

PortfolioGridLink.defaultProps = {
  as: Link,
};

PortfolioGridLink.propTypes = {
  as: PropTypes.elementType,
};

export function PortfolioGridImage(props) {
  const { as: Component, className, ...rest } = props;
  const classes = classNames(styles.image, className);
  return <Component className={classes} {...rest} />;
}

PortfolioGridImage.defaultProps = {
  as: 'div',
};

PortfolioGridImage.propTypes = {
  as: PropTypes.elementType,
};

export function PortfolioGridSVG(props) {
  const { as: Component, className, src, ...rest } = props;
  const classes = classNames(styles.svg, className);
  return <Component className={classes} {...rest} dangerouslySetInnerHTML={{ __html: src }} />;
}

PortfolioGridSVG.defaultProps = {
  as: 'div',
};

PortfolioGridSVG.propTypes = {
  as: PropTypes.elementType,
};
