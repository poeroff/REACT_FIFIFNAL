import React, { useState } from "react";
import Logo from "../../imgfile/Login.webp"

import classes from "./Login.module.css"
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




const Login = () => {
    
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

                            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
                            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

                            <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>

                            <Link to="Signup">Don't have an account? Register here</Link>
                        </MDBCardBody>
                       
                        
                    </MDBCol>
                    

                </MDBRow>
            </MDBCard>


        </MDBContainer>
    )


};
export default Login;