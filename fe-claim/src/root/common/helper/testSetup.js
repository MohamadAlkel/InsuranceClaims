const React = require('react');
const jsdom = require('jsdom');
const ignoreStyles = require('ignore-styles');
ignoreStyles.default([
  ...ignoreStyles.DEFAULT_EXTENSIONS,
  '.eot',
  '.woff',
  '.woff2',
  '.ttf',
  '.ico',
]);

global.isRunningTest = true;
global.React = React;
const { JSDOM } = jsdom;
const { document } = new JSDOM('<!doctype html><html><body></body></html>')
  .window;
global.window = document.defaultView;
global.navigator = global.window.navigator;
global.window.matchMedia =
  window.matchMedia ||
  (() => {
    return { matches: false, addListener: () => {}, removeListener: () => {} };
  });
global.window.location = {};
global.window.devicePixelRatio = 1;
global.window.localStorage = global.localStorage;
