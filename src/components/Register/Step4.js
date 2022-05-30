import React, { useEffect } from "react";
import logo from "./Img/confirm.png"
const Step4 = (props) =>{
    useEffect(()=>{
        props.registerToDataBase();
    })
       
    return(
        <div className="bg-register" >
            <div class=" py-5 h-100">
                <div class="row">
                    <div class="col-lg-10 col-xl-9 mx-auto">
                        <div class="card card-signin flex-row my-5">
                            <div class="card-img-left d-none d-md-flex">
                                {/* <!-- Background image for card set in CSS! --> */}
                            </div>
                            <div class="card-body">
                                <h5 class="text-center">Traveloka <b className="colorlogo">TERA</b></h5>
                                <br />
                                <br />
                                <form class="form-signin">
                                    <div>
                                        <h6>
                                            One last step:  confirm your registrantion!
                                        </h6>
                                    </div>
                                    <br />
                                    <img src={logo} />
                                    <div>
                                        <p>Confirm your registration by clicking the link we're sent to your email.</p>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="col-s-4">
                                    </div>
                                    <div><p>Not receiving any emails?&emsp;<a class="fw-bold text-body"><b className="colorlogo">Resend email</b></a></p></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Step4;