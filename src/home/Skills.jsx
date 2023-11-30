import React, { useEffect, useState } from 'react'
import SkillsData from '../All data/skilsData';

import { FaFacebook, FaGithub, FaLinkedin, FaTwitter,FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { IoIosGitNetwork } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import '../style/skils.css'
import { Link } from 'react-router-dom';
const skills = "My Skills"
const Skills = () => {
  const [data, setdata] = useState([]);
  const [collection, setcollection] = useState([])

  useEffect(() => {
    setdata(SkillsData)
  }, [])

  // console.log(data)

  return (

    <div className='skills d-flex  '>

      <div className="container skils-wrapaer ">

        <div className="icons ">
          <li> <Link to='https://github.com/biplob-kumar'>  <FaGithub className='icon' />  </Link>  </li>
          <li>  <Link to=''>  <IoIosGitNetwork className='icon' />  </Link>  </li>
          <li>  <Link to=''>  <FaReact className='icon' />  </Link>  </li>
          <li>  <Link to=''> <IoLogoJavascript  className='icon' /> </Link>  </li>
          <li>  <Link to=''>  <DiMongodb className='icon'  />  </Link>  </li>

          <h6 className='follows' >{skills}</h6>

        </div >

        <div className='card-skills text-center ' data-aos="zoom-in-up" >

          {
            data.map((item) => (
              <div className='d-flex  cards gap-4 ' key={item.id}>
                <div className="skils-img" key={item.id}>
                  <img className='img-fluid' src={item.img} alt="" />
                </div>
                <div className='' key={item.id} >
                  <h4 className='text-center title-skills'> {item.title} </h4>
                </div>

              </div>

            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Skills