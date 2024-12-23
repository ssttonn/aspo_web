import {
  AudioLines,
  Disc,
  Mic,
  Pause,
  Power,
  Settings,
  Square,
  Video,
} from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
import MainButton from "../../common/MainButton";
import gsap from "gsap";

const CurrentParticipantOverlay = () => {
  const [isOverlayAppear, setIsOverlayAppear] = useState<boolean>(true);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOverlayAppear) {
      gsap.to(overlayRef.current, {
        duration: 0.5,
        opacity: 1,
        pointerEvents: "all",
      });
    } else {
      gsap.to(overlayRef.current, {
        duration: 0.5,
        opacity: 0,
        pointerEvents: "none",
      });
    }
  }, [isOverlayAppear]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        console.log("Overlay clicked");
        setIsOverlayAppear((prev) => !prev);
      }}
      className="absolute bottom-4 left-4 right-4 top-4"
    >
      <div
        ref={overlayRef}
        className="flex flex-col gap-2 justify-between size-full"
      >
        <div className="flex justify-between items-stretch">
          <div
            className="backdrop-blur-sm bg-black/20 rounded-common flex flex-row gap-2 px-2 py-2 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="w-6 h-6 rounded-full"
              alt="Avatar"
              src="https://plus.unsplash.com/premium_photo-1709311452215-496c6740ca59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <span className="font-KelsonRegular text-white">You</span>
          </div>
          <div
            className="flex backdrop-blur-sm gap-2 p-2 bg-black/20 rounded-common items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white aspect-square items-center justify-center flex rounded-full p-2">
              <div className="bg-red-400 rounded-full w-4 h-4" />
            </div>
            <span className="font-KelsonRegular text-white">
              Recording in progress...
            </span>
            <MainButton className="!bg-black/20 rounded-full !p-2">
              <Pause size={18} color="white" />
            </MainButton>
            <MainButton className="!bg-black/20 rounded-full !p-2">
              <Square size={18} color="white" />
            </MainButton>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 self-center">
            <MainButton className="backdrop-blur-sm !bg-black/20 rounded-full">
              <Mic size={24} color="white" />
            </MainButton>

            <MainButton className="backdrop-blur-sm !bg-black/20 rounded-full">
              <Video size={24} color="white" />
            </MainButton>
            <MainButton className="backdrop-blur-sm !bg-black/20 rounded-full">
              <Disc size={24} color="white" />
            </MainButton>
            <MainButton className="!bg-red-400 rounded-full">
              <Power size={24} color="white" />
            </MainButton>
          </div>
          <div
            className=" flex flex-row backdrop-blur-sm gap-2 p-2 bg-black/20 rounded-common"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="backdrop-blur-sm items-center justify-center flex px-6 py-1 rounded-common bg-white/20">
              <AudioLines size={40} color="white" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <span className="font-KelsonRegular text-gray-300">
                CC/Subtitles
              </span>
              <span className="font-KelsonRegular text-white">
                Hi Guys, thank you so much for coming - it's
              </span>
            </div>
            <MainButton className="bg-transparent backdrop-blur-sm">
              <Settings size={24} color="white" />
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CurrentParticipantOverlay);
