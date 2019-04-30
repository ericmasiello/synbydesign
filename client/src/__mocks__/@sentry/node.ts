const Sentry = jest.genMockFromModule('@sentry/node');

// @ts-ignore
Sentry.init = () => {};

// @ts-ignore
Sentry.captureException = () => {};

// @ts-ignore
Sentry.captureMessage = () => {};

// @ts-ignore
Sentry.Handlers = {};

// @ts-ignore
Sentry.Handlers.requestHandler = () => () => {};

// @ts-ignore
Sentry.Handlers.errorHandler = () => () => {};

module.exports = Sentry;
