import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Title from "./Title";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
export default function PartnerRegister(){
    const [getCookies,setCookies]=useCookies();
    const [getPageId,setPageId]=useState(1);
    const [getEmail,setEmail]=useState();
    const [getPartnerName,setPartnerName]=useState("");
    const [getAppID,setAppID]=useState({
        Services:[],
        Includes:[],
    });
    const [getPassword,setPassword]=useState("");
    const [getPasswordConfirm,setPasswordConfirm]=useState("");
    var Navigate=useNavigate();
    function RegisterToDatabase(){
        axios.post("https://gxyvy04g01backend-production.up.railway.app/Partner/Register",{
            PARTNER_EMAIL: getEmail,
            PARTNER_PASSWORD: getPassword,
            PARTNER_NAME: getPartnerName,
            APP_ID:getAppID.Services,
            APP: "FLIGHT"
        }).then((response)=>{
            if(response.data.STATUS){
                console.log(response.data);
                Navigate("/login");
                return;
            }
            else{
                window.alert(response.data.ERROR);
                window.location.reload();
                return;
            }
        },[]);
    }
    function handleChange(e){
        const { value, checked } = e.target;
        const { Services } = getAppID;
        if (checked) {
            setAppID({
                Services: [...Services, value],
                response: [...Services, value],
            });  
        }
        else {
            setAppID({
              Services: Services.filter((e) => e !== value),
              Includes: Services.filter((e) => e !== value),
            });
        }
    }
    function HandlePage1(){ 
        if(!getEmail||getEmail.length<5){
            window.alert("Điền Email");
            return false;
        }
        axios.post("https://gxyvy04g01backend-production.up.railway.app/Partner/checkEmail",{
            PARTNER_EMAIL:getEmail,
        }).then(res=>{
            if(!res.data.STATUS){
                window.alert(res.data.ERROR);
                setPageId(1);
                return false;
            }
        })
        if(!getAppID.Services[0]){
            window.alert("Chọn Services");
            return false;
        }
       
        else{
            return true;
        }
    }
    function HandlePage3(e,lengthValue){
        console.log(lengthValue);
        if(getPassword.length<5){
            window.alert("mật khẩu quá ngắn")
            return false;
        }
        if(getPassword.includes(e)&&getPassword.length===lengthValue){
            return true;
        }
        if(!e){
            window.alert("Không được bỏ trống mật khẩu xác nhận")
            return false
        }
        window.alert("Sai mật khẩu xác nhận");
        return false;
    }
    return (
        <>
            {getPageId===1?<Step1 onPage={setPageId} functionHandle={HandlePage1} getEmail={getEmail} onAppId={getAppID} onHandle={handleChange} onEmail={setEmail}/>:null}
            {getPageId===2?<Step2 onPage={setPageId} getLastName={getPartnerName} onLastName={setPartnerName}/>:null}
            {getPageId===3?<Step3 onPage={setPageId} functionHandle={HandlePage3} getPassword={getPassword} onPassword={setPassword} onClick={RegisterToDatabase}/>:null}
            {getPageId===4?<Step4 onPage={setPageId} registerToDataBase={RegisterToDatabase}/>:null}
        </>
    )
}