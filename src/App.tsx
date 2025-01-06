import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MeetingPage from "./pages/MeetingPage";
import LoginPage from "./pages/auth/LoginPage";
import OnboardingPage from "./pages/auth/OnboardingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/meeting" element={<MeetingPage />} />
    </Routes>
  );
}

export default App;
