import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{scale:"1.1"}}
        dragElastic={.1}
        dragTransition={{bounceStiffness:100 , bounceDamping: 20}}
        className=" relative w-60 h-72 rounded-[40px] bg-zinc-900/90 py-10 px-7 overflow-hidden shadow-2xl"
      >
        <FaRegFileAlt size="1.4em" />
        <p className="leading-tight font-medium mt-5 text-sm ">
          {data.description}
        </p>
        <div className="footer absolute bottom-0 left-0 w-full ">
          <div className="flex justify-between items-center px-6 mb-5">
            <h5>{data.fileSize}</h5>
            <div className=" bg-zinc-600 rounded-full p-2 flex justify-center items-center cursor-pointer">
              {!data.close ? (
                <LiaDownloadSolid size="1.2em" />
              ) : (
                <AiOutlineClose />
              )}
            </div>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-3 ${
                data.tag.tagColor == "blue" ? "bg-blue-700" : "bg-green-700"
              } flex justify-center`}
            >
              <p className="text-yellow-50 font-semibold cursor-pointer">
                {data.tag.tagTitle}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
