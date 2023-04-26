import { css } from 'styled-components';

type mediaModel = any;

export const sizes = {
  xl: 1599,
  lg: 1199,
  md: 1023,
  sm: 767,
  xs: 479,
  xxs: 370,
  xxxs: 320,
};

export const media: mediaModel = Object.keys(sizes).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `;
    return accumulator;
  },
  {}
);
