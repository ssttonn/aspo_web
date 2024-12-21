import { Bell, Link, Menu, Search, User, UserPlus } from "lucide-react";
import React, {
  MouseEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import MainButton from "../common/MainButton";
import Popover from "../common/Popover";
import TotalMemberInfoBox from "./TotalMemberInfoBox";

const MeetingAppBar = () => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const handlePopoverVisibility = useCallback(async () => {
    // TODO: Implement copy to clipboard
    await navigator.clipboard.writeText("http://localhost:3000/meeting/1234");

    setIsPopoverVisible(!isPopoverVisible);

    setTimeout(() => {
      setIsPopoverVisible(false);
    }, 700);
  }, [isPopoverVisible]);

  const CircularButton = useCallback(
    (
      content: React.ReactNode,
      onPress: MouseEventHandler<HTMLButtonElement> | undefined
    ) => {
      return (
        <MainButton
          className="!bg-backgroundDark flex-row flex text-paleBlack rounded-full !p-2 aspect-square w-[40px] h-[40px] f-center"
          onClick={onPress}
        >
          {content}
        </MainButton>
      );
    },
    []
  );

  const ShareButton = useMemo(() => {
    return (
      <Popover
        isVisible={isPopoverVisible}
        duration={2000}
        className="mt-2 px-2 py-1 overflow-hidden rounded-common z-10 bg-primary text-white"
        popoverContent={<span className="font-KelsonRegular">Link copied</span>}
      >
        <MainButton
          className="flex h-[40px] f-center !bg-backgroundDark rounded-full"
          onClick={handlePopoverVisibility}
        >
          <Link size={20} className="text-paleBlack" />
          <span className="font-KelsonMedium text-sm ml-2 flex-1 text-paleBlack">
            Share link
          </span>
        </MainButton>
      </Popover>
    );
  }, [handlePopoverVisibility, isPopoverVisible]);

  const SearchButton = useMemo(() => {
    return CircularButton(
      <Search size={20} className="text-paleBlack" />,
      () => {}
    );
  }, [CircularButton]);

  const NotificationButton = useMemo(() => {
    return CircularButton(
      <Bell size={20} className="text-paleBlack" />,
      () => {}
    );
  }, [CircularButton]);

  const UtilityButton = useMemo(() => {
    return CircularButton(
      <Menu size={20} className="text-paleBlack" />,
      () => {}
    );
  }, [CircularButton]);

  const UserAvatar = useMemo(() => {
    return (
      <div className="flex items-center gap-2">
        <img
          src="https://plus.unsplash.com/premium_photo-1675791188810-3a01768c1e2f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="aspect-square rounded-full object-cover w-[40px]"
          alt="User avatar"
        />
      </div>
    );
  }, []);

  return (
    <div className="bg-white flex lg:flex-row flex-col justify-between items-center lg:p-4 p-2 gap-2">
      <div className="flex-1 f-center lg:justify-start gap-2">
        <span className="font-KelsonMedium text-xl lg:text-2xl lg:text-start text-center text-paleBlack">
          Weekly meeting - Remote Strategy Session
        </span>
      </div>
      <div className="flex bg-backgroundDark lg:px-4 px-2 lg:py-2 py-1 rounded-common lg:gap-4 gap-2">
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

      <div className="flex gap-2">
        {ShareButton}
        {SearchButton}
        {NotificationButton}
        {UtilityButton}
        <div className="w-[2px] bg-backgroundDark mx-2 my-1" />
        {UserAvatar}
      </div>
    </div>
  );
};

export default MeetingAppBar;
