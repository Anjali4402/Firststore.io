import React from 'react'

const Card = () => {
    return (
        <div class="card text-light" style={{width: '18rem', backgroundColor:'#17245B'}}>
            <div class="card-body p-4">
                <div className='border d-inline' style={{backgroundColor:'white', color:'black' , borderRadius:'2rem', padding:'5px 6px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                    </svg>
                </div>
                <h5 class="card-title mt-2">Wide Range Of Services</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et cumque harum labore a esse tenetur ullam voluptatibus animi magnam!</p>
            </div>
        </div>
    )
}

export default Card
