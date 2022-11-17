import React from "react";
import { string } from "yargs";

interface selectProps {
  options: any;
  defaultValue: any;
  value: any;
  onChange: (str: string) => void;
}

const MySelect = ({ options, defaultValue, value, onChange }: selectProps) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map(
        (option: {
          value: any;
          name:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
        }) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        )
      )}
    </select>
  );
};

export default MySelect;
