import BlogPosts from "./favorite-slider";
import Slider from "./slider";
import TrendSection from "./trend-section";

const MainContents = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Slider />
      <TrendSection />
      <BlogPosts />
    </div>
  );
};
export default MainContents;
