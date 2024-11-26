import React from 'react'

function SearchBar() {
  return (
    <div className="grid grid-cols-1 justify-items-center pt-7 pb-5">
        <input 
          type="text" 
          placeholder="Search here"  
          className="border border-[#d1c9c9] border-3 pl-[15px] pr-[150px] py-[10px] rounded-[47px]"
        />
    </div>
  )
}

export default SearchBar