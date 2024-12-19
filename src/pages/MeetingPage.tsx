import MeetingAppBar from "../components/meeting/MeetingAppBar";
import ChatBox from "../components/meeting/ChatBox";
import ParticipantCard from "../components/meeting/ParticipantCard";
import ParticipantsList from "../components/meeting/ParticipantsList";

const MettingPage = () => {
  return (
    <div className="flex flex-col absolute bottom-0 left-0 right-0 top-0 bg-background py-3 px-5 gap-2 xl:gap-3 w-screen h-screen">
      <MeetingAppBar />
      <div className="flex h-[85vh] bg-white rounded-common gap-2 p-2 overflow-x-auto">
        <ParticipantCard className="flex-[75%]" isHost />
        <ParticipantsList className="flex-[15%] overflow-y-auto" />
        <ChatBox />
      </div>
    </div>
  );
};

export default MettingPage;
