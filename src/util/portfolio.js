/* @flow */
import { kebabCase } from 'lodash';
import type { Syn$Portfolio } from '../../types';

export default function getPortfolioId(portfolio: Syn$Portfolio): string {
  return kebabCase(portfolio.title);
}
