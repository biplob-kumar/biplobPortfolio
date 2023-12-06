// eslint-disable-next-line no-unused-vars
import React from 'react';

import '../style/footer.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer py-5 text-center   '>
      <hr />
      <div className="container">

        <div className="footer-logo text-white">
          <h5 className='logo'> B<span>K</span> </h5>
        </div>

        <div className="menu">
          <Link to='/'> Home </Link>
          <Link to='/abouts'> about </Link>
          <Link to='/portfolio'> Portfolio </Link>
          <Link to='/Blog'> Blog </Link>
          <Link to='/contact'> Contact </Link>
        </div>
        <div className="links ">
          <ul>
          <li> <Link to='https://github.com/biplob-kumar'>  <FaGithub className='icon' />  </Link>  </li>
                <li>  <Link to='https://www.facebook.com/profile.php?id=100014976270192'>  <FaFacebook className='icon' />  </Link>  </li>
                <li>  <Link to='https://www.linkedin.com/in/biplob-kumar-07750a250/'>  <FaLinkedin className='icon' />  </Link>  </li>
                 <li>  <Link to='https://twitter.com/Developerbiplob'>  <FaTwitter className='icon' />  </Link>  </li>
                  <li>  <Link to='/'>  <FaWhatsapp className='icon' />  </Link>  </li>
          </ul>
        </div>
        <div className="copyright-text text-center text-white mt-3">
          <p>Copyright ©2023 All rights reserved  by Developer biplob</p>
        </div>

      </div>

    </div>
  )
}

export default Footer