import { useGSAP } from "@gsap/react";
import { Menu, Send, Smile, X } from "lucide-react";
import { memo, useRef } from "react";
import MainButton from "../../common/MainButton";
import ChatMessage from "../ChatMessage";
import gsap from "gsap";

interface ChatBoxProps {
  className?: string;
  isShowing: boolean;
  onToggleHideClose?: () => void;
}

const ChatBox = ({
  className,
  isShowing,
  onToggleHideClose: onCloseChatBox,
}: ChatBoxProps) => {
  const isFirstRender = useRef(true);

  useGSAP(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isShowing) {
      gsap.to("#chat-box", { x: 0, duration: 0.5 });
    } else {
      gsap.to("#chat-box", { x: "200%", duration: 0.5 });
    }
  }, [isShowing]);

  return (
    <div className={`absolute top-2 left-2 right-2 bottom-2 flex justify-end`}>
      <div
        id="chat-box"
        className={`bg-white rounded-common w-full lg:w-[40%] h-full lg:p-4 p-2 flex flex-col lg:gap-3 gap-2 translate-x-full ${className}`}
      >
        <div className="flex lg:p-2 p-1 items-center justify-between">
          <span className="font-KelsonBold lg:text-lg text-md">Chat</span>
          <MainButton
            className="!bg-backgroundDark rounded-common lg:p-2 !p-1"
            onClick={onCloseChatBox}
          >
            <X className="text-paleBlack lg:size-[20px] size-[18px]" />
          </MainButton>
        </div>
        <div className="flex flex-col-reverse gap-2 overflow-y-auto grow-1 rounded-common">
          <ChatMessage
            isMe={true}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          />
          <ChatMessage isMe={false} content={"Good to hear that"} />
          <ChatMessage isMe={true} content={"Me too"} />
          <ChatMessage isMe={false} content={"What about you?"} />
          <ChatMessage isMe={true} content={"I'm fine"} />
          <ChatMessage isMe={false} content={"How are you?"} />
          <ChatMessage isMe={true} content={"Hi"} />
          <ChatMessage isMe={false} content={"Hello"} />
        </div>
        <div className="flex gap-2 rounded-common bg-backgroundDark p-2">
          <MainButton className="rounded-full flex items-center justify-center !p-2">
            <Menu size={25} color="white" />
          </MainButton>
          <input
            type="text"
            className="w-full border-none font-KelsonRegular bg-transparent"
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
    </div>
  );
};

export default memo(ChatBox);
