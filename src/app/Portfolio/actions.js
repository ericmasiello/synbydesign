/* @flow */
export const LOAD_PORTFOLIO: string = 'LOAD_PORTFOLIO';

export default function loadPortfolio() {
  return {
    type: LOAD_PORTFOLIO,
  };
}
