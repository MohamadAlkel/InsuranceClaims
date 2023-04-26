import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  label {
    font-weight: bold;
    display: block;
  }
  .react-datepicker-wrapper {
    width: auto;
    margin-bottom: 15px;

    input {
      height: 35px;
      box-sizing: border-box;
      width: 200px;
      border: 1px solid var(--black);
      border-radius: 4px;
      padding-left: 5px;
      display: block;
      margin-top: 3px;
    }
  }
`;

export interface PickerDateProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selected: Date;
  label?: string;
  id?: string;
}

const PickerDate: React.FunctionComponent<PickerDateProps> = ({
  label,
  selected,
  id,
  onChange,
}: PickerDateProps): React.ReactElement<void> => {
  return (
    <DatePickerWrapper>
      <label htmlFor={id}>{label}</label>
      <DatePicker id={id} selected={selected} onChange={onChange} />
    </DatePickerWrapper>
  );
};
export default PickerDate;
