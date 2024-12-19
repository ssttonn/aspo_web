import { useNavigate } from "react-router";
import MainButton from "../components/common/MainButton";

const HomePage = () => {
  const navigator = useNavigate();

  return (
    <div className="bg-background w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-2 bg-white rounded-3xl p-4">
        <h1 className="font-KelsonBold">Welcome to Aspo</h1>
        <p className="font-KelsonRegular">
          Join a call with your friends and family
        </p>
        <MainButton
          title="Join a call now"
          onClick={() => {
            console.log("Join a call now");
            navigator("/meeting");
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
