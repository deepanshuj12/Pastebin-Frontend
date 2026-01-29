import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import WritePost from "./screens/WritePost";
import ViewPost from "./screens/ViewPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<WritePost />} />
        <Route path="/p/:id" element={<ViewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
