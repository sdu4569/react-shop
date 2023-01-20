import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductsDetail } from "../Body/ItemCard";
import { useShoppingCart } from "../context/ShoppingCartContext";

const SearchBar = () => {
  const [filteredData, setFilteredData] = useState<ProductsDetail[]>([]);
  const [wordEntered, setWordEntered] = useState<string>("");
  const { items } = useShoppingCart();

  const handleFilter = (event: { target: { value: any } }) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = items.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord.length == 0) {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const handleClose = () => {
    setWordEntered("");
    setFilteredData([]);
  };

  return (
    <div className="dropdown">
      <button
        type="button"
        className="flex sm:hidden w-10 sm:w-auto mx-0 px-0 sm:mx-2 sm:px-2 btn btn-ghost"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-gray-700 dark:stroke-white"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
      <input
        type="text"
        placeholder="검색"
        value={wordEntered}
        onChange={handleFilter}
        className="fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput"
      />
      <ul className="!fixed left-0 sm:!absolute sm:top-14  menu-[flex-direction: row] dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto bg-white dark:bg-gray-600 ">
        {filteredData.length !== 0 &&
          filteredData.map((item, idx) => {
            return (
              <li
                key={idx}
                className="btn-ghost rounded-lg"
                onClick={handleClose}
              >
                <Link to={`/product/${item.id}`} className="text-left">
                  <span className="text-gray-600 dark:text-white line-clamp-2 p-1">
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SearchBar;
