import Link from "next/link";
import React from "react";
import { useMyContext } from "../provider/provider";
import Loader from "./loader";

const Cards = () => {
  const { searchValue, articles, count, setCount, isLoading } = useMyContext();

  const findArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <div>
            <Loader />
            <Loader />
            <Loader />
          </div>
        ) : (
          findArticles.map((article) => (
            <Link href={"/blog/" + article.id}>
              <div
                key={article.id}
                className=" bg-[#F2F2F2] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-110 h-[476px]"
              >
                <img
                  src={article.social_image}
                  alt={article.title}
                  className="w-[360px] h-60 object-contain rounded-xl border border-gray-200 mx-auto mt-2"
                />
                <button className="text-[#4B6BFB] text-sm mb-2 w-150 font-work-sans rounded-md   mt-8 bg-[#4B6BFB0D] border-2 ml-6 px-4 py-1">
                  {article.readable_publish_date}
                </button>
                <div className="px-4  mx-2 my-2 rounded-xl flex flex-col">
                  <h2 className="text-2xl font-semibold">{article.title}</h2>
                  <div className=" text-[#97989F] text-sm font-work-sans py-4"></div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      <div className="mx-auto mt-8 flex justify-center">
        <button
          onClick={() => setCount(count + 3)}
          className="bg-transparent border border-gray-300 text-gray-500 hover:bg-gray-300 hover:text-white py-2 px-4 rounded"
        >
          Load More
        </button>
      </div>
    </>
  );
};
export default Cards;
