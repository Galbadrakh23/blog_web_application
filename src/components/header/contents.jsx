import React, { useContext } from "react";
import Link from "next/link";
import SearchInput from "./search-input";
import { SearchContext } from "../provider/search-provider";
const menuList = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Blog",
    link: "/blog",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];
const Content = () => {
  const { setSearchValue } = useContext(SearchContext);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="flex items-center py-4">
      <div className="flex items-center px-4 mx-auto">
        <div className="flex gap-2 items-center pr-[118px]">
          <img width={36} src="/image/Logo.svg" alt="" />
          <ul className="font-medium">
            Meta<strong>Blog</strong>
          </ul>
        </div>
        <div id="menu" className="flex gap-4 items-center">
          <ul className="flex gap-10 text-[#696A75] font-normal text-base font-sans px-[225px]">
            {menuList.map((menu) => (
              <Link href={menu.link}>{menu.label}</Link>
            ))}
          </ul>
        </div>
        <SearchInput handleChange={handleChange} />
      </div>
    </div>
  );
};
export default Content;
