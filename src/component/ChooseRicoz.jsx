import React from 'react'
import image from  '../Image/Image1.png'
import Image1 from '../Image/Image3.png'
import Ricozcard from './Ricozcard'

const ChooseRicoz = () => {
    return (
        <div style={{backgroundColor:'#14121E'}}>
            <div className="container-md py-4">
                <h3 className='text-light text-center py-4'>Why Choose Ricoz?</h3>
                <div className="row text-light">
                    <div className="col-md-6 col-12 my-4 d-flex align-items-center justify-content-center">
                        {/* <div> */}
                        <img src={image} alt="" style={{height: "20rem"}}/>
                        {/* </div> */}
                        {/* <div className='bg-danger' style={{height:'2rem', width:"2rem"}}>

                        </div> */}
                    </div>
                    <div className="col-md-6 col-12 my-4">
                        <Ricozcard/>
                        <Ricozcard/>
                        <Ricozcard/>
                        <Ricozcard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseRicoz
