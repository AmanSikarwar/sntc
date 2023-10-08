import React from 'react'

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center mt-[100px]">
      <div className="text-2xl text-[#0ea5e9] font-['Helvetica']">
        Services currently hosted on SnTC Server
      </div>
      <div id='project-container'>
        <div>
           <div>Judge0 API</div> 
           <div>Allows users to compile their programs in a range of language options.</div>
        </div>
        <div>
            <div>Websites for SNTC Clubs</div>
            <div>The websites for all clubs under SNTC will be hosted on SNTC Server.</div>
        </div>
        <div>
            <div>Student Projects</div>
            <div>Student Projects can also be hosted on SNTC Server</div>
        </div>
      </div>
    </div>
  )
}
