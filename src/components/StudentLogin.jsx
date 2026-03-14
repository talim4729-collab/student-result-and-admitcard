import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
    const [mobile ,setmobile] =useState('')
    const [otp, setotp] =useState('')
    const [otpvrfy,setotpvrfy] = useState('')
    const naviget = useNavigate()
    // genrate otp
    const getotp =(e) =>{
        e.preventDefault()
        if(mobile===""){
            alert('Please enter your Mobile No.')
            return false
        }
        let createotp=Math.round(1000*Math.random() +1000)
        setotp(createotp)
        alert('OTP is  ' + createotp)
    }

    // verfy otp
    const veryfyotp=(e) =>{
        e.preventDefault()
        if(otpvrfy === ""){
            alert('Please enter your alert otp.')
            return false
        }
        if(otpvrfy === otp.toString()){
            naviget('/home')
        }
    }

    return (
        <>
            <div className='login-page'>
                <div className='login-dtls'>
                    <div>
                        <h1> Student Login</h1>
                    </div>
                    <form>
                        <input type='tel' value={mobile} onChange={(e) =>{setmobile(e.target.value)}} placeholder='Mobile No.' />
                        <button onClick={getotp} >Get OTP </button> <br/>
                        <input style={{width : '100px'}} type='tel' value={otpvrfy} onChange={(e) =>{setotpvrfy(e.target.value)}} placeholder='enter 4 digit otp' /> 
                        <button onClick={getotp} >Resend OTP </button> <br/>
                        <br/>
                        <p> Terms And Condition .....<br/></p>
                        <button className='loginBTN' onClick={veryfyotp} >Verify OTP </button> <br/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default StudentLogin;