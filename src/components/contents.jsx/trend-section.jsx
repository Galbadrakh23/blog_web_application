import React, { useEffect, useState } from "react";

const TrendSection = () => {
  const [articles, setArticles] = useState([]);

  const getArticlesData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles?pages=1&per_page=4"
    );
    const data = await response.json();
    setArticles(data);
  };

  useEffect(() => {
    getArticlesData();
  }, []);

  console.log("Articles Data", articles);
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 font-work-sans leading-7">
        Trending
      </h2>
      <div className="mx-auto w-[1216px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {articles.map((article, index) => (
            <div
              key={index}
              className="relative rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-110
              h-80
              "
            >
              <img
                src={article.cover_image}
                alt={article.title}
                className="h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex items-end">
                <div className="text-left p-4 flex flex-col items-start gap-4">
                  <span className="bg-[#FFFFFF] text-[#4B6BFB] px-4 py-2 rounded-lg hover:bg-transparent">
                    {article.tags}
                  </span>
                  <h3 className="p-2 mt-2 ml-1 text-[#FFFFFF] text-lg font-work-sans font-semibold h-20 backdrop-blur-sm	rounded-xl">
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
