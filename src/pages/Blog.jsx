import React, { useEffect, useState } from 'react'
import Footer from '../home/Footer'
import '../style/blog.css'
import blogdata from '../All data/blogdata';
import { Link } from 'react-router-dom';
const Blog = () => {

  const [data, setdata] = useState([]);

  useEffect(() => {
 
  setdata(blogdata)
  
  }, [])
  

  return (
    <div className=' blog'>
 
             
            <div className="container  text-white">
                 <h1 className='blog-headear'> My Blogs.... </h1>
               <div className="blog-wraper mt-5">
               {
              data.map((item)=>(
             <Link to='/' >
             <div className='card bg-dark text-white' data-aos="zoom-in" key={item.id}>
                <div className="blog-img">
                      <img src= {item.img} alt="" />
                    </div>
                    <div className="blog-s">
                    <div className="blog-content">
                      <h2> {item.title} </h2>
                      <p> {item.desc} </p>
                    </div>
                    <hr />
                    <div className="blog-user d-flex gap-5">
                      <p>  {item.user}</p>
                      <p>  {item.death}</p>
                    </div>
                </div>
                </div>
             </Link>
              ))
             }    
                
                
                </div>  
              

            </div>


      <Footer/>
    </div>
  )
}

export default Blog