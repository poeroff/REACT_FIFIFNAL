import React, { useState, useRef } from "react";
import Logo from "../../imgfile/model.jpg"
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftSquareFill } from "react-icons/bs";
import classes from "./Signup.module.css"
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom"

const Signup = () => {
    const [formData, setformData] = useState([])
    const [errormessage, seterrormessage] = useState([]);
    const [errortype, seterrortype] = useState([]);
    const inputemail = useRef();
    const inputpassword = useRef()
    const inputconfirmpassword= useRef()
    const navigate = useNavigate();
    const signuphandler = (event) => {
        event.preventDefault();
        fetch("http://localhost:2000/login/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email : inputemail.current.value , password : inputpassword.current.value , confirmpassword : inputconfirmpassword.current.value})
        }).then(res => res.json()).then(resData => {
            if(resData.message === "User created!"){
                navigate("/")
            }
            const errorArray = resData.data;
            seterrormessage(prevstate => errorArray.map(err => (err.msg)));
            seterrortype(prevstate => errorArray.map(err => (err.path)));
        }).catch(err => { console.log(err) })
    }
 
    return (
        <MDBContainer className="my-5">
            <MDBCard>
                <MDBRow className='g-0'>

                    <MDBCol md='6'>
                        <MDBCardImage src={Logo} alt="login form" className='rounded-start w-100' />
                    </MDBCol>
                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column'>
                            <div className='d-flex flex-row mt-2'>
                                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                <span className="h1 fw-bold mb-0">SLEEP</span>
                                <Link to="/login"><BsArrowLeftSquareFill size="40" color="black"/></Link>
                            </div>
                            <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                            <form onSubmit={signuphandler} noValidate>
                                {errormessage && <p className={classes.errormessage}>{errormessage[0]}</p>}
                                <input className={errortype.includes("email") ? classes.error : classes.singupinput} placeholder="Email" type='email' name="email" ref={inputemail} />
                                <input className={errortype.includes("password") ? classes.error : classes.singupinput} placeholder="Password" type='password' name="password" ref={inputpassword} />
                                <input className={errortype.includes("confirmpassword") ? classes.error : classes.singupinput} placeholder="Confirmpassword"  type='text' name="confirmpassword"  ref={inputconfirmpassword} />
                                <MDBBtn className={classes.btn} color='dark' size='lg' type="submit"> Sign up </MDBBtn>
                            </form>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>


        </MDBContainer>
    )

}
export default Signup;