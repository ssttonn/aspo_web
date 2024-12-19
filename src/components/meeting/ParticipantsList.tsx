import { ChevronDown } from "lucide-react";
import { useCallback, useMemo, useRef } from "react";
import MainButton from "../common/MainButton";
import ParticipantCard from "./ParticipantCard";

interface ParticipantsListProps {
  className?: string;
}

const ParticipantsList = ({ className }: ParticipantsListProps) => {
  const participantListRef = useRef<HTMLDivElement>(null);

  const onLoadMore = useCallback(() => {
    if (participantListRef.current) {
      participantListRef.current.scrollTo({
        top: participantListRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  const data = useMemo<number[]>(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);

  return (
    <div className={`${className} flex flex-col gap-2 overflow-hidden px-4`}>
      <div
        ref={participantListRef}
        className="md:flex md:flex-col h-full rounded-common items-stretch gap-2 overflow-y-auto"
      >
        {data.map((_, index) => (
          <ParticipantCard key={index} className="relativex h-[27%] shrink-0" />
        ))}
      </div>
      {participantListRef.current &&
        participantListRef.current.scrollHeight >
          participantListRef.current.clientHeight && (
          <MainButton
            className="bg-white text-white border-2 border-primary rounded-common flex items-center justify-center !p-0 mx-4 mb-3"
            onClick={onLoadMore}
          >
            <ChevronDown size={50} color="#212121" />
          </MainButton>
        )}
    </div>
  );
};

export default ParticipantsList;
