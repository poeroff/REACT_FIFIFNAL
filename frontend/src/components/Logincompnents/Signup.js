import React, { useState } from "react";
import Logo from "../../imgfile/model.jpg"

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
      
    const init = {
        email: "",
        password: "",
       
    }
    const submithandler = async (event) => {
        event.preventDefault()
        
        try {
            console.log(formData)
            const response = await fetch("http://localhost:2000/login/signup", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error("LOGIN ERROR");
            }
            setformData(init);

        }
        catch (err) {
            console.log(err)
        }
      


    }

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
                            <span className="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                        
                        <form onSubmit={submithandler}>
                            <MDBInput wrapperClass='mb-4' label='email'  type='email' name="email" size="lg" onChange={inputhandler}  />
                            <MDBInput  wrapperClass='mb-4' label='password'  type='password' name ="password" size="lg" onChange={inputhandler}  />
                            <MDBBtn className={classes.btn} color='dark' size='lg' type="submit">Sign up</MDBBtn>
                            
                        </form>
                    
                    </MDBCardBody>
                   
                    
                </MDBCol>
                

            </MDBRow>
        </MDBCard>


    </MDBContainer>
    )

}
export default Signup;