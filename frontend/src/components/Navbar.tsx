import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="w-full h-16 border-b-1 border-gray-200 flex justify-between items-center p-4 px-8 sticky top-0 bg-white z-10">
      <div className="flex justify-center items-center gap-5">
        <div className="text-2xl">VyomBlog</div>
        <input
          type="text"
          className="bg-gray-100 rounded-full h-10 outline-none p-3 ml-10 font-light text-sm"
          placeholder="Search"
        />
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
