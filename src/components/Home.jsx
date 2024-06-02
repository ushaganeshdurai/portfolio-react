import React from 'react';
import img from '../assets/image.png';

import Footer from './Footer';

import Navbar from './Navbar';
import pdf from './Pdf';
import { Link } from 'react-router-dom';
import About from './About';
const Home = () => {
  return (<>
    <Navbar />
    <div className=' flex flex-col items-center justify-center text-white h-full w-full font-roboto'>
      <h2 className='font-bold text-4xl'>Hi there!</h2>
      <h5 className='font-bold text-5xl'>I'm Usha Nandhini</h5>
      <h2 className='font-bold text-4xl'>I am a Web Developer</h2>
      <img src={img} className='float-right ' alt="" />
      <div className="inline-block">
        <button className='px-8 py-3 rounded-xl m-5 bg-[#294572] ' > <Link to={"/pdf"}>Resume</Link></button>
        <button className='bg-red-600 text-white px-8 py-3 rounded-xl m-5 '><Link to={"/projects"}>Projects</Link></button>
      </div>
      <Footer className='w-full h-full' />
    </div>
    
    </>
  );
}

export default Home;
