import React from 'react'
import abtpic from "../assets/profilepic.jpg"
import "../App.css"
const About = () => {
  return (
    <div id='about' className='flex text-white m-10 p-10'>
        <div className='flex-1 ' >
            <img src={abtpic} className='align-center justify-center rounded-full' alt="" />
        </div>
        <div className='flex-1 m-10 p-10'>
          <h1 className='text-4xl text-white'>About me</h1>
          <h2 className='text-[#AA2531]'>My name is Usha Nandhini</h2>
          <p className='text-muted'>I am a B.E. Final Year Student at S.A.E.C pursuing Computer Science Engineering.</p>
          <p className='text-muted'>I have a keen interest in problem solving and building web applications.</p>
          <br />
          <p className='text-muted'> I am a Full Stack Developer who can write clean and maintainable code. </p>
          <br />
          <table >
            <tr>
              <td>1.Problem Solving</td>
              <td>2.Frontend Development</td>
            </tr>
            <tr>
              <td>3.Backend Development</td>
              <td>4.Figma</td>
            </tr>
            </table> <br />
              <ul>
                <li>LANGUAGES:</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>GIT</li>
                <li>REACT JS</li>
                <li>NEXT JS</li>
                <li>TAILWIND CSS</li>
                <li>BOOTSTRAP</li>
              </ul>
            

        </div>
    </div>
  )
}

export default About




