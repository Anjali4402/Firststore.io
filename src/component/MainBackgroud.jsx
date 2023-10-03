import React from 'react';
import Image1 from '../Image/Image3.png'

const MainBackgroud = () => {
    return (
        <div className='cutom-color' style={{height:'30rem'}}>
            <div className="container-md h-100 pt-5 px-0" >
                <div className="row m-2 text-light" style={{height: '90%'}}>
                    <div className="col-sm-6 col-12 d-flex justify-content-center align-items-center">
                        {/* <div className='border h-100 d-flex justify-content-center align-items-center'> */}
                            <div>
                            <h2>Discover Top Tech Professionals In Minutes. </h2>
                            <p>Streamline Your Business Needs with Ricoz's All-in-One Tech Service Hub.</p>
                            <button className='btn rounded-pill text-light' style={{backgroundColor:'#0030FF'}}>
                                Get Started
                            </button>
                            </div>
                        {/* </div> */}
                    </div>

                    <div className="col-6  d-sm-block d-none overflow-hidden">
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={Image1} alt="" height='305 rem' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBackgroud
