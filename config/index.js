/* @flow */
require('dotenv').config();

export const MORGAN_CONFIG: string = process.env.morgan || '';
export const PORT: number = parseInt(process.env.PORT, 10) || 3000;
export const SYN_BY_DESIGN_ROUTE: string = process.env.synbydesign_url || '';
