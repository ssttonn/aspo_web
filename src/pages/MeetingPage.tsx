import { ChevronRight } from "lucide-react";
import MainButton from "../components/MainButton";
import AppBar from "../components/meeting/AppBar";
import ParticipantCard from "../components/meeting/ParticipantCard";

const MettingPage = () => {
  return (
    <div className="flex flex-col absolute bottom-0 left-0 right-0 top-0 bg-background py-3 px-5 gap-2 xl:gap-3">
      <AppBar />
      <div className="grid flex-1 gap-2 grid-cols-10 grid-rows-10 bg-white rounded-[30px] p-2 xl:p-3">
        <ParticipantCard className="col-span-6 row-span-8 bg-gray-400 relative overflow-hidden" />
        <div className="relative bg-white col-span-4 row-span-10">
          <div className="absolute left-0 right-0 top-0 bottom-0 xl:gap-3 gap-2 bg-backgroundDark rounded-[30px]">
            <div className="h-[60%]">dsadsa</div>
          </div>
        </div>

        <div className="col-span-6 row-span-2 flex gap-2">
          <div className="flex rounded-[30px] col-span-6 row-span-2 items-stretch w-[100%] h-full gap-2 overflow-x-hidden">
            <ParticipantCard className="relative w-[22%] shrink-0" />
            <ParticipantCard className="relative w-[22%] shrink-0" />
            <ParticipantCard className="relative w-[22%] shrink-0" />
            <ParticipantCard className="relative w-[22%] shrink-0" />
            <ParticipantCard className="relative w-[22%] shrink-0" />
            <ParticipantCard className="relative w-[22%] shrink-0" />
            <ParticipantCard className="relative w-[22%] shrink-0" />
            <ParticipantCard className="relative w-[22%] shrink-0" />
            <ParticipantCard className="relative w-[22%] shrink-0" />
          </div>
          <MainButton className="!bg-black text-white rounded-[30px] flex items-center justify-center">
            <ChevronRight size={50} />
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default MettingPage;