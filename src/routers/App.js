import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CommentPage from "../pages/CommentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comment/:id_comment" element={<CommentPage />} />
        <Route path="*" element="page not found" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
