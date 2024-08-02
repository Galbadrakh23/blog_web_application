import React from "react";

const TrendSection = () => {
  const articles = [
    {
      title: "Something in the Way",
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
      <h2 className="text-2xl font-bold mb-6 font-work-sans leading-7">
        Trending
      </h2>
      <div className="mx-auto w-[1216px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((article, index) => (
            <div key={index} className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-[289px] h-[320px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex items-end">
                <div className="text-left p-4">
                  <span className="bg-[#4B6BFB] text-white px-4 py-2 rounded-lg hover:bg-transparent">
                    Technology
                  </span>
                  <h3 className="mt-2 ml-1 text-white text-lg font-thin">
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
