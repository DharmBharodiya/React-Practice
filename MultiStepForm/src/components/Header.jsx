import React from 'react'

function Header() {
  return (
    <div className='flex flex-col justify-center items-center'>
       <h1
        className='-skew-3 text-black font-black text-2xl bg-gray-200 mt-6 h-fit w-fit py-2 px-4 rounded-sm shimmer-text2'
        >
            PhaseForms
       </h1>
        <p className='text-sm text-center mt-1 text-white'>
            forms in phases, 1 by 1
        </p>
     </div>
  )
}

export default Header