const Carousel = ({ slides, currentIndex }) => {
  return (
    <div
      className="flex h-full transition-all duration-150 "
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {slides?.map((article) => (
        // <Link href={"/blog/" + article.id}>
        <>
          <img
            id="SliderImage"
            src={article.social_image}
            alt=""
            className="min-w-full h-full rounded-2xl border"
          />
          <div className="h-full">
            <div className=" absolute top-[300px] left-[50px] w-[598px] h-[252px] bg-[#FFFFFF] border rounded-2xl">
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
            </div>
          </div>
        </>
        // </Link>
      ))}
    </div>
  );
};

export default Carousel;

{
}
