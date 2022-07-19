import React from "react";
import "./Button.scss";

interface IButtonProps {
  label: string;
  type: "primary" | "secondary";
}

export const Button = ({ label, type, ...rest }: IButtonProps) => {
  return (
    <button className={`btn ${type}`} {...rest}>
      {label}
    </button>
  );
};
