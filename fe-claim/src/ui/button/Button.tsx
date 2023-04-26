import * as React from 'react';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  button {
    width: 200px;
    color: var(--white);
    border: none;
    border-radius: 3px;
    margin-top: 20px;
    height: 40px;
    background-color: var(--secondary-color);
    cursor: pointer;
  }
`;

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  text: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  type,
  text,
}: ButtonProps): React.ReactElement<void> => {
  return (
    <ButtonWrapper className="text-box-container">
      <button type={type}>{text}</button>
    </ButtonWrapper>
  );
};
export default Button;
