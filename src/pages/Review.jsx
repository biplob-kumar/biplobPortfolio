import React from 'react'
import '../style/review.css'
import {
    MDBCarousel,

    MDBCarouselItem,
    MDBCol,
    MDBIcon,
    MDBTypography,
    MDBContainer,
    MDBRow,
  } from "mdb-react-ui-kit";


const Review = () => {
  return (
    <div className='review py-5 '>
        
       <div className="container">
       
       <MDBContainer className="py-5 text-white"  data-aos="zoom-in">
      <MDBCarousel showControls dark >
  
          <MDBCarouselItem className="active">
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://s42013.pcdn.co/wp-content/uploads/2016/07/Kenny-Lange-PHNX21Design-Client-Report.jpg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Anna Deynah</h5>
                  <h6 className="text-primary mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTLtUfwUaiTJ1y90e4o61h8TV0454IOfAFE1auApStKtdIy_cUvQaIrNncjdZfmtyaX6U&usqp=CAU"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">John Smith</h5>
                  <h6 className="text-primary mb-3">Web Developer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star-half-alt"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89gVzygy-gkxRLBbUXiKn1WuV9wjWRZWRGw&usqp=CAU"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Maria Kate</h5>
                  <h6 className="text-primary mb-3">Photographer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        far
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTniMBY7mfkqxGq244Y7zQyOtFKCK12jVSB3kyyvQajWMLudAT3Uh2njOtbSgmIpTQKNj4&usqp=CAU"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Gururaj Deshpande</h5>
                  <h6 className="text-primary mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfqUb1S_CMWOc8eVRbEa3E4x4GvGpsZnA4lgAeFFi6F5R5d4zpaHoln1dDQGpyd0u6LE0&usqp=CAU"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Alex Rey</h5>
                  <h6 className="text-primary mb-3">Web Developer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star-half-alt"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR78_udzaYr-_J0lw0wUB1k9QQpQMc4hhYK8Law1LoHhduejbY1PBYoK3HwtWxAWCa9jLU&usqp=CAU"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Stv bin</h5>
                  <h6 className="text-primary mb-3">Photographer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        far
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFi8VvIr7nuHaClS75nnV-PjaHyrFXrI6qtoyL5KtiPUdlc1RmdHAPNaskT_fG1AZCvgM&usqp=CAU"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Alex pande</h5>
                  <h6 className="text-primary mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://media.licdn.com/dms/image/D5603AQG5G-ep8tJWPg/profile-displayphoto-shrink_800_800/0/1678854751758?e=2147483647&v=beta&t=zkJVtXkzt30bNJkj6WrKr1WaOgkmqeYTd-DduelJgvM"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Alex smith</h5>
                  <h6 className="text-primary mb-3">Web Developer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star-half-alt"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://media.licdn.com/dms/image/C5103AQHkrY3KbsW7rA/profile-displayphoto-shrink_800_800/0/1550848070121?e=2147483647&v=beta&t=IHD1FEjRTKaV9aS5FsADmXEg4k7vkcvsxXfMA7QCkZ0"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Mehun bonshi</h5>
                  <h6 className="text-primary mb-3">Photographer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        far
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
     
      </MDBCarousel>
    </MDBContainer>


       </div>
    </div>
  )
}

export default Review