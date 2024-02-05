import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const Hero = () => {
  const { mode, bg } = useSelector((state) => state.mode);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      transition={{ duration: 0.6 }}
      className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 h-screen"
    >
      <div className="text-center flex items-center gap-y-10 flex-col tracking-[1px] ">
        <h1 className="text-white font-bold text-4xl md:text-[100px] ">
          Scholar
          <span className={mode}>Finder</span>
        </h1>
        <p className="text-white max-w-[85%] mx-auto leading-relaxed text-[16px]">
          ScholarFinder is a free scholarship search platform that connects
          students to college scholarships, trade school scholarships, and
          financial aid tools. Our goal is to help you find scholarships to make
          college or vocational school more affordable.
        </p>
      </div>
      <div className="mt-12 justify-center text-white items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex text-[16px] tracking-[1px]">
        <a
          href="/signup"
          className={`px-10 py-3.5 w-full ${bg} hover:opacity-70 text-center rounded-md shadow-md block sm:w-auto`}
        >
          Get started
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
