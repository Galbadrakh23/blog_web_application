import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "react-toastify/dist/ReactToastify.css";
import Carousel from "./carousel";
import { useState } from "react";

const Slider = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="flex flex-col w-3/3 h-[600px] rounded-xl mt-[25px] py-8 pb-10 overflow-hidden border">
      <Carousel slides={articles} currentIndex={currentIndex} />
      <div className="flex flex-row-reverse gap-2 mt-2 mr-4">
        <button
          onClick={() => {
            setCurrentIndex(currentIndex - 1);
            console.log("Click");
          }}
          className="w-10 h-10 border border-black rounded-lg flex items-center justify-center"
        >
          <SlArrowRight />
        </button>
        <button
          onClick={() => {
            setCurrentIndex(currentIndex + 1);
            console.log("Click");
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
