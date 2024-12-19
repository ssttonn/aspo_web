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
    <div className={`flex items-center gap-2 ${className}`}>
      {icon}
      <span className="font-KelsonMedium text-paleBlack text-sm">{title}</span>
      <div className="bg-white rounded-sm w-6 aspect-square flex f-center">
        <span className="font-KelsonMedium text-primary text-sm">{total}</span>
      </div>
    </div>
  );
};

export default TotalMemberInfoBox;
