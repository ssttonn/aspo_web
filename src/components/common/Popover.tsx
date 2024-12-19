import React, { memo } from "react";

interface PopoverProps {
  className?: string;
  children?: React.ReactNode;
  popoverContent: React.ReactNode;
  isVisible: boolean;
}

const Popover = ({
  children,
  className,
  popoverContent,
  isVisible,
}: PopoverProps) => {
  return (
    <div>
      {" "}
      <div className="relative"></div>
      {children}
      <div className={`absolute $${className}`}>{popoverContent}</div>
    </div>
  );
};

export default memo(Popover);
