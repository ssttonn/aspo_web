import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { X } from "lucide-react";
import { memo, useRef, useState } from "react";
import MainButton from "../../common/MainButton";
import DiscussItem from "../DiscussItem";

interface ThingsToDiscussBoxProps {
  className?: string;
  isShowing: boolean;
  onToggleHideClose?: () => void;
}

const ThingsToDiscussBox = ({
  className,
  isShowing,
  onToggleHideClose,
}: ThingsToDiscussBoxProps) => {
  const isFirstRender = useRef(true);

  const [discussItems, setDiscussItems] = useState([
    {
      id: 1,
      content: "Discuss project timeline",
      isChecked: true,
    },
    {
      id: 2,
      content: "Review budget allocation",
      isChecked: false,
    },
    {
      id: 3,
      content: "Plan next sprint tasks",
      isChecked: true,
    },
    {
      id: 4,
      content: "Address team concerns",
      isChecked: false,
    },
    {
      id: 5,
      content: "Evaluate project risks",
      isChecked: true,
    },
    {
      id: 6,
      content: "Discuss new feature requests",
      isChecked: false,
    },
    {
      id: 7,
      content: "Analyze user feedback",
      isChecked: true,
    },
    {
      id: 8,
      content: "Update project documentation",
      isChecked: false,
    },
    {
      id: 9,
      content: "Coordinate with marketing team",
      isChecked: true,
    },
    {
      id: 10,
      content: "Prepare for client presentation",
      isChecked: false,
    },
  ]);

  const onToggle = (index: number) => {
    setDiscussItems((prev) => {
      const newDiscussItems = [...prev];
      newDiscussItems[index] = {
        ...newDiscussItems[index],
        isChecked: !newDiscussItems[index].isChecked,
      };

      return newDiscussItems;
    });
  };

  useGSAP(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isShowing) {
      gsap.to("#things-to-discuss-box", { x: 0, duration: 0.5 });
    } else {
      gsap.to("#things-to-discuss-box", { x: "200%", duration: 0.5 });
    }
  }, [isShowing]);

  return (
    <div
      className={`absolute top-2 left-2 right-2 bottom-2 flex justify-end ${
        !isShowing && "pointer-events-none"
      }`}
    >
      <div
        id="things-to-discuss-box"
        className={`bg-white rounded-common w-full lg:w-[40%] h-full lg:p-4 p-2 flex flex-col lg:gap-3 gap-2 translate-x-full ${className}`}
      >
        <div className="flex lg:p-2 p-1 items-center justify-between">
          <span className="font-KelsonBold lg:text-lg text-md">
            Things to discuss
          </span>
          <MainButton
            className="!bg-backgroundDark rounded-common lg:p-2 !p-1"
            onClick={onToggleHideClose}
          >
            <X className="text-paleBlack lg:size-[20px] size-[18px]" />
          </MainButton>
        </div>
        <div className="flex flex-col flex-1 overflow-y-scroll rounded-common overflow-x-hidden">
          {discussItems.map((item, index) => (
            <DiscussItem
              key={item.id}
              index={index}
              content={item.content}
              isChecked={item.isChecked}
              onToggle={() => {
                onToggle(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ThingsToDiscussBox);
