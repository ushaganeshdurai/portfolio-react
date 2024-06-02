import React from 'react'
import wa from '../assets/whatsapp.png';
import gi from '../assets/github.png';
import lin from '../assets/linkedin.png';
const Footer = () => {
  return (
    <>

{/* <!-- Pin to bottom left corner --> */}
<div className="relative h-full w-full ...">
  <div className="absolute bottom-0 left-0 h-16 w-16 m-4">
  <img src={wa} alt="" className='size-8 block' />
      <img src={lin} alt="" className='text-white size-8 block' />
      <img src={gi} alt="" className='text-white size-8 block' />
      <div className=" h-[80px] m-4 mr-0 block bg-white w-[3px]"></div>
  </div>
</div>

{/* <!-- Pin to bottom right corner --> */}
<div className="relative h-full w-full ...">
  <div className="absolute bottom-0 right-0 h-16 w-16 ...">
  <div className=" h-[80px] absolute bottom-20 left-3 m-4 block bg-white w-[3px]"></div>
  <h1 className='rotate-90 block font-bold'>gushanandhini2004@gmail.com</h1>

  </div>
</div>

    </>
  )
}

export default Footer