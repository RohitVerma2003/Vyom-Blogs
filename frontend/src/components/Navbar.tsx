import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { LucideSearch } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState<string>("");
  const [recent, setRecent] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimSearch = search.trim();

    if (trimSearch.length > 0) {
      const newData = recent.filter((item) => item !== trimSearch);
      newData.unshift(trimSearch);
      localStorage.setItem("recent_searches", JSON.stringify(newData));

      navigate(`/search/${trimSearch}`);
    }
  };

  useEffect(() => {
    const recent_searches = localStorage.getItem("recent_searches");
    const data: string[] = recent_searches ? JSON.parse(recent_searches) : [];
    setRecent(data);
  }, []);

  return (
    <div className="w-full h-16 border-b-1 border-gray-200 flex justify-between items-center p-4 px-8 sticky top-0 bg-white z-10">
      <div className="flex justify-center items-center gap-5">
        <Link to={"/"} className="text-2xl">VyomBlog</Link>
        <form
          className="flex justify-center items-center gap-3 hidden md:flex"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="bg-gray-100 rounded-full h-10 outline-none p-3 ml-10 font-light text-sm"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-gray-100 p-3 rounded-full cursor-pointer"
            type="submit"
          >
            <LucideSearch size={15} className="text-gray-500" />
          </button>
        </form>
      </div>
      <div className="flex gap-4">
        <Link to={"/search"} className="bg-gray-100 p-2 rounded-full cursor-pointer md:hidden inline-block">
          <LucideSearch size={18} className="text-gray-500" />
        </Link>
        <SignedOut>
          <div className="border-1 rounded-full px-3 py-1 cursor-pointer">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
