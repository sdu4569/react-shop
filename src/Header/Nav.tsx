import { useEffect } from "react";
import { Link } from "react-router-dom";
import DarkModeToggleButton from "./DarkModeToggleButton";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCart";

const Nav = () => {
  useEffect(() => {
    let userTheme = localStorage.getItem("theme");
    if (userTheme === null) {
      localStorage.setItem("theme", "light");
    }

    userTheme = localStorage.getItem("theme");
    if (userTheme === "light") {
      document.documentElement.setAttribute("data-theme", userTheme);
    } else if (userTheme === "dark") {
      document.documentElement.setAttribute("data-theme", userTheme);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
      <div className="flex w-full xl:container xl:m-auto">
        <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
          <Link
            to={"/"}
            className="text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap"
          >
            React Shop
          </Link>
        </h1>
        <div className="flex-none hidden md:flex md:flex-1 ml-2">
          <Link
            to={"/fashion"}
            className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
          >
            패션
          </Link>
          <Link
            to={"/accessory"}
            className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
          >
            액세서리
          </Link>
          <Link
            to={"/digital"}
            className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
          >
            디지털
          </Link>
        </div>
        <div className="flex items-center px-2">
          <DarkModeToggleButton />
          <SearchBar />
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Nav;
