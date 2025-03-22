import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <motion.h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        ZREX build tools
        <motion.span whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:2.5}}  className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </motion.span>
      </motion.h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        <motion.span whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:3}}>Empower your creativity and bring code workflows ideas to life with our
        intuitive development tools.</motion.span> <motion.span whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:6.5}}>Get started today and turn your imagination
        into immersive reality!</motion.span>
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
