import React, { } from 'react'
import '../style/Contactsection.css'

const Contactsection = () => {

    const handlebuton = () => {
        alert("Plese submit Your Inbformation");
    }


    return (
        <div className='contact text-white' >
            <div className='container '>



                {/* <!--Section: Contact v.2--> */}
                <section class="mb-4 py-5"  >

                    <div className="contact-header">
                        
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6">

                            <h2 class="h1-responsive font-weight-bold contact-h2 py-4">Contact us</h2>
                        {/* <!--Section description--> */}
                        <p class=" w-responsive  py-2">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                            a matter of hours to help you . plese Contact Me </p>

                            </div>
                            <div className="col-lg-3"></div>
                        </div>
                    </div>
                 


                    <div class="row" data-aos="zoom-in-right" >


                        {/* <!--Grid column--> */}
                       <div className="col-lg-3 col-md-3"></div>


                       <div class="col-md-6 mb-md-0 mb-5" >
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                                {/* <!--Grid row--> */}
                                <div class="row">

                                    {/* <!--Grid column--> */}
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="name" name="name" class="form-control" placeholder='Type your Name' />

                                        </div>
                                    </div>
                                    {/* <!--Grid column--> */}

                                    {/* <!--Grid column--> */}
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="email" name="email" class="form-control" placeholder='Type your Email' />

                                        </div>
                                    </div>
                                    {/* <!--Grid column--> */}

                                </div>
                                {/* <!--Grid row--> */}

                                {/* <!--Grid row--> */}
                                <div class="row">
                                    <div class="col-md-12 mt-4">
                                        <div class="md-form mb-0">
                                            <input type="text" id="subject" name="subject" class="form-control" placeholder='Type your subject' />

                                        </div>
                                    </div>
                                </div>
                                {/* <!--Grid row--> */}

                                {/* <!--Grid row--> */}
                                <div class="row">

                                    {/* <!--Grid column--> */}
                                    <div class="col-md-12 mt-4" >

                                        <div class="md-form " >
                                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder='Type your Messege '></textarea>

                                        </div>

                                    </div>
                                </div>
                                {/* <!--Grid row--> */}

                            </form>

                            <div class="text-center text-md-left mt-4">
                                <a class="btn btn-primary d-block contact-button" onClick={handlebuton} >Send</a>
                            </div>
                            <div class="status"></div>
                        </div>
                        {/* <!--Grid column-->

                           
             

                       <div className="col-lg-3 col-md-3"></div>




                        {/* <!--Grid column--> */}

                    </div>

                </section>
                {/* <!--Section: Contact v.2--> */}




            </div>
        </div>
    )
}

export default Contactsection