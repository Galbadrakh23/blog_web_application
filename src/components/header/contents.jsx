import React from "react";
import { IoMdSearch } from "react-icons/io";

const Content = () => (
  <div className="flex items-center py-4">
    <div className="flex items-center px-4 sm:px-[350px]">
      <div className="flex gap-2 items-center pr-[118px]">
        <img width={36} src="/image/Logo.svg" alt="" />
        <p className="font-medium">
          Meta<strong>Blog</strong>
        </p>
      </div>
      <div id="menu" className="flex gap-4">
        <ul className="flex gap-10 text-[#696A75] font-normal text-base font-sans px-[225px]">
          {["Home", "Blog", "Contact"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="flex items-center">
          <input
            type="text"
            className="border px-1"
            placeholder="Search"
            style={{ width: "200px" }}
          />
          <IoMdSearch />
        </div>
      </div>
    </div>
  </div>
);
export default Content;
