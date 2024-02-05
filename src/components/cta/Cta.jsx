import { useSelector } from "react-redux";

const CTA = () => {
  const { mode } = useSelector((state) => state.mode);
  return (
    <section className="relative h-screen mb-12 max-w-screen-xl mx-auto py-4 px-4 md:px-8 text-white tracking-[1px]">
      <div className="absolute top-0 left-0 w-full h-full  "></div>
      <div className="relative z-10 gap-5 items-center lg:flex">
        <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
          <h3 className="text-3xl  font-semibold md:text-4xl">
            Lorem ipsum, dolor sit
            <span className={mode}> Fuga quos totam esse</span>
          </h3>
          <p className=" leading-relaxed mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quos
            totam esse, voluptate dolore ipsam suscipit cum possimus cumque,
            omnis eius dignissimos porro optio. At eveniet doloremque accusamus
            accusantium expedita.
          </p>
          <a
            className={`"mt-5 px-4 py-2 ${mode} font-medium bg-blue-90 rounded-full inline-flex items-center"`}
            href="#"
          >
            Try it out
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1 duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
        <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
          <img
            src="https://i.postimg.cc/kgd4WhyS/container.png"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
