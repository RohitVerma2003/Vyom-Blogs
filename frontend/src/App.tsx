import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogPage from "./pages/BlogPage";
import Home from "./pages/Home";
import Author from "./pages/Author";
import BlogByTag from "./pages/BlogByTag";
import Search from "./pages/Search";
import RecentSearch from "./pages/RecentSearch";

const App = () => {
  return (
    <div className="max-w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<BlogPage />} />
        <Route path="/authors/:id" element={<Author />} />
        <Route path="/tags/:slug" element={<BlogByTag />} />
        <Route path="/search/:slug" element={<Search/>}/>
        <Route path="/search" element={<RecentSearch/>}/>
      </Routes>
    </div>
  );
};

export default App;
