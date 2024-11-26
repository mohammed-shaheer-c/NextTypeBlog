import React from 'react'

function Footer() {
  return (
        <footer>
            <div className='py-16'>
                <hr className='max-w-[60%] lg:w-[30%] mx-auto'/>
            </div>

            <div className='w-[85%] lg:w-[50%] mx-auto flex flex-col gap-3'>
                <div className='flex justify-center'>
                        <h1 className='font-sans text-4xl font-medium  text-slate-800 tracking-tight'>Follow my journey</h1>   
                </div>
                <div className='italic text-center  text-lg font-normal  text-slate-500 leading-relaxed'>
                    <p>
                        Get notified about updates and be the first to get early access to the new, safer, and smarter way to archive your files.
                    </p>
                </div>
            </div>

            <div className='w-[85%] lg:w-[50%] mx-auto flex flex-col  py-8'>
            <div className="relative w-full border-b border-slate-400 " >
            <input 
                type="text" 
                required
                className="w-full rounded-none border-b border-slate-200 py-3 pl-3 pr-10 text-slate-800 placeholder-slate-400" 
                placeholder="shanshaheer3@gmail.com"
            />
              <button type="submit" className="absolute bottom-0 right-0 top-0 flex items-center justify-center px-3 text-2xl text-slate-400">
                <span className="sr-only">Submit</span>
                <span aria-hidden="true">→</span></button>

            </div>

                <div>
                    <p className=' text-center text-base tracking-tight text-slate-500'>
                        By subscribing to our newsletter you accept to receive recurring emails about our product and company
                    </p>
                </div>
            </div>

        </footer>
  )
}

export default Footer