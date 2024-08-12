const SearchInput = ({ handleChange }) => {
  return (
    <div>
      <div class="relative">
        <input
          class="appearance-none border-2 pl-2 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 text-gray-800 leading-tight focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Search..."
          onChange={handleChange}
        />
        <div class="absolute right-0 inset-y-0 flex items-center pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-2 text-gray-400 hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default SearchInput;
