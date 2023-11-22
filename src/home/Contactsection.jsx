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
                <section class="mb-4 py-6"  >

                    {/* <!--Section heading--> */}
                    <div className="col-md-7">

                        <h2 class="h1-responsive font-weight-bold contact-h2 py-4">Contact us</h2>
                        {/* <!--Section description--> */}
                        <p class=" w-responsive  py-2">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                            a matter of hours to help you . plese Contact Me </p>

                    </div>


                    <div className="col-md-5"></div>

                    <div class="row">

                        {/* <!--Grid column--> */}
                        <div class="col-md-7 mb-md-0 mb-5">
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

                            <!--Grid column--> */}
                        <div class="col-md-5 text-center">
                            <ul class="list-unstyled mb-0 ">

                                <div className="contact-card">
                                    <li><i class="fas fa-map-marker-alt fa-2x "></i>
                                        <p> Magura ,Khulna Bangladesh</p>
                                    </li>
                                </div>


                                <div className="contact-card">
                                    <li><i class="fas fa-phone mt-4 fa-2x "></i>
                                        <p> +8801612714870 </p>
                                    </li>
                                </div>
                                <div className="contact-card">
                                    <li><i class="fas fa-envelope mt-4 fa-2x ">   </i>
                                        <p> devbiplob.com</p>
                                    </li>
                                </div>
                            </ul>
                        </div>
                        {/* <!--Grid column--> */}

                    </div>

                </section>
                {/* <!--Section: Contact v.2--> */}




            </div>
        </div>
    )
}

export default Contactsection