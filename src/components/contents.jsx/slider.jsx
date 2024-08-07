import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Slider = () => {
  const [sliderImage, setSliderImage] = useState("/image/Slider.svg");

  const handleSliderRight = () => {
    setSliderImage("/image/Slider2.jpg");
  };

  const handleSliderLeft = () => {
    setSliderImage("/image/Slider3.jpg");
  };

  return (
    <div className="mx-auto mt-[100px] relative">
      <img
        id="SliderImage"
        src={sliderImage}
        alt=""
        className="object-fill m-auto w-[1216px] h-[600px]"
      />
      <div className="absolute top-[335px] left-[10px] w-[598px] h-[252px] bg-[#FFFFFF] rounded-lg">
        <div className="flex flex-col gap-4 p-10">
          <span className="text-white bg-[#4B6BFB] w-[97px] flex justify-center px-4 py-1 rounded-xl hover:bg-transparent">
            Technology
          </span>
          <h1 className="text-3xl font-semibold font-work-sans leading-10">
            Grid system for better
            <br />
            Design User Interface
          </h1>
          <p className="text-[#97989F] font-thin text-base font-work-sans leading-6">
            August 20, 2022
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-2 mt-2 mr-4">
        <button
          className="w-10 h-10 border border-black rounded-lg flex items-center justify-center"
          onClick={handleSliderRight}
        >
          <SlArrowRight />
        </button>
        <button
          className="w-10 h-10 border border-black rounded-lg flex items-center justify-center"
          onClick={handleSliderLeft}
        >
          <SlArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default Slider;
