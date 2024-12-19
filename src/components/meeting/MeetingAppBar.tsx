import { Link, User, UserPlus } from "lucide-react";
import MainButton from "../common/MainButton";
import TotalMemberInfoBox from "./TotalMemberInfoBox";
import Popover from "../common/Popover";

const MeetingAppBar = () => {
  return (
    <div className="bg-white flex justify-between p-2">
      <div className="flex bg-backgroundDark px-4 py-2 rounded-common gap-4">
        <TotalMemberInfoBox
          icon={<User size={20} color="#212121" />}
          title="Total members"
          total={20}
        />
        <TotalMemberInfoBox
          icon={<UserPlus size={20} color="#212121" />}
          title="Total participants"
          total={4}
        />
      </div>
      <div className="flex-1 f-center">
        <span className="font-KelsonBold text-xl">
          Weekly meeting - Remote Strategy Session
        </span>
      </div>
      <Popover
        isVisible
        className="mt-2 px-2 py-1 overflow-hidden rounded-common z-10 bg-primary text-white"
        popoverContent={<span className="font-KelsonRegular">Link copied</span>}
      >
        <MainButton className="!bg-backgroundDark flex-row flex text-paleBlack rounded-full !p-2 items-center">
          <Link size={20} className="text-paleBlack" />
          <span className="font-KelsonMedium text-sm ml-2 flex-1 text-paleBlack">
            Share link
          </span>
        </MainButton>
      </Popover>
    </div>
  );
};

export default MeetingAppBar;
