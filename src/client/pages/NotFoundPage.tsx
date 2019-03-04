import * as React from 'react';
import styled from 'styled-components';
import Meta from '../components/Meta';
import Header from '../components/Header';
import Logo from '../components/Logo';
import NotFound from '../components/NotFound';
import { PAGE, pageBorderWidth } from '../styles/vars';
import { pxToRem } from '../styles/utils';

interface Props {
  className?: string;
  staticContext?: {
    notFound?: boolean;
  };
}

export const NotFoundPage: React.SFC<Props> = ({
  className,
  staticContext = {},
}) => {
  staticContext.notFound = true;
  return (
    <div className={className}>
      <Meta />
      <Header>
        <Logo tag="h1" aria-label="Syn By Design: Eric Masiello's Portfolio" />
      </Header>
      <NotFound />
    </div>
  );
};

NotFoundPage.displayName = 'NotFoundPage';

const StyledNotFoundPage = styled(NotFoundPage)`
  min-height: calc(
    100vh - ${pxToRem(PAGE.bottomPadding)} - ${pageBorderWidth} -
      ${pageBorderWidth}
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${Header} {
    margin-top: 0;
  }
`;

export default {
  component: StyledNotFoundPage,
};
