import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogPage from "./pages/BlogPage";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="max-w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<BlogPage />} />
      </Routes>
    </div>
  );
};

export default App;
