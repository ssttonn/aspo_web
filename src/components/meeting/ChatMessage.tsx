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
        className={`flex flex-col gap-2 p-2 xl:p-3 rounded-common max-w-[70%] ${
          isMe ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        <p className="font-KelsonRegular">{content}</p>
        <p className="font-KelsonRegular text-sm xl:text-md">12:00 PM</p>
      </div>
      {!isMe && <div className="flex-1" />}
    </div>
  );
};

export default ChatMessage;
