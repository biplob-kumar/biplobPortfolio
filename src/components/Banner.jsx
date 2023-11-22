import React from 'react'
import { Link } from 'react-router-dom'
import '../style/banner.css'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const samlltitle = 'Hello! I am'
const titlebig = "Biplob Kumar"
const developer = "Full Stack Developer"
const list = "Web Developer"
const list2 = "Programmer"
const list3 = "Front-end Developer"
const Follow = "FOLOW ME "


const Banner = () => {
     return (
          <div className='banner text-white'>
               <div className="container banner-wraper d-flex ">

                    <div className="icons">
                         <li>  <Link to='/'>  <FaGithub className='icon' />  </Link>  </li>
                         <li>  <Link to='/'>  <FaFacebook className='icon' />  </Link>  </li>
                         <li>  <Link to='/'>  <FaLinkedin className='icon' />  </Link>  </li>
                         <li>  <Link to='/'>  <FaTwitter className='icon' />  </Link>  </li>
                         <li>  <Link to='/'>  <FaGithub className='icon' />  </Link>  </li>

                         <h6 className='follow' >{Follow}</h6>
                    </div>

                    <div className="banner-wraper">
                         <div className="banner-content ">
                              <h6>{samlltitle} </h6>
                              <h2> {titlebig} </h2>
                              <h4> {developer} </h4>
                              <div className='d-flex dot'>
                                   <li> <FaCircle className='circle' /> {list} </li>
                                   <li><FaCircle className='circle' /> {list2} </li>
                                   <li>  <FaCircle className='circle' />{list3} </li>
                              </div>

                              <div className="bt my-4 ">
                                   <Link to='/' >   <button className=' button' >Resume </button> </Link>
                                   <Link to='/' >   <button className=' button  ' > About Me  </button> </Link>
                              </div>

                         </div>

                         <div className="banner-right">
                              <img className='img-fluid' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjo7e4CQJNnTEitu3iomGF4KI9az0BaMoU-__ch6nhUEqOUaksGTQxzXeOceOahrom-7T9qZnu1rXXwkFpGRjvw-7a3-JulImW1y-asjlBZSHRsUUO6YODr5pu3OESACyprFZoDfTC39BDnA6WLf-R8-baqMLcYm4k9tZre34X1iGcoy0nxVCfMp2li/s320/tai-bui-kpGj50PWAG0-unsplash.jpg" alt="" />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Banner