import Cards from "./cards";

const HomePosts = () => {
  return (
    <div className="mx-auto w-[1216px] px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 font-work-sans">All Blog Post</h1>
      <div className="flex gap-4 mb-6">
        <div className="text-yellow-600 font-semibold hover:font-extrabold">
          All
        </div>
        {["Design", "Travel", "Fashion", "Technology", "Branding"].map(
          (category) => (
            <div key={category} className="text-gray-500 hover:font-bold">
              {category}
            </div>
          )
        )}
      </div>
      <Cards />
    </div>
  );
};

export default HomePosts;
