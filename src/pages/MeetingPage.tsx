import {
  Hand,
  ListCheck,
  MessageCircle,
  Mic,
  Smile,
  Video,
} from "lucide-react";
import MainButton from "../components/common/MainButton";
import ChatBox from "../components/meeting/overlay/ChatBox";
import MeetingAppBar from "../components/meeting/MeetingAppBar";
import ParticipantVideoCard from "../components/meeting/ParticipantVideoCard";
import { useCallback, useState } from "react";
import ThingsToDiscussBox from "../components/meeting/overlay/ThingsToDiscussBox";

enum MeetingPageOverlay {
  none,
  chat,
  thingsToDiscuss,
}

const MettingPage = () => {
  const [overlay, setOverlay] = useState<MeetingPageOverlay>(
    MeetingPageOverlay.none
  );

  const toggleChatBox = useCallback(() => {
    setOverlay(
      overlay === MeetingPageOverlay.chat
        ? MeetingPageOverlay.none
        : MeetingPageOverlay.chat
    );
  }, [overlay]);

  const toggleThingsToDiscussBox = useCallback(() => {
    setOverlay(
      overlay === MeetingPageOverlay.thingsToDiscuss
        ? MeetingPageOverlay.none
        : MeetingPageOverlay.thingsToDiscuss
    );
  }, [overlay]);

  return (
    <div className="flex flex-col bg-background gap-2 xl:gap-3 w-screen h-screen overflow-hidden">
      <MeetingAppBar />
      <div className="flex flex-col items-center flex-1 lg:mx-4 mx-3 mb-2 gap-2 h-[80vh]">
        <div className="relative flex-1 lg:min-h-[175px] min-h-[125px] self-stretch">
          <ParticipantVideoCard className="w-full h-full lg:min-h-[175px] min-h-[125px]" />
          <ChatBox
            isShowing={overlay === MeetingPageOverlay.chat}
            onToggleHideClose={toggleChatBox}
          />
          <ThingsToDiscussBox
            isShowing={overlay === MeetingPageOverlay.thingsToDiscuss}
            onToggleHideClose={toggleThingsToDiscussBox}
          />
        </div>

        <div className="lg:w-full lg:h-[175px] h-[125px] bg-white rounded-common p-2 ">
          <div className="flex gap-2 flex-row overflow-x-auto rounded-common h-full">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
              <ParticipantVideoCard key={index} className="shrink-0" />
            ))}
          </div>
        </div>

        <div className="bg-white flex rounded-common p-2 lg:gap-2 gap-1 w-auto flex-wrap f-center">
          <MainButton className="rounded-full aspect-square f-center">
            <Mic size={25} className="text-white lg:size-[25px] size-[20px]" />
          </MainButton>
          <MainButton className="rounded-full aspect-square f-center">
            <Video className="text-white lg:size-[25px] size-[20px]" />
          </MainButton>
          <MainButton className="rounded-full !bg-backgroundDark aspect-square f-center">
            <Hand className="text-paleBlack lg:size-[25px] size-[20px]" />
          </MainButton>
          <MainButton className="rounded-full !bg-backgroundDark">
            <Smile className="text-paleBlack lg:size-[25px] size-[20px]" />
          </MainButton>
          <MainButton
            className="rounded-full !bg-backgroundDark"
            onClick={toggleChatBox}
          >
            <MessageCircle className="text-paleBlack lg:size-[25px] size-[20px]" />
          </MainButton>
          <MainButton
            className="rounded-full !bg-backgroundDark"
            onClick={toggleThingsToDiscussBox}
          >
            <ListCheck className="text-paleBlack lg:size-[25px] size-[20px]" />
          </MainButton>
          <MainButton
            className="rounded-full bg-red-500 text-white font-KelsonRegular text-sm lg:text-lg"
            title="End Meeting"
          />
        </div>
      </div>
    </div>
  );
};

export default MettingPage;
