import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} to="/signup" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
