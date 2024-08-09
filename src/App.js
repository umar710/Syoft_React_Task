import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default App;
