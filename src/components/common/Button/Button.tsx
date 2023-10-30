import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return <button {...rest}>{label}</button>;
};

export default Button;
