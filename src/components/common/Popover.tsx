import React, { memo } from "react";

interface PopoverProps {
  className?: string;
  children?: React.ReactNode;
  popoverContent: React.ReactNode;
  isVisible: boolean;
  duration?: number;
}

const Popover = ({
  children,
  className,
  popoverContent,
  isVisible,
  duration,
}: PopoverProps) => {
  if (duration) {
    setTimeout(() => {
      isVisible = false;
    }, duration);
  }

  return (
    <div>
      {" "}
      <div className="relative"></div>
      {children}
      <div
        className={`absolute $${className} ${
          isVisible ? "opacity-1" : "opacity-0"
        } transition-opacity duration-300`}
      >
        {popoverContent}
      </div>
    </div>
  );
};

export default memo(Popover);
