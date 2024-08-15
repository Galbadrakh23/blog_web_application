import React, { useEffect, useState } from "react";
import Link from "next/link";

const Carousel = ({ currentIndex }) => {
  const [articles, setArticles] = useState([]);
  const getArticlesData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles/?pages=1&per_page=1"
    );
    const data = await response.json();
    setArticles(data);
  };

  useEffect(() => {
    getArticlesData();
  }, []);

  return (
    <div
      className="flex w-3/3 h-full transition-all duration-150"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {articles.map((article) => (
        <Link href={"/blog/" + article.id}>
          <div className="min-w-full h-full">
            <img
              id="SliderImage"
              src={article.social_image}
              alt=""
              className="object-contain mx-auto rounded-3xl border border-blue-500"
            />
            <div className=" absolute top-[320px] left-[50px] w-[598px] h-[252px] bg-[#FFFFFF] border rounded-2xl">
              {articles.map((article) => (
                <Link href={"/blog/" + article.id}>
                  <div className="flex flex-col gap-4 p-10">
                    <span className="text-white bg-[#4B6BFB] w-[97px] flex justify-center px-4 py-1 rounded-xl hover:bg-transparent">
                      {article.readable_publish_date}
                    </span>
                    <h1 className="text-3xl font-semibold font-work-sans leading-10">
                      {article.title}
                      <br />
                    </h1>
                    <p className="text-[#97989F] font-thin text-base font-work-sans leading-6">
                      {article.published_at}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Carousel;
