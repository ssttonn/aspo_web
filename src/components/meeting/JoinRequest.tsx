import { Check, X } from "lucide-react";
import { memo, useRef } from "react";
import MainButton from "../MainButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface JoinRequestProps {
  shouldAppear: boolean;
  onAccept?: () => void;
  onDecline?: () => void;
}

const JoinRequest = ({
  onAccept,
  onDecline,
  shouldAppear,
}: JoinRequestProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!divRef.current) return;
    console.log(shouldAppear);
    if (shouldAppear) {
      gsap.fromTo(
        divRef.current,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "sine.in",
        }
      );
    } else {
      gsap.fromTo(
        divRef.current,
        {
          scale: 1,
          opacity: 1,
        },
        {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          ease: "sine.out",
        }
      );
    }
  }, [shouldAppear]);

  return (
    <div
      ref={divRef}
      className="flex flex-row items-center xl:gap-3 gap-2 bg-backgroundDark px-4 xl:px-6 xl:py-3 py-2 rounded-common"
    >
      <p className="font-KelsonBold">
        sstonn{" "}
        <span className="font-KelsonRegular">want to join a meeting</span>
      </p>
      <MainButton
        className="text-white bg-red-400 !p-2 !xl:p-3 !rounded-full"
        onClick={onDecline}
      >
        <X className="xl:size-12 size-8" />
      </MainButton>
      <MainButton
        className="text-white bg-black !p-2 !xl:p-3 !rounded-full"
        onClick={onAccept}
      >
        <Check className="xl:size-12 size-8" />
      </MainButton>
    </div>
  );
};

export default memo(JoinRequest);
