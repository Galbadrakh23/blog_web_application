import React from "react";

const menuList = [
  {
    label: "Load More",
    link: "/#Bloglist",
  },
];

const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
      imageUrl: "./image/1.jpeg",
    },
    {
      id: 2,
      category: "Design",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
      imageUrl: "./image/2.jpeg",
    },
    {
      id: 3,
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
      imageUrl: "./image/3.jpeg",
    },
    {
      id: 1,
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
      imageUrl: "./image/1.jpeg",
    },
    {
      id: 2,
      category: "Design",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
      imageUrl: "./image/2.jpeg",
    },
    {
      id: 3,
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
      imageUrl: "./image/3.jpeg",
    },
    {
      id: 1,
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
      imageUrl: "./image/1.jpeg",
    },
    {
      id: 2,
      category: "Design",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
      imageUrl: "./image/2.jpeg",
    },
    {
      id: 3,
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
      imageUrl: "./image/3.jpeg",
    },
  ];

  return (
    <div className="mx-auto w-[1216px] px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 font-work-sans">All Blog Post</h1>
      <div className="flex gap-4 mb-6">
        <div className="text-yellow-600 font-semibold hover:font-extrabold">
          All
        </div>
        <div className="text-gray-500 hover:font-bold">Design</div>
        <div className="text-gray-500 hover:font-bold ">Travel</div>
        <div className="text-gray-500 hover:font-bold">Fashion</div>
        <div className="text-gray-500 hover:font-bold">Technology</div>
        <div className="text-gray-500 hover:font-bold">Branding</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-[392px] h-[476px] bg-[#FFFFFF] rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-[360px] h-60 object-cover rounded-lg border border-black mx-auto"
            />
            <div className="p-4 mx-2 my-2 rounded-xl">
              <button className="text-blue-500 text-sm mb-2 w-150 px-4 py-2 rounded-xl">
                {post.category}
              </button>
              <h2 className="text-2xl font-semibold mb-2 w-[344px] h-[84px]">
                {post.title}
              </h2>
              <div className="text-[#97989F] text-sm font-work-sans mt-5">
                {post.date}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-transparent border border-gray-300 text-gray-500 hover:bg-gray-300 hover:text-white py-2 px-4 rounded">
          {menuList.map((menu) => (
            <a href={menu.link}>{menu.label}</a>
          ))}
        </button>
      </div>
    </div>
  );
};

export default BlogPosts;
