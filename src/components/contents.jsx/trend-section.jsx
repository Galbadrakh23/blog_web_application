import React from "react";

const TrendSection = () => {
  const articles = [
    {
      title: "Album 1",
      image: "./image/1.jpeg",
    },
    {
      title: "Album 2",
      image: "./image/2.jpeg",
    },
    {
      title: "Album 3",
      image: "./image/3.jpeg",
    },
    {
      title: "Album 4",
      image: "./image/4.jpeg",
    },
  ];
  3;
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6">Trending</h2>
      <div className="mx-auto w-[1216px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((article, index) => (
            <div key={index} className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded">
                    Technology
                  </span>
                  <h3 className="mt-2 text-white text-lg font-semibold">
                    {article.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendSection;
