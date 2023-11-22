import React, { useEffect, useState } from 'react'
import portfoliodata from '../All data/portfolioData'
import '../style/portfolio.css'
import { CiLink } from "react-icons/ci";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaCircle } from "react-icons/fa";

const portfolio = "PORTFOLIO"

const Portfolios = () => {
  const [data, setData] = useState([])
  const [collection, setCollection] = useState([])

  useEffect(() => {
    setData(portfoliodata)
    setCollection([... new Set(portfoliodata.map((item) => item.menu))])

  }, [])
  const portfolio_filter = (itemData) => {
    const filterData = portfoliodata.filter((item) => item.menu == itemData)
    setData(filterData);
  }
  return (
    <div className='portfolio  bg-dark text=white py-5  portfolio-wraper'>

      <div className="container  port-folio-wraper">

        <div className='filter-item filter-wraper'>
          <div>

          </div>
          <ul className='d-flex nav'>
            <li className='men ' > <button className='all-btn' onClick={() => setData(portfoliodata)} >All</button></li>
            {
              collection.map((item) => <li className='men ' > < button onClick={() => { portfolio_filter(item) }} >{item}</button> </li>)
            }
             <h2 className='text-white text-center mt-1'>Portfolio</h2>
          </ul>
        
        </div>

        <div className='gallary-continer mt-3'>
          {
            data.map((item) =>
              <div key={item.id} className='gallary-item'> <img src={item.img} />
                <h5 className='text-white ' > {item.title} </h5>
                <div className='text-white d-flex mb-5 gap-3 portfolio '>
                  <Link to={item.livelink} className='portfolio-icon' > <CiLink /> </Link>
                  <Link to={item.githublink} className='portfolio-icon' >  <FaGithub /> </Link>
                </div>

    
              </div>

              
            )
          }
   


        </div>


        {/* <GalleryData/> */}
        <Link to='https://github.com/biplob-kumar?tab=repositories' className=' button-more mt-4' >   More... </Link>

      </div>
    </div>
  )
}

export default Portfolios;