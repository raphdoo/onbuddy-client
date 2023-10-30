import React, { InputHTMLAttributes } from "react";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="form-checkbox text-blue-500"
        {...props}
      />
      <span className="text-gray-700">{props.children}</span>
    </label>
  );
};

export default Checkbox;
