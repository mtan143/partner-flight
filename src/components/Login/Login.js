import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate,useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../PartnerRegisterAndLogin.css"
import jwtDecode from "jwt-decode";
import FlightCode from "../FlightCode";
const PartnerLogin = () => {
  const Navigate=useNavigate();
  const [getCookies,setCookies]=useCookies();
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  function Login() {
    axios.post("https://gxyvy04g01backend-production.up.railway.app/Partner/Login",
      {
        PARTNER_EMAIL: getEmail,
        PARTNER_PASSWORD: getPassword,
        APP: "FLIGHT"

      }).then(res=>{
          if(res.data.STATUS){
            console.log(res.data.TOKEN);
            localStorage.setItem("id", jwtDecode(res.data.TOKEN).PARTNER_ID)
            
            Navigate("/doanhthu");
          }
          else{
            window.alert(res.data.ERROR);
          }
        })
      }
  return (
    <>
      <div className="bg-register">
        <div class=" py-5 h-100">
          <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto">
              <div class="card card-signin flex-row my-5">
                <div class="card-img-left d-none d-md-flex">
                  {/* <!-- Background image for card set in CSS! --> */}
                </div>
                <div class="card-body">
                  <h5 class="text-center">Traveloka <b className="colorlogo">TERA</b></h5>
                  <br /><br />
                  <div><h5>Welcome Back!</h5></div>
                  <div>
                    <p>
                      Login to manage your accommodation from checking
                      reservations to managing room availability!
                    </p>
                  </div>
                  <br />
                  <div>
                    <label>Your Email address:</label>
                  </div>
                  <div class="form-label-group">
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} required />
                    <label for="inputEmail">Email address</label>
                  </div>
                  <div>
                    <label>Password: </label>
                    <div class="form-label-group">
                      <input type="password" id="inputPass" class="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                      <label for="inputPass">Password</label>
                    </div>
                  </div>
                  <div>
                    <p><b className="colorlogo">Forgot your password!</b></p>
                  </div>
                  <hr />
                  <button class="btn btn-lg btn-primary btn-block text-uppercase button-size" onClick={Login}>
                    Login
                  </button>
                  <hr className="my-4" />
                  <div>
                    <p>
                      Not yet a partner?&emsp;
                      <Link to="/Register"><b className="colorlogo">Register here</b></Link>
                    </p>
                  </div>
                  <hr className="my-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FlightCode />
    </>
  );
};
export default PartnerLogin;
