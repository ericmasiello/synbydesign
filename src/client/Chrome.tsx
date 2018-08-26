import * as React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import * as tinyColor from 'tinycolor2';
import base from './styles/base';
import { PAGE, COLORS, pageBorderWidth } from './styles/vars';
import { pxToRem } from './styles/utils';

injectGlobal`
  ${base}
`;

interface Props
  extends React.HTMLProps<HTMLDivElement>,
    RouteComponentProps<any> {
  portfolio?: Portfolio;
}

const Chrome: React.SFC<Props> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

function mapStateToProps(state: AppState, props: Props) {
  const match = /\/portfolio\/(\S+)/g.exec(props.location.pathname);
  if (match) {
    // tslint:disable-next-line no-unused-variable
    const [ignore, id] = match;
    return {
      ...props,
      portfolio: state.portfolioItems.find(item => item.id === id),
    };
  }

  return props;
}

export default styled(connect(mapStateToProps)(Chrome))`
  ${({ portfolio }) => {
    let color = tinyColor(COLORS.highlight)
      .setAlpha(0.8)
      .toRgbString();
    if (portfolio && portfolio.meta && portfolio.meta.highlightColor) {
      color = portfolio.meta.highlightColor;
    }
    return `border: ${pageBorderWidth} solid ${color};`;
  }};
  padding-bottom: ${pxToRem(PAGE.bottomPadding)};
  min-height: 100vh;
  transition: border-color 1s;
`;
