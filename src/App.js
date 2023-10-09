import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import JobItems from "./components/JobItems";

import HomePart from "./components/HomePart";
// import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<HomePart />} />
      <Route path="/jobs" element={<JobItems />} />
    </Routes>
  </BrowserRouter>
);

export default App;
