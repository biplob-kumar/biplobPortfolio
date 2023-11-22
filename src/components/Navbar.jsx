import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {

  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "../home/Home";
import Skill from "../pages/Skill";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import About from '../home/About';

// import Logo from "../assets/img/logo.png";

const Bar = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar expand="lg" className="bg text-white sticky-top py-3">
          <Container>
            <Navbar.Brand href="#" className='text-white '>  <h5 className='logo'> B<span>K</span> </h5>   </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2  my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link className='text-white ' as={Link} to='/' >HOME</Nav.Link>
                <Nav.Link className='text-white' as={Link} to='/about' >ABOUT</Nav.Link>
                <Nav.Link className='text-white' as={Link} to='/skil' >SKILL</Nav.Link>
                <Nav.Link className='text-white' as={Link} to='/portfolio' > PORTFOLIO</Nav.Link>
                <Nav.Link className='text-white' as={Link} to='/blog' > BLOG</Nav.Link>
                <Nav.Link className='text-white' as={Link} to='/contact' > CONTACT</Nav.Link>





              </Nav>
              <Link to='/' >
                <button className=' button' >Resume </button>
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </>

      <div>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/skil' element={<Skill />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Bar;