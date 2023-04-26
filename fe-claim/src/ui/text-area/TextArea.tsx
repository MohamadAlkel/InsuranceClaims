import * as React from 'react';
import styled from 'styled-components';

export const TextAreaWrapper = styled.div`
  label {
    font-weight: bold;
  }
  textarea {
    height: 100px;
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

export interface TextAreaProps {
  autoComplete?: 'on' | 'off';
  disabled?: boolean;
  focus?: boolean;
  id?: string;
  min?: number;
  max?: number;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  value: string | number;
  label?: string;
}

const TextArea: React.FunctionComponent<TextAreaProps> = (
  props: TextAreaProps
): React.ReactElement<void> => {
  return (
    <TextAreaWrapper className="text-area-container">
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        id={props.id}
        name={props.name}
        className="input-text-area"
        required={props.required}
        minLength={props.min}
        maxLength={props.max}
        onChange={props.onChange}
        value={String(props.value)}
        placeholder={props.placeholder}
        autoFocus={props.focus}
        autoComplete={props.autoComplete}
        readOnly={props.readOnly}
        disabled={props.disabled}
      />
    </TextAreaWrapper>
  );
};
export default TextArea;
