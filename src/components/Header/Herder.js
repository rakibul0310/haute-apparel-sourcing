import React, { useRef } from "react";
import Link from "next/link";
import useClickOutside from "@/hooks/clickOutside";

const Header = ({
  showDrop1,
  setShowDrop1,
  showNav,
  setShowNav,
  setShowDrop2,
  showDrop2,
  setShowDrop3,
  showDrop3,
}) => {
  const handleNav = () => {
    setShowNav(!showNav);
    setShowDrop1(false);
    setShowDrop2(false);
    setShowDrop3(false);
  };
  const dropElementRef = useRef(null);
  const dropScholaerElementRef = useRef(null);
  const dropUniElementRef = useRef(null);

  useClickOutside(dropElementRef, () => {
    setShowDrop1(false);
  });
  useClickOutside(dropScholaerElementRef, () => {
    setShowDrop2(false);
  });
  useClickOutside(dropUniElementRef, () => {
    setShowDrop3(false);
  });

  return (
    <>
      <nav
        className={`bg-white border-gray-200 fixed top-0 left-0 right-0 z-[5000] transition-all ease-in-out dela-[0.3s] shadow-lg`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto lg:p-4 px-2 py-4">
          <Link href="/" className="flex items-center">
            {/* <img
              src={logo}
              className="h-12 md:h-16 w-full mr-3 rounded-full"
              alt="Logo"
            /> */}
            <div className="flex flex-col justify-center items-start">
              <span className="font-medium">Haute</span>
              <span className="self-center text-lg md:text-2xl font-bold whitespace-nowrap text-[#002147]">
                Apparel Sourcing
              </span>
            </div>
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-dropdown"
            aria-expanded="false"
            onClick={handleNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              showNav ? "h-auto opacity-100 absolute" : "h-0 opacity-0 hidden"
            } w-2/3 lg:block lg:h-auto lg:w-auto lg:opacity-100 transition-all duration-300 top-12 right-0 z-10`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-0 md:p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white">
              <li
                className="ani-nav-link mb-4 lg:mb-0"
                onClick={() => {
                  setShowNav(false);
                }}
              >
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 hover:text-[#57C3A6] bg-transparent md:p-0 "
                  aria-current="page"
                >
                  HOME
                </Link>
              </li>
              <li
                className="ani-nav-link mb-4 lg:mb-0"
                onClick={() => {
                  setShowNav(false);
                }}
              >
                <Link
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-gray-900 hover:text-[#57C3A6] bg-transparent md:p-0 "
                  aria-current="page"
                >
                  ABOUT US
                </Link>
              </li>
              {/* drop down Overview  */}
              <li className="ani-nav-drop mb-4 lg:mb-0" ref={dropUniElementRef}>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#57C3A6] md:p-0 md:w-auto "
                  onClick={() => setShowDrop3(!showDrop3)}
                >
                  OUR PRODUCTS
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                  {/* <!-- Dropdown menu --> */}
                  <div
                    id="dropdownNavbar"
                    className={`z-10 ${
                      showDrop3 ? "h-auto opacity-100" : "h-0 opacity-0 hidden"
                    } transition-all duration-300 delay-500 w-[210px] absolute top-[30px] font-normal bg-gray-100 shadow-md divide-y divide-gray-100 rounded-lg`}
                  >
                    <ul
                      className="py-2 text-sm text-gray-700"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li onClick={() => setShowNav(false)}>
                        <Link
                          href="/products/uniforms"
                          className="block text-[1rem] font-semibold text-gray-800 hover:text-[#57C3A6] capitalize px-4 text-start py-2 hover:bg-gray-300 "
                        >
                          UNIFORM
                        </Link>
                      </li>
                      <li onClick={() => setShowNav(false)}>
                        <Link
                          href="/products/mens"
                          className="block text-[1rem] font-semibold text-gray-800 hover:text-[#57C3A6] px-4 text-start py-2 capitalize hover:bg-gray-300 "
                        >
                          {"MEN'S"}
                        </Link>
                      </li>
                      <li onClick={() => setShowNav(false)}>
                        <Link
                          href="/products/womens"
                          className="block text-[1rem] font-semibold text-gray-800 hover:text-[#57C3A6] px-4 text-start py-2 capitalize hover:bg-gray-300"
                        >
                          {"WOMEN'S"}
                        </Link>
                      </li>
                      <li onClick={() => setShowNav(false)}>
                        <Link
                          href="/products/others"
                          className="block text-[1rem] font-semibold text-gray-800 hover:text-[#57C3A6] px-4 text-start py-2 capitalize hover:bg-gray-300"
                        >
                          {"OTHER"}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </button>
              </li>
              <li
                className="ani-nav-link mb-4 lg:mb-0"
                onClick={() => setShowNav(false)}
              >
                <Link
                  href="/services"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#57C3A6] md:p-0 "
                >
                  OUR SERVICES
                </Link>
              </li>
              <li
                className="ani-nav-link mb-4 lg:mb-0"
                onClick={() => setShowNav(false)}
              >
                <Link
                  href="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#57C3A6] md:p-0 "
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
