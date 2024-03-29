import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [state, setState] = useState(false);
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Search Scholarships", path: "#" },
    { title: "Public Programs", path: "#" },
    { title: "Events Gallery", path: "#" },
    { title: "About Us", path: "#" },
    { title: "Contact", path: "/contact" },
  ];
  const { bg } = useSelector((state) => state.mode);

  return (
    <header>
      <nav className="items-center  px-4 mx-auto max-w-screen-2xl sm:px-8 md:flex md:space-x-6">
        <div className="flex justify-between">
          <a href="/">
            <img src="/assets/logo.png" width={100} alt="scholar-finder-logo" className="invert" />
          </a>
          <button
            className="text-white outline-none md:hidden"
            onClick={() => setState(!state)}
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${
            state ? "" : "hidden"
          }`}
        >
          <li className="order-2 pb-5 md:pb-0  text-[16px] tracking-[1px]">
            <a
              href="/signin"
              className={`py-4 px-6 rounded-md shadow-md text-white text-center  ${bg} focus:shadow-none block md:inline hover:opacity-70 transition-all duration-150 `}
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="py-2 px-4 rounded-md shadow-md text-white text-center focus:shadow-none block md:inline hover:opacity-70 transition-all duration-150"
            >
              Sign up
            </a>
          </li>
          <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0 text-[16px] tracking-[1px]">
            {navigation.map((item, idx) => (
              <li className="text-white hover:text-opacity-70 " key={idx}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
