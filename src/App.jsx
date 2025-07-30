import SignUpForm from "./SignUpForm";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />

      </Routes>
    </Router>
  );
}


