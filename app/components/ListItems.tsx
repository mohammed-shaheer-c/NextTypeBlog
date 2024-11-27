import React from 'react'
import Image from 'next/image'
function ListItems() {
  return (
    <div className="w-[80%]  2xl:w-[25%] mx-auto grid  justify-center md:grid-cols-12 grid-cols-1 gap-8 py-6  ">
    {/* Image */}
    <div className="md:col-span-4 col-span-12">
      <Image
        src="/blogImg1.jpg"
        width={370}
        height={130}
        alt="Picture of the author"
      />
    </div>
    {/* Content */}
    <div className="md:col-span-8 col-span-12">
      <div>
        <h2 className="text-4xl font-semibold text-slate-700 ">Hiking through the woods</h2>
      </div>
      <div className="relative top-3">
        <span className="text-xl font-medium italic text-zinc-600">Apr 12, 2022</span>
      </div> 
      <div className="relative top-6">
        <p className="italic text-[20px]  font-normal font-serif text-slate-500 loding-relaxed">
          This is Rich Text, which includes both external links and links to internal documents.
          Links should be handled intelligently or everything might break. Don't forget about media, 
          too! Do your best to render images using an HTML Serializer. 
          As you know hiking can be a very fulfilling orem ipsum dolor…
        </p>
      </div>
    </div>
    </div>
  )
}

export default ListItems