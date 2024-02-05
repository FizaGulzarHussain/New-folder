import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const SignUp = () => {
  const fadeDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  const { bg } = useSelector((state) => state.mode);

  return (
    <>
      <div className="bg_color fixed inset-0 w-screen h-screen opacity-40 z-[-5]"></div>
      <div className="  h-screen px-4 md:px-8   ">
        <nav>
          {" "}
          <a href="/">
            <img src="/assets/logo.png" width={140} alt="scholar-finder-logo" />
          </a>
        </nav>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeDown}
          transition={{ duration: 0.6 }}
          className={`flex  text-white ${bg} rounded-lg shadow-lg overflow-hidden mx-auto  max-w-sm lg:max-w-4xl tracking-[1px]`}
        >
          <div className="hidden lg:block lg:w-1/2 bg-cover bg-[url('https://images.unsplash.com/photo-1627556704263-b486db44a463?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
          <div className="w-full  px-8 py-6 lg:w-1/2">
            <h2 className="text-2xl font-semibold  text-center">
              ScholarFinder.
            </h2>
            <a
              href="#"
              className="flex items-center justify-center mt-4 text-black rounded-lg shadow-md bg-white"
            >
              <div className="px-4 py-3">
                <svg className="h-6 w-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center  ">
                Sign up with Google
              </h1>
            </a>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase"
              >
                or signup with email
              </a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
              <label className="block  text-sm  mb-2">Full Name</label>
              <input
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  placeholder:text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block  text-sm  mb-2">Phone</label>
              <input
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-gray-200"
                placeholder="+0000000000"
                type="number"
              />
            </div>
            <div className="mt-4">
              <label className="block  text-sm  mb-2">Email Address</label>
              <input
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-gray-200"
                placeholder="example@gmail.com   "
                type="email"
              />
            </div>
            <div className="mt-4">
              <label className="block  text-sm  mb-2">Field of study</label>
              <input
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  placeholder:text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="science"
                type="text"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block  text-sm  mb-2">Password</label>
              </div>
              <input
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-gray-200"
                type="password"
                placeholder="***********"
              />
            </div>

            <div className="mt-8">
              <button className="bg-white text-black  py-2 px-4 w-full rounded hover:bg-opacity-75">
                Sign up
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <a href="/signin" className="text-xs text-white uppercas">
                Already have an account?
              </a>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SignUp;
