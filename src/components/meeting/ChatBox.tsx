import { useGSAP } from "@gsap/react";
import { ChevronRight, Menu, MessageCircle, Send, Smile } from "lucide-react";
import { memo, useCallback, useRef, useState } from "react";
import MainButton from "../common/MainButton";
import ChatMessage from "./ChatMessage";
import gsap from "gsap";

interface ChatBoxProps {
  className?: string;
}

const ChatBox = ({ className }: ChatBoxProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const onOpenClose = useCallback(() => setIsVisible((prev) => !prev), []);

  useGSAP(() => {
    if (isVisible) {
      gsap.to(chatBoxRef.current, {
        flex: "20%",
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(chatBoxRef.current, {
        flex: "0%",
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={chatBoxRef}
      className={`relative bg-white ${className} rounded-common overflow-hidden`}
    >
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-backgroundDark flex flex-col">
        <div className="bg-white border-t-2 border-l-2 border-r-2 rounded-t-common border-backgroundDark">
          <MainButton
            className="bg-transparent pt-2 pl-2 pb-1"
            onClick={onOpenClose}
          >
            <ChevronRight size={30} color="#212121" />
          </MainButton>
        </div>
        <div className="h-full overflow-y-auto p-2 xl:p-3 gap-2 flex flex-col rounded-common pb-10">
          <ChatMessage
            isMe
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <ChatMessage
            isMe={false}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <ChatMessage
            isMe={false}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <ChatMessage
            isMe={false}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <ChatMessage
            isMe={false}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <ChatMessage
            isMe={false}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
        <div className="bg-white bottom-0 left-0 right-0 flex px-4 py-2 gap-2 rounded-common mb-2 mx-2">
          <MainButton className="rounded-full flex items-center justify-center !p-2">
            <Menu size={25} color="white" />
          </MainButton>
          <input
            type="text"
            className="w-full border-none font-KelsonRegular"
            placeholder="Type a message"
          />
          <MainButton className="bg-transparent rounded-full flex items-center justify-center !p-2">
            <Smile size={25} color="#212121" />
          </MainButton>
          <MainButton className="rounded-full flex items-center justify-center !p-2">
            <Send size={25} color="white" />
          </MainButton>
        </div>
      </div>
      <div
        className={`absolute flex flex-col left-0 right-0 top-0 bottom-0 z-100 bg-white ${
          isVisible ? "opacity-0 pointer-events-none" : "opacity-1"
        } transition-all duration-500`}
      >
        <MainButton
          className="bg-transparent self-center"
          onClick={onOpenClose}
        >
          <MessageCircle size={25} />
        </MainButton>
      </div>
    </div>
  );
};

export default memo(ChatBox);
