import React from 'react'
import "./../style/home.css";
import Banner from '../components/Banner';
import { Outlet } from 'react-router-dom';
import About from '../home/About';
import Skills from './Skills';
import Portfolios from './Portfolios';

import Footer from './Footer';
import Review from '../pages/Review';
import Contactsection from '../home/Contactsection';



const Home = () => {
  return (
    <div className='Header'>

{/* /all components  */}

      <Banner />
      <About />
      <Skills />
      <Portfolios />
      <Review/>
     <Contactsection/>
      <Footer />
      <Outlet />

    </div>
  )
}

export default Home