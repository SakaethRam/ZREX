import { CheckCircle2, Scale } from "lucide-react";
import codeImg from "../assets/code.png";
import { checklistItems } from "../constants";
import { motion } from "framer-motion";

const Workflow = () => {
  return (
    <div className="mt-20 border-t py-2 border-neutral-800">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
      </div>
      <div className="text-center mt-5">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          WORKFLOW
        </span>
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Accelerate your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
          </span>
        </motion.h2>
      </div>
      <div className="flex flex-wrap justify-center">
        <motion.div whileInView={{opacity:1, Scale:0}} initial={{opacity:0, Scale:100}} transition={{duration:1}} className="p-8 w-full lg:w-1/2">
          <img src={codeImg} alt="Coding" className="w-auto h-auto" />
        </motion.div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </motion.div>
              <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}}>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
