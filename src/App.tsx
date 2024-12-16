import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MeetingPage from "./pages/MeetingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/meeting" element={<MeetingPage />} />
    </Routes>
  );
}

export default App;
