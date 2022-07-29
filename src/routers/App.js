import HomePage from "../pages/HomePage";
import ProfilesPage from "../pages/ProfilesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CreatePosting from "../pages/CreatePosting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profiles" element={<ProfilesPage />} />
        <Route path="/create/post" element={<CreatePosting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
