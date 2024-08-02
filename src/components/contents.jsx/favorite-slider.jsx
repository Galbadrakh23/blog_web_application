import React from "react";

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
      id: 4,
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
      imageUrl: "image4.jpg",
    },
    {
      id: 5,
      category: "Software",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
      imageUrl: "image5.jpg",
    },
    {
      id: 6,
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
      imageUrl: "image6.jpg",
    },
    {
      id: 7,
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
      imageUrl: "image7.jpg",
    },
    {
      id: 8,
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
      imageUrl: "image8.jpg",
    },
    {
      id: 9,
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
      imageUrl: "image8.jpg",
    },
  ];

  return (
    <div className="mx-auto w-[1216px] px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Blog Post</h1>
      <div className="flex gap-4 mb-6">
        <div className="text-yellow-600">All</div>
        <div className="text-gray-500">Design</div>
        <div className="text-gray-500">Travel</div>
        <div className="text-gray-500">Fashion</div>
        <div className="text-gray-500">Technology</div>
        <div className="text-gray-500">Branding</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <button className="text-blue-500 text-sm mb-2 w-150 px-4 py-2 rounded-lg bg-blue-100">
                {post.category}
              </button>
              <h2 className="text-lg font-semibold mb-2 w-150 truncate">
                {post.title}
              </h2>
              <div className="text-gray-500 text-sm">{post.date}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-transparent border border-gray-300 text-gray-500 hover:bg-gray-300 hover:text-white py-2 px-4 rounded">
          Load More
        </button>
      </div>
    </div>
  );
};

export default BlogPosts;
