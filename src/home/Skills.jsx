import React, { useEffect, useState } from 'react'
import SkillsData from '../All data/skilsData';

import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
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
  console.log(data)
  return (
    <div className='skills d-flex  '>
      <div className="container skils-wrapaer ">

        <div className="icons ">
        <li> <Link to='https://github.com/biplob-kumar'>  <FaGithub className='icon' />  </Link>  </li>
                <li>  <Link to='https://www.facebook.com/profile.php?id=100014976270192'>  <FaFacebook className='icon' />  </Link>  </li>
                <li>  <Link to='https://www.linkedin.com/in/biplob-kumar-07750a250/'>  <FaLinkedin className='icon' />  </Link>  </li>
                 <li>  <Link to='https://twitter.com/Developerbiplob'>  <FaTwitter className='icon' />  </Link>  </li>
                  <li>  <Link to='/'>  <FaWhatsapp className='icon' />  </Link>  </li>

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