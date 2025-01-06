import MainInput from "../../components/common/inputs/MainInput";
import { Mail } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="flex lg:flex-row flex-col size-screen items-stretch p-4">
      <div className="flex flex-col flex-1  items-center self-center w-full lg:order-0 order-1">
        <div className="w-[50%] items-center flex flex-col lg:gap-4 gap-2">
          <h1 className="font-KelsonBold lg:text-3xl text-xl text-primary">
            Welcome back
          </h1>
          <span className="font-KelsonLight">
            Enter your email and password to login
          </span>
          <MainInput
            id="login-email"
            inputProps={{
              placeholder: "Email",
              type: "email",
            }}
            prefix={<Mail className="" />}
          />
        </div>
      </div>
      <div className="flex-1 flex lg:order-1 order-0 w-full h-[200px]">
        <img
          src="https://blog.megannielsen.com/wp-content/uploads/2019/01/2019-workroom-tour-29.jpg"
          className="object-cover h-full w-full rounded-common"
        />
      </div>
    </div>
  );
};

export default LoginPage;
