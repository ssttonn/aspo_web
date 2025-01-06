import React, { useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MainButton from "../MainButton";
import { EyeIcon, EyeOff } from "lucide-react";

interface PasswordVisibleButtonProps {
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordVisibleButton = ({
  isPasswordVisible,
  setIsPasswordVisible,
}: PasswordVisibleButtonProps) => {
  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.from("#eye-btn", {
      opacity: 0,
      duration: 0.4,
    });
  }, [isPasswordVisible]);

  return (
    <MainButton
      id="eye-btn"
      className="top-0 bottom-0 -translate-y-1/2 absolute bg-transparent p-0 right-2"
      onClick={useCallback(() => {
        setIsPasswordVisible((isPasswordVisible) => !isPasswordVisible);
      }, [setIsPasswordVisible])}
    >
      {!isPasswordVisible ? (
        <EyeOff id="eye-hide-ic" color={`var(--color-accent)`} />
      ) : (
        <EyeIcon id="eye-show-ic" color={`var(--color-accent)`} />
      )}
    </MainButton>
  );
};

export default PasswordVisibleButton;
