import { BellDot, MessageSquareDot, Search } from "lucide-react";
import React from "react";
interface NavbarProps {
  children: React.ReactNode;
}
const Nav = ({ children }: NavbarProps) => {
  return (
    <div className=" bg-white shadow-md p-4 flex items-center justify-between w-screen">
      <div className="flex gap-4">
        {children}
        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Search"
          />
          <button className="btn btn-ghost join-item rounded-r-full">
            <Search />
          </button>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="btn btn-ghost">
          <MessageSquareDot />
        </button>
        <button className="btn btn-ghost">
          <BellDot />
        </button>
      </div>
    </div>
  );
};

export default Nav;
