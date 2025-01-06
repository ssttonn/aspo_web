import React from "react";
import MainInput from "./MainInput";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PasswordVisibleButton from "./PasswordVisibleButton";

const PasswordInput = ({
  inputProps,
}: {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.from("#login-password-input", {
      opacity: 0,

      duration: 0.4,
    });

    gsap.to("#login-password-input", {
      type: isPasswordVisible ? "text" : "password",
      duration: 0.4,
      ease: "power4",
    });
  }, [isPasswordVisible]);

  return (
    <MainInput
      id="login-password"
      inputProps={{
        placeholder: "Password",
        id: "login-password-input",
        ...inputProps,
      }}
      suffix={
        <PasswordVisibleButton
          isPasswordVisible={isPasswordVisible}
          setIsPasswordVisible={setIsPasswordVisible}
        />
      }
    />
  );
};

export default PasswordInput;
