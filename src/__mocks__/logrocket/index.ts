const LogRocket = jest.genMockFromModule('logrocket');

// @ts-ignore
LogRocket.reduxMiddleware = () => store => next => action => {
  next(action);
};

module.exports = LogRocket;
