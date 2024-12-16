interface ParticipantCardProps {
  className?: string;
}

const ParticipantCard = ({ className }: ParticipantCardProps) => {
  return (
    <div className={`relative rounded-[35px] overflow-hidden ${className}`}>
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Image 1"
        src="https://plus.unsplash.com/premium_photo-1709311452215-496c6740ca59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default ParticipantCard;
