import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

const injectMiddleware = () => (store) => (next) => (action) =>
  next(typeof action === 'function' ? action({ store }) : action);

const createBaseMiddleware = () => {
  return [
    injectMiddleware(),
    promiseMiddleware({
      promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR'],
    }),
  ];
};

export default (isDebug) => {
  const middleware = createBaseMiddleware();

  if (isDebug) {
    middleware.push(createLogger({ collapsed: true, diff: true }));
  }

  return middleware;
};
