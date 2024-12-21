import { MessageSquare } from "lucide-react";

interface MemberListProps {
  className?: string;
}

const MemberList = ({ className }: MemberListProps) => {
  return (
    <div className={`${className} bg-white rounded-common lg:p-3 p-2`}>
      <MessageSquare size={25} className="bg-primary" color="white" />
    </div>
  );
};

export default MemberList;
