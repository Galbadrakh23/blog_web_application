import Link from "next/link";
import { useEffect, useState } from "react";

const Cards = () => {
  const [articles, setArticles] = useState([]);

  const getArticlesData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles/latest?pages=1&per_page=9"
    );
    const data = await response.json();
    setArticles(data);
  };

  useEffect(() => {
    getArticlesData();
  }, []);
  console.log("Articles Data", articles);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link href={"/blog/" + article.id}>
            <div
              key={article.id}
              className=" bg-[#F2F2F2] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <img
                src={article.cover_image}
                alt={article.title}
                className="w-[360px] h-60 object-cover rounded-xl border border-gray-200 mx-auto"
              />
              <div className="p-4 mx-2 my-2 rounded-xl flex flex-col">
                <button className="text-blue-500 text-sm mb-2 w-150 px-4 py-2 rounded-xl">
                  {article.category}
                </button>
                <h2 className="text-2xl font-semibold">{article.title}</h2>
                <div className="absolute text-[#97989F] text-sm font-work-sans">
                  {article.readable_publish_date}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Cards;
