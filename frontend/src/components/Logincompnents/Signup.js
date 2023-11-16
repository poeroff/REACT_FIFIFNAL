import React, { useState } from "react";
import Logo from "../../imgfile/model.jpg"
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const [emailindex , setemailindex] = useState()
    const [passwordindex , setpasswordindex] = useState()
    const [confirmpasswordindex , setconfirmpasswordindex] = useState()

    const init = {
        email: "",
        password: "",
        confirmpassword: "",

    }
    const submithandler =  (event) => {
        event.preventDefault();
        fetch("http://localhost:2000/login/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then(resData => {
            const errorArray = resData.error; 
            seterrormessage(prevstate => errorArray.map(err => (err.msg))); 
            seterrortype(prevstate => errorArray.map(err => (err.path)));
            if (errorArray.length === 0) {
                navigate("/")
              }
        }).catch(err => {console.log(err)})

        

    }

    console.log(errortype)
    console.log(errormessage)


    const inputhandler = (event) => {
        const { name, value } = event.target;

        setformData({ ...formData, [name]: value })
    }
    return (
        <MDBContainer className="my-5">
            <main>
                <Outlet></Outlet>
            </main>

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
                            </div>

                            <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>


                            <form onSubmit={submithandler} noValidate>
                                {errormessage && <p className={classes.errormessage}>{errormessage[0]}</p>}
                                <input  className = {errortype.includes("email") ? classes.error : classes.singupinput} placeholder="Email" label='email' type='email' name="email" size="lg"   onChange={inputhandler}/>
                               
                                <input className = {errortype.includes("password") ? classes.error : classes.singupinput} placeholder="Password" label='password' type='password' name="password" size="lg" onChange={inputhandler} />
                               
                                <input   className = {errortype.includes("confirmpassword") ? classes.error : classes.singupinput} placeholder="Confirmpassword" label='confirmpassword' type='text' name="confirmpassword" size="lg" onChange={inputhandler} />
                               
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