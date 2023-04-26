import * as React from 'react';
import { render } from 'react-dom';
import App from './root/App';
import './favicon.ico';
import './index.scss';

declare const window: any;

render(
  <App initialState={window.__PRELOADED_STATE__} />,
  document.getElementById('claim') as HTMLElement
);
