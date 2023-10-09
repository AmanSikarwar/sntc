import React from 'react'

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center mt-[60px]">
      <div className="text-2xl text-[#0ea5e9]">
        Services currently hosted on SnTC Server
      </div>
      <div id='project-container' className="grid grid-cols-3 mt-[30px] justify-between justify-items-center gap-[10px] w-[80%]">
        <div className="flex flex-wrap py-4 px-4 border-2 text-xl text-center rounded-[5%] w-[48%]">
           <div className="text-[#0ea5e9] text-center px-5">Judge0 API</div> 
           <div className='mt-[20px] text-white '>Allows users to compile their programs in a range of language options.</div>
        </div>
        <div className="flex flex-wrap py-4 px-4 border-2 w-[48%] text-xl text-center rounded-[5%]">
            <div className='text-[#0ea5e9] text-center'>Websites for SNTC Clubs</div>
            <div className='mt-[20px] text-white'>The websites for all clubs under SNTC will be hosted on SNTC Server.</div>
        </div>
        <div className="flex flex-wrap py-4 px-4 border-2 w-[48%] text-xl text-center rounded-[5%]">
            <div className='text-[#0ea5e9] text-center'>Student Projects</div>
            <div className='mt-[20px] text-white'>Student Projects can also be hosted on SNTC Server</div>
        </div>
      </div>
    </div>
  )
}
