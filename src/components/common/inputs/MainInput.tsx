import React from "react";
import useToggleOnFocus from "../../../hooks/useToggleOnFocus";

interface MainInputProps {
  id: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  className?: string;
}

const MainInput = ({
  id,
  inputProps,
  suffix,
  prefix,
  className,
}: MainInputProps) => {
  const { isFocused, eventHandlers } = useToggleOnFocus();

  return (
    <div
      id={id}
      className={`bg-transparent rounded-common flex items-center w-full border-2 p-2 lg:p-4 gap-2 ${
        className || ""
      } transition-all duration-200 ${isFocused ? "border-primary" : ""}`}
    >
      {prefix && <div>{prefix}</div>}
      <input
        id={inputProps.id}
        className={`grow-1 shrink-1 ${inputProps.className}`}
        {...inputProps}
        {...eventHandlers}
      />
      {suffix && <div>{suffix}</div>}
    </div>
  );
};

export default MainInput;
