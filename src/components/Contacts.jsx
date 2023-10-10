import React from "react";
import { AiOutlineMail } from "react-icons/ai";
function contacts() {
  return (
    <div className=" h-[65vh]">
      <div className=" h-[100%] mx-[10rem] flex justify-between items-center max-lg:flex-col max-lg:gap-4 max-lg:mx-5 max-md:gap-1">
        <div className="w-[55%] max-sm:w-[100%] max-md:text-md text-lg text-gray-300 text-center">
          For any queries related to Science and Technology Council (SNTC) or
          any of its clubs, please contact the Technical Secretary at the given
          details.
        </div>
        <div className="flex flex-grow flex-col  justify-center items-center gap-3">
          <div className="bg-black max-md:h-[180px] max-md:w-[180px] h-[200px] overflow-hidden w-[200px] border-4 border-white rounded-full">
            <img src="/src/assets/tech_secy.jpg" alt="" />
          </div>
          <div className="flex flex-col text-gray-300 text-center gap-2  ">
            <span className=" max-md:text-xl text-3xl">Anurag Maurya</span>
            <span className=" max-md:text-xs">Technical Secretary</span>
            <span className="flex justify-center items-center max-md:text-xs gap-2">
              <span>technical_secretary@students.iitmandi.ac.in </span>
              <span>
                <AiOutlineMail />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contacts;
