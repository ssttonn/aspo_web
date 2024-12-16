import { ChevronLeft } from "lucide-react";
import MainButton from "../MainButton";
import JoinRequest from "./JoinRequest";

interface AppBarProps {
  onBackClick?: () => void;
}

const AppBar = ({ onBackClick }: AppBarProps) => {
  return (
    <div className="bg-white flex rounded-full p-2 xl:p-3 items-center gap-2 xl:gap-3">
      <MainButton
        className="!bg-backgroundDark rounded-full"
        onClick={onBackClick}
      >
        <ChevronLeft className="w-6 h-6 xl:w-10 xl:h-10" />
      </MainButton>
      <div className="flex flex-col flex-1">
        <h1 className="font-KelsonBold text-md xl:text-xl">
          Global meeting room
        </h1>
        <p className="font-KelsonRegular text-sm xl:text-md">
          Global meeting room
        </p>
      </div>
      <JoinRequest shouldAppear={false} />
    </div>
  );
};

export default AppBar;
