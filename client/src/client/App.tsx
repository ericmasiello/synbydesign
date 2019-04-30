import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { renderRoutes, RouteConfig } from 'react-router-config';
import Chrome from './Chrome';

interface Props extends RouteComponentProps<any> {
  route: {
    routes: RouteConfig[];
  };
  portfolio?: Portfolio;
}

const App: React.SFC<Props> = ({ route, portfolio, ...rest }) => {
  return (
    <Chrome portfolio={portfolio} {...rest}>
      {renderRoutes(route.routes)}
    </Chrome>
  );
};

export default {
  component: App,
};
