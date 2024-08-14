import Link from "next/link";
import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Slider = () => {
  const [articles, setArticles] = useState([]);

  const notify = () => toast.error("Not found new article!");

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
    <section>
      <div className="mx-auto mt-[100px] relative ">
        {articles.map((article) => (
          <Link href={"/blog/" + article.id}>
            <div className="w-[1216px] h-[600px] border border-orange-500 rounded-xl">
              <img
                id="SliderImage"
                src={article.social_image}
                alt=""
                className="object-contain mx-auto rounded-3xl border border-orange-500"
              />
            </div>
          </Link>
        ))}
        <div className="absolute top-[335px] left-[10px] w-[598px] h-[252px] bg-[#FFFFFF] rounded-2xl">
          {articles.map((article) => (
            <Link href={"/blog/" + article.id}>
              <div className="flex flex-col gap-4 p-10">
                <span className="text-white bg-[#4B6BFB] w-[97px] flex justify-center px-4 py-1 rounded-xl hover:bg-transparent">
                  {article.id}
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
        <div className="flex flex-row-reverse gap-2 mt-2 mr-4">
          <button className="w-10 h-10 border border-black rounded-lg flex items-center justify-center">
            <SlArrowRight onClick={notify} />
          </button>
          <button className="w-10 h-10 border border-black rounded-lg flex items-center justify-center">
            <SlArrowLeft onClick={notify} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
