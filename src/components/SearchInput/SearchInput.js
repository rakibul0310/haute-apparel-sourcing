import React from "react";

const SearchInput = ({ cls, setCurrentProducts, currentProducts }) => {
  const handleChange = (e) => {
    setCurrentProducts([]);
    setTimeout(() => {
      const filteredProducts = currentProducts?.map(
        (c) => c?.toLowerCase() === e.target.value?.toLowerCase()
      );
      filteredProducts?.length > 0
        ? setCurrentProducts(filteredProducts)
        : setCurrentProducts(currentProducts);
    }, 1500);
  };
  return (
    <>
      <form className={`${cls}`}>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div class="relative">
          <input
            onChange={(e) => handleChange(e)}
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:border-gray-400 ring-0 outline-none shadow-md"
            placeholder="Search Products..."
          />
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchInput;
