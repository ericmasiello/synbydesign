import * as React from 'react';
import styled from 'styled-components';
import HeaderContent from './HeaderContent';

export interface Props extends React.HTMLProps<HTMLElement> {
  className?: string;
  stick?: boolean;
  setRef?: (elm: HTMLElement) => void;
}

export class Header extends React.Component<Props> {
  static displayName = 'Header';

  render() {
    const { className, stick, setRef, children, ...rest } = this.props;
    return (
      <header className={className} {...rest} ref={setRef}>
        <HeaderContent>{children}</HeaderContent>
      </header>
    );
  }
}

export default styled(Header)`
  position: relative;
  background-color: rgba(255, 255, 255, 0.9);
  top: 0;
  z-index: 2000;
  ${props =>
    props.stick
      ? `
    position: sticky;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  `
      : ''};
`;
