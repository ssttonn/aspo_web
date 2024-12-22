import { CheckIcon } from "lucide-react";
import { memo, MouseEventHandler } from "react";
import MainButton from "../common/MainButton";

interface DiscussItemProps {
  className?: string;
  content?: string;
  isChecked?: boolean;
  index: number;
  onToggle?: (index: number) => void;
}

const DiscussItem = ({
  className,
  content,
  isChecked,
  onToggle,
}: DiscussItemProps) => {
  return (
    <MainButton
      onClick={onToggle}
      className={`flex items-center gap-2 bg-transparent p-2 rounded-common ${className}`}
    >
      <div
        className={`flex f-center border-2 rounded-common ${
          isChecked ? "border-primary" : "border-gray-200"
        } transition-all duration-300`}
      >
        <CheckIcon
          className={`${
            !isChecked ? "scale-0" : "scale-100 text-primary"
          } transition-all duration-500`}
        />
      </div>
      <span
        className={`font-KelsonBold ${
          isChecked ? "text-primary" : "text-paleBlack"
        } transition-all duration-00`}
      >
        {content}
      </span>
    </MainButton>
  );
};

export default memo(DiscussItem);
