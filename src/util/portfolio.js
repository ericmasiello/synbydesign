import { kebabCase } from 'lodash';
import type { Portfolio } from '../../types';

export default function getPortfolioId(portfolio: Portfolio): string {
  return kebabCase(portfolio.title);
}
