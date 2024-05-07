import {
    FiEdit,
    FiChevronDown,
    FiTrash,
    FiShare,
    FiPlusSquare,
  } from "react-icons/fi";
  import { motion } from "framer-motion";
  import { Dispatch, SetStateAction, useState } from "react";
import { TbCategory } from "react-icons/tb";
import { PiTShirtBold } from "react-icons/pi";

  
  const Filter = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-slate-700 hover:bg-indigo-500 hover:text-slate-950 transition-colors"
          >
            <TbCategory className='text-2xl'/>
            <span className="font-medium text-sm">Size</span>
            <motion.span variants={iconVariants}>
              <FiChevronDown />
            </motion.span>
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col  z-50 gap-2 p-2 rounded-lg bg-slate-700 shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
          >
            <Option  className="text-white" setOpen={setOpen}  text="Large" />
            <Option  className="text-white" setOpen={setOpen}  text="X-large" />
            <Option  className="text-white" setOpen={setOpen}  text="2X-Large" />
            <Option  className="text-white" setOpen={setOpen}  text="Oversized" />
          </motion.ul>
        </motion.div>
      </div>
    );
  };
  
  const Option = ({ text, Icon, setOpen }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-white hover:text-indigo-500 transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
       {/*    <Icon /> */}
        </motion.span>
        <span>{text}</span>
      </motion.li>
    );
  };
  
  export default Filter;
  
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };