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
          <Link to='/about'> about </Link>
          <Link to='/portfolio'> Portfolio </Link>
          <Link to='/Blog'> Blog </Link>
          <Link to='/contact'> Contact </Link>
        </div>
        <div className="links ">
          <ul>
            <li>  <Link to='/'>  <FaGithub className='icon' />  </Link>  </li>
            <li>  <Link to='/'>  <FaFacebook className='icon' />  </Link>  </li>
            <li>  <Link to='/'>  <FaLinkedin className='icon' />  </Link>  </li>
            <li>  <Link to='/'>  <FaTwitter className='icon' />  </Link>  </li>
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