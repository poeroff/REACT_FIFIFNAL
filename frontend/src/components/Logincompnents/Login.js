import React, { useState, useRef } from "react";
import Logo from "../../imgfile/Login.webp"

import classes from "./Login.module.css"
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBIcon, MDBInput }
    from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom"



const Loginhadnler = () =>{

}

const Login = () => {
    const inputemail = useRef();
    const inputpassword = useRef();
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
                                <span className="h1 fw-bold mb-0">KIMCHI</span>
                            </div>
                            <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Login into your account</h5>
                            <form onSubmit={Loginhadnler}>
                                <input className={classes.Logininput} placeholder="Email" type='email' name="email"  ref={inputemail} />
                                <input className= {classes.Logininput}  placeholder="Password"  type='password' name="password"  ref={inputpassword} />
                                <MDBBtn className={classes.btn} color='dark' size='lg' type="submit">Login</MDBBtn>
                            </form>
                            <Link to="Signup">Don't have an account? Register here</Link>
                        </MDBCardBody>


                    </MDBCol>


                </MDBRow>
            </MDBCard>


        </MDBContainer>
    )


};
export default Login;