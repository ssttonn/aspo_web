import React from "react";

interface MemberListProps {
  className?: string;
}

const MemberList = ({ className }: MemberListProps) => {
  return (
    <div className={`${className} bg-white rounded-common`}>MemberList</div>
  );
};

export default MemberList;
