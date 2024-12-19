import CurrentParticipantOverlay from "./overlay/CurrentParticipantOverlay";

interface ParticipantCardProps {
  className?: string;
  isHost?: boolean;
}

const ParticipantCard = ({ className, isHost }: ParticipantCardProps) => {
  return (
    <div
      className={`relative bg-primary rounded-common overflow-hidden ${className} flex`}
    >
      <img
        className="object-scale-down self-center"
        alt="Image 1"
        src="https://plus.unsplash.com/premium_photo-1709311452215-496c6740ca59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {isHost && <CurrentParticipantOverlay />}
    </div>
  );
};

export default ParticipantCard;
