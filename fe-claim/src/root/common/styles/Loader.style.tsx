import styled from 'styled-components';

export const Skeleton = styled.div`
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: skeleton-background-animate;
  animation-timing-function: linear;
  background: #e9ebed;
  background: linear-gradient(to right, #c2c2c3 5%, #d3d3d3 30%, #c2c2c3 75%);
  background-size: 800px 54px;
  margin: ${(props) => props.margin || 'auto'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
`;
