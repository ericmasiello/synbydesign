import logger from '../src/server/utils/logger';

// disable winston logging for tests
logger.transports.forEach(t => {
  t.silent = true;
});
