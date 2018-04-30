export const CACHE_PREFIX = 'syn-cache-v';

export const composeCacheName = (version: number) =>
  `${CACHE_PREFIX}${version}`;
