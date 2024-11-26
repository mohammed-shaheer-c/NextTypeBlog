'use client'
import { useEffect, useRef } from 'react';
function page() {
    const vedeoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(()=>{
        if(vedeoRef.current){
            vedeoRef.current.play()
        }
    },[])

  return (
    <div className='flex flex-col justify-between  gap-16'>

        <div className='py-6'>
          <hr className='w-[40%] mx-auto'></hr>
        </div>

            <div className=' max-w-[70%] text-[1.4em] mx-auto xl:text-[1.8em] font-light text-slate-800 text-start'>
                <p>Hi, I’m Shaheer. Welcome to my safe place where I write about everything I find inspiring and you might find too.</p>
            </div>

        <div>
           <div className='max-w-[95%] mx-auto'>
           <video 
                className="w-full  mx-auto rounded-lg shadow-lg"
                controls
                ref={vedeoRef}
                autoPlay
                muted
                onEnded={(e)=>e.currentTarget.play()}
            >
            <source src="/travelVedeo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
           </div>
           <div  className='flex justify-center py-3'>
                <span className='text-[1.2em] font-normal text-slate-500'>
                    Yes, that's me!
                </span>
           </div>
        </div>
        <div className='w-full flex justify-center'>
             <div className='w-[80%]'>
               <h2 className='text-[2em] font-sans text-slate-500 italic font-normal'>“You go man!” — George Washington</h2>
            </div>
        </div>
        <div className='flex justify-center'>
            <p className='max-w-[70%] text-start  text-[1.9em] text-slate-600   font-sans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin eu tincidunt porta condimentum mauris interdum facilisis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin eu tincidunt porta condimentum mauris interdum facilisis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin eu tincidunt porta condimentum mauris interdum facilisis.

            </p>
        </div>
        
    </div >
  )
}

export default page