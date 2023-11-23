import React from 'react'
import "../style/about.css"
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const desc="Hello! I'm  developer biplob, i am a front-end developer. I develop web applications, , . My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I have graduated with a bachelor's degree in Computer Science Engineering from Chandigarh University at Punjab, India in 2020. I am available for any kind of job opportunity that suits my interests."
const about=" ABOUT ME"

const About = () => {
  return (
    <div className='about    text-white'>
      <div className="container about-wraper">
       <div className="about-left">

        <div className="about-left-content"  data-aos="zoom-in">
            <p>{desc} </p>
            <div className="bt my-4 ">
                      <Link to='https://drive.google.com/file/d/1Tvj1WPboh5VPM7vMrJUsX8QXTHM9PoSB/view?usp=sharing' >   <button className=' button' >Resume </button> </Link>
                 <Link to='/' >   <button className=' button  ' > About Me  </button> </Link>
            </div>
        </div>

    
       </div>
       <div className="about-right d-flex justify-content-center" data-aos="zoom-in-up">
           <div className="right-img">
           <img src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlsWmptWOj78BnvzkBVxp4Ip4hQJNIRmi_MLosF_vbDtqywq8lL-BbtBnw_n3NUZIOmlstAFB4WMMtNp-sVZUltlbP2gfwq5P8SSHHDmgHgm6444SQSgFO-lIcKLBR8T-sTXnWuMReHXJVlvOJhlWarYi1g_RwJSpxZ8Pn8jx9sUdWII3ChqQqs73u/s320/biplob.jpg" alt="" />
           <img src= "" alt="" />

           <div className="about-icons ">
                 <div className="about-i">
                 <li> <Link to='https://github.com/biplob-kumar'>  <FaGithub className='icon' />  </Link>  </li>
                <li>  <Link to='https://www.facebook.com/profile.php?id=100014976270192'>  <FaFacebook className='icon' />  </Link>  </li>
                <li>  <Link to='https://www.linkedin.com/in/biplob-kumar-07750a250/'>  <FaLinkedin className='icon' />  </Link>  </li>
                 <li>  <Link to='https://twitter.com/Developerbiplob'>  <FaTwitter className='icon' />  </Link>  </li>
                  <li>  <Link to='/'>  <FaWhatsapp className='icon' />  </Link>  </li>
             
                 </div>
                <h6 className='about-me' >{about}</h6>
             </div>


           </div>

         
       </div>
        
      
      </div>
    
    </div>
  )
}

export default About