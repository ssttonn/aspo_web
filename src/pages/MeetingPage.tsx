import MeetingAppBar from "../components/meeting/MeetingAppBar";
import MemberList from "../components/meeting/MemberList";
import ParticipantVideoCard from "../components/meeting/ParticipantVideoCard";

const MettingPage = () => {
  return (
    <div className="flex flex-col bg-background gap-2 xl:gap-3 w-screen h-screen">
      <MeetingAppBar />
      <div className="flex-1 flex lg:flex-row flex-col lg:mx-4 mx-3 mb-2 gap-2">
        <div className="flex lg:flex-col flex-row flex-[2] gap-2">
          <ParticipantVideoCard className="flex-[3]" />
          <div className="flex lg:flex-[1] gap-2 lg:flex-row flex-col overflow-x-auto">
            {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
              <ParticipantVideoCard key={index} className="shrink-0" />
            ))}
          </div>
        </div>
        <MemberList className="flex-[1]" />
      </div>
      {/* <div className="flex h-[85vh] bg-white rounded-common gap-2 p-2 overflow-x-auto">
        <ParticipantCard className="flex-[75%]" isHost />
        <ParticipantsList className="flex-[15%] overflow-y-auto" />
        <ChatBox />
      </div> */}
    </div>
  );
};

export default MettingPage;
