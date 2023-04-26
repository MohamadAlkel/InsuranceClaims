import * as React from 'react';
import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  label {
    font-weight: bold;
  }
  select {
    height: 35px;
    box-sizing: border-box;
    width: 200px;
    border: 1px solid #000;
    border-radius: 4px;
    padding-left: 5px;
    display: block;
    margin-top: 3px;
    margin-bottom: 15px;
  }
`;

export interface DropdownProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<string>;
  value: string;
  label?: string;
  testId?: string;
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({
  name,
  options,
  value,
  label,
  onChange,
  testId,
}: DropdownProps): React.ReactElement<void> => {
  return (
    <DropdownWrapper className="text-box-container">
      {label && <label htmlFor="my-Dropdown">{label}</label>}
      <select
        data-testid={testId}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </DropdownWrapper>
  );
};
export default Dropdown;
