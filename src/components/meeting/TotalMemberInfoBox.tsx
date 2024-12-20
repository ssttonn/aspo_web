import React from "react";

interface TotalMemberInfoBoxProps {
  className?: string;
  title: string;
  icon: React.ReactNode;
  total: number;
}

const TotalMemberInfoBox = ({
  className,
  icon,
  title,
  total,
}: TotalMemberInfoBoxProps) => {
  return (
    <div className={`flex items-center lg:gap-2 gap-1 ${className}`}>
      {icon}
      <span className="font-KelsonMedium text-paleBlack text-xs lg:text-sm">
        {title}
      </span>
      <div className="bg-white rounded-lg w-6 h-6 aspect-square flex f-center">
        <span className="font-KelsonMedium text-primary text-xs lg:text-sm">
          {total}
        </span>
      </div>
    </div>
  );
};

export default TotalMemberInfoBox;
