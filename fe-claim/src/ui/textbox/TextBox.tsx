import * as React from 'react';
import styled from 'styled-components';

export const TextBoxWrapper = styled.div`
  label {
    font-weight: bold;
  }
  input {
    height: 35px;
    box-sizing: border-box;
    width: 200px;
    border: 1px solid var(--black);
    border-radius: 4px;
    padding-left: 5px;
    display: block;
    margin-top: 3px;
    margin-bottom: 15px;
  }
`;

export interface TextBoxProps {
  autoComplete?: 'on' | 'off';
  disabled?: boolean;
  focus?: boolean;
  id?: string;
  min?: number;
  max?: number;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  reference?: React.RefObject<HTMLInputElement>;
  required?: boolean;
  type?: string;
  value: string | number;
  pattern?: string;
  label?: string;
}

const TextBox: React.FunctionComponent<TextBoxProps> = (
  props: TextBoxProps
): React.ReactElement<void> => {
  return (
    <TextBoxWrapper className="text-box-container">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        name={props.name}
        className="input-text-box"
        pattern={props.pattern}
        type={props.type ? props.type : 'text'}
        required={props.required}
        minLength={props.min}
        maxLength={props.max}
        value={String(props.value)}
        onChange={props.onChange}
        onFocus={props.onFocus}
        placeholder={props.placeholder}
        autoFocus={props.focus}
        autoComplete={props.autoComplete}
        readOnly={props.readOnly}
        disabled={props.disabled}
        ref={props.reference}
      />
    </TextBoxWrapper>
  );
};
export default TextBox;
