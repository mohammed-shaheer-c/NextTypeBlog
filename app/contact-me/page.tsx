'use client'
import React from 'react'

function page() {
  const handleSubmit =()=>{

  }
  return (
    <div className='px-4 py-8 w-full'>
      <div className=' mx-auto w-full max-w-xl'>
        <form onSubmit={handleSubmit} className='grid gap-7'>
          {/* Name */}
        <div className="relative w-full border-b border-slate-400 " >
              <div>
                <span className='text-slate-500 text-sm'>Name</span>
              </div>
              <input 
                  type="text" 
                  required
                  className="w-full rounded-none border-b py-5 border-slate-100  text-slate-800 placeholder-slate-400" 
                  placeholder="shanshaheer3@gmail.com"
              />
        </div>
        {/* Email Address */}
        <div className="relative w-full border-b border-slate-400 " >
              <div>
                <span className='text-slate-500 text-sm'>Email Address</span>
              </div>
              <input 
                  type="text" 
                  required
                  className="w-full rounded-none border-b py-5 border-slate-100  text-slate-800 placeholder-slate-400" 
                  placeholder="shanshaheer3@gmail.com"
              />
        </div>
        {/* Message */}
        <div className="relative w-full border-b border-slate-400 " >
              <div>
                <span className='text-slate-500 text-sm'>Message</span>
              </div>
              <textarea 
                  required
                  className="w-full rounded-none border-b py-9 border-slate-100  text-slate-800 placeholder-slate-400" 
                  placeholder="shanshaheer3@gmail.com"
              />
        </div>
        <div className='flex justify-end'>
          <div className='w-[30%] flex justify-end '>
              
              <button type="submit" className=" flex text-slate-400 text-end">
                    <span >Send Message</span>
                    <span aria-hidden="true" className="text-xl">→</span>
              </button>
          </div>
        </div>
        </form>
      </div>

    </div>
  )
}

export default page