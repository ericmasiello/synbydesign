/* @flow */
export type RootState = {
  portfolio: string[],
};


export type AppProps = {
  portfolio: string[],
  children: any, //FIXME: should be a React node
};
