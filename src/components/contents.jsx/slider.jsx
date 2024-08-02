import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Slider = () => {
  return (
    <div>
      <div className="mx-auto mt-[100px] w-[1216px] h-[651px] border border-gray-300 relative">
        <img
          src="/image/Slider.svg"
          alt=""
          className="object-contain mx-auto"
        />
        <div className="absolute top-[335px] left-[10px] w-[598px] h-[252px] bg-[#FFFFFF] rounded-lg">
          <div className="flex flex-col gap-4 p-10">
            <p className="text-[#696A75] font-normal text-base font-sans">
              Technology
            </p>
            <h1 className="text-3xl font-semibold font-sans">
              Grid system for better <br />
              Design User Interface
            </h1>
            <p className="text-[#696A75] font-thin text-base font-sans">
              August 20, 2022
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-2 mt-2 mr-4">
          <button className="w-10 h-10 border border-black rounded-lg flex items-center justify-center">
            <SlArrowRight />
          </button>
          <button className="w-10 h-10 border border-black rounded-lg flex items-center justify-center">
            <SlArrowLeft />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Slider;
