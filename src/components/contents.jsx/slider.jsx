import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "react-toastify/dist/ReactToastify.css";
import Carousel from "./carousel";
import { useEffect, useState } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [articles, setArticles] = useState([]);

  const getArticlesData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles/?pages=1&per_page=10"
    );
    const data = await response.json();
    setArticles(data);
  };

  console.log("====>", articles);

  useEffect(() => {
    getArticlesData();
  }, []);

  return (
    <section className="">
      <div className="w-[1200px] h-[600px] rounded-xl mt-[25px] p-2 overflow-hidden">
        <Carousel slides={articles} currentIndex={currentIndex} />
      </div>
      <div className="flex flex-row-reverse gap-2 mt-2 mr-4">
        <button
          onClick={() => {
            console.log("Click", currentIndex);
            setCurrentIndex(
              articles?.length <= currentIndex ? currentIndex : currentIndex + 1
            );
          }}
          className="w-10 h-10 border border-black rounded-lg flex items-center justify-center"
        >
          <SlArrowRight />
        </button>
        <span>
          {currentIndex}={articles?.length}
        </span>
        <button
          onClick={() => {
            console.log("Click", currentIndex);
            setCurrentIndex(
              0 === currentIndex ? currentIndex : currentIndex - 1
            );
          }}
          className="w-10 h-10 border border-black rounded-lg flex items-center justify-center"
        >
          <SlArrowLeft />
        </button>
      </div>
    </section>
  );
};

export default Slider;
