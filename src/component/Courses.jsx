import React from 'react';
import Image3 from '../Image/courses.png';

const Courses = () => {
    return (
        <div className='bg-light'>
            <div className="container-xl" style={{padding:"4rem 0rem"}}>
                <div className='mb-4 d-flex justify-content-between'style={{paddingLeft:'3rem'}} >
                    <div>
                        <h3>Unlock New Skills with Our Courses</h3>
                        <p>Learn and Grow at Your Own Pace.</p>
                    </div>
                    <div>
                        <button className='text-nowrap btn btn-primary rounded-pill'>
                            Explore More
                        </button>
                    </div>
                </div>
            <div className='d-flex justify-content-around'>
                {/* first card */}
                <div class="card" style={{width: "18rem"}}>
                    <img class="card-img-top"  src={Image3} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Web Development Mastery</h5>
                        <p class="card-text">Master the art of web development with our comperhensive course. learn coding, design and deployment</p>
                        <a href="#" class="btn text-primary">Learn more -</a>
                    </div>
                </div>

                {/* second card */}
                <div class="card d-sm-block d-none" style={{width: "18rem"}}>
                    <img class="card-img-top"  src={Image3} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Digital Marketing Fundamentals</h5>
                        <p class="card-text">navigate the digital landscope. to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn text-primary">Learn more -</a>
                    </div>
                </div>

                    {/* third card */}
                <div class="card d-lg-block d-none" style={{width: "18rem"}}>
                    <img class="card-img-top"  src={Image3} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">graphic Design Fundamentals</h5>
                        <p class="card-text">Unleash your creativity with to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn text-primary">Learn more -</a>
                    </div>
                </div>
            </div>



            </div>
        </div>
    )
}

export default Courses
