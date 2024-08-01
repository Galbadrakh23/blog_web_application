import React from "react";
import { IoMdSearch } from "react-icons/io";

const Content = () => {
  return (
    <div className="flex flex-row justify-between w-full py-5 px-20">
      <h1>MetaBlog</h1>
      <ul className="flex flex-row gap-4 ">
        <li>Home</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div className="flex flex-row items-center">
        <input type="text" className="border px-1" placeholder="Search" />
        <IoMdSearch />
      </div>
    </div>
  );
};
export default Content;
