import React from "react";
import Link from "next/link";

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

const Content = () => (
  <div className="flex items-center py-4">
    <div className="flex items-center px-4 sm:px-[350px] mx-auto">
      <div className="flex gap-2 items-center pr-[118px]">
        <img width={36} src="/image/Logo.svg" alt="" />
        <p className="font-medium">
          Meta<strong>Blog</strong>
        </p>
      </div>
      <div id="menu" className="flex gap-4 items-center">
        <ul className="flex gap-10 text-[#696A75] font-normal text-base font-sans px-[225px]">
          {menuList.map((menu) => (
            <Link href={menu.link}>{menu.label}</Link>
          ))}
        </ul>
        <div>
          <div class="relative">
            <input
              class="appearance-none border-2 pl-2 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 text-gray-800 leading-tight focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Search..."
            />
            <div class="absolute right-0 inset-y-0 flex items-center pr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-2 text-gray-400 hover:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Content;
