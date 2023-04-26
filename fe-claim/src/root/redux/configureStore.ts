import appReducer from './reducer';
import createAllMiddleware from './middlewares';
import { applyMiddleware, compose, createStore } from 'redux';

const isDebug = () => {
  const isDevelopment = process.env.NODE_ENV !== 'production';
  try {
    return (
      process.env.IS_BROWSER &&
      (isDevelopment || localStorage.getItem('redux-debug'))
    );
  } catch (e) {
    return false;
  }
};

export default function configureStore({ initialState }) {
  const middleware = createAllMiddleware(isDebug());

  const appliedMiddleware = applyMiddleware(...middleware);
  const createReduxStore =
    isDebug() && global.devToolsExtension
      ? compose(appliedMiddleware, global.devToolsExtension())
      : appliedMiddleware;

  const store = createReduxStore(createStore)(appReducer, initialState);

  if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
    // Enable Webpack hot module replacement for reducers.
    (module as any).hot.accept('./reducer', () => {
      const nextAppReducer = require('./reducer');
      store.replaceReducer(nextAppReducer);
    });
  }

  return store;
}
