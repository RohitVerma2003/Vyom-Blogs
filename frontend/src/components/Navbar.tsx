import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { LucideSearch } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimSearch = search.trim();

    if (trimSearch.length > 0) {
      navigate(`/search/${trimSearch}`);
    }
  };

  return (
    <div className="w-full h-16 border-b-1 border-gray-200 flex justify-between items-center p-4 px-8 sticky top-0 bg-white z-10">
      <div className="flex justify-center items-center gap-5">
        <div className="text-2xl">VyomBlog</div>
        <form
          className="flex justify-center items-center gap-3"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="bg-gray-100 rounded-full h-10 outline-none p-3 ml-10 font-light text-sm"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-gray-100 p-3 rounded-full cursor-pointer" type="submit">
            <LucideSearch size={15} className="text-gray-500" />
          </button>
        </form>
      </div>
      <div className="flex gap-4">
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
