import React from 'react';
import Image1 from '../Image/logo.png'

const NavBar = () => {
    return (
        <div className='p-3' style={{backgroundColor: "#14121D"}}>
            <div className="container-md">
                <div className="row">
                    <div className="col-3">
                        <h2 className='text-light'>
                            <img src={Image1} alt="logo image" style={{height:'3rem'}} />
                        </h2>
                    </div>
                    <div className="col-6 d-sm-block d-none text-light">
                        <ul className='list-unstyled d-flex justify-content-between my-2'>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Courses</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-3 text-md-center text-end d-sm-block d-none">
                        <button className='btn btn-primary rounded-pill p-'>
                            Sign Up
                        </button>
                    </div>
                    <div className="col-9 d-sm-none d-block text-end text-light">
                        <h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
