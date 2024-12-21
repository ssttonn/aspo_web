import { X } from "lucide-react";
import { memo } from "react";
import MainButton from "../common/MainButton";
import ChatMessage from "./ChatMessage";

interface ChatBoxProps {
  className?: string;
}

const ChatBox = ({ className }: ChatBoxProps) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-end">
      <div className="bg-white rounded-common lg:w-[40%] h-full lg:p-4 p-2">
        <div className="flex lg:p-2 p-1 items-center justify-between">
          <span className="font-KelsonBold lg:text-lg text-sm">Chat</span>
          <MainButton className="!bg-backgroundDark rounded-common lg:p-2 p-1">
            <X className="text-paleBlack lg:size-[20px] size-[20px]" />
          </MainButton>
        </div>
        <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
          <ChatMessage isMe={false} content={"Hello"} />
          <ChatMessage isMe={true} content={"Hi"} />
          <ChatMessage isMe={false} content={"How are you?"} />
          <ChatMessage isMe={true} content={"I'm fine"} />
          <ChatMessage isMe={false} content={"What about you?"} />
          <ChatMessage isMe={true} content={"Me too"} />
        </div>
        <div className="flex items-center mt-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-common p-2"
            placeholder="Type a message..."
          />
          <MainButton className="ml-2 !bg-backgroundDark rounded-common p-2">
            Send
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default memo(ChatBox);
