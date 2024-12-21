import React, { memo } from "react";

interface ParticipantVideoCardProps {
  className?: string;
}

const ParticipantVideoCard = ({ className }: ParticipantVideoCardProps) => {
  return (
    <div
      className={`bg-paleBlack rounded-common overflow-hidden f-center ${className}`}
    >
      <img
        src="https://plus.unsplash.com/premium_photo-1661764544522-0201c653f272?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="participant"
        className="h-[100%] w-[100%] aspect-video object-scale-down"
      />
    </div>
  );
};

export default memo(ParticipantVideoCard);
