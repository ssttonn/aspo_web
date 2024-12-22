interface ChatMessageProps {
  className?: string;
  isMe: boolean;
  content: string;
}

const ChatMessage = ({ className, isMe, content }: ChatMessageProps) => {
  return (
    <div className={`flex ${className}`}>
      {isMe && <div className="flex-1" />}
      <div
        className={`flex flex-col gap-2 p-3 xl:p-4 rounded-common max-w-[70%] ${
          isMe ? "bg-primary text-white" : "bg-gray-200"
        }`}
      >
        <div className="flex justify-between lg:gap-3 gap-2 items-center">
          <span className="font-KelsonBold text-md">sstonn</span>
          <span className="font-KelsonRegular text-sm">12:00 PM</span>
        </div>
        <p className="font-KelsonRegular text-md">{content}</p>
      </div>
      {!isMe && <div className="flex-1" />}
    </div>
  );
};

export default ChatMessage;
