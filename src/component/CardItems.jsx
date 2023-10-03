import React from 'react'
import Card from './Card'

const CardItems = () => {
    return (
        <div className='container-xl' style={{padding:'4rem 2rem'}}>
            <h3>Explore Our Platform's Unique features</h3>
            <div className='d-flex justify-content-between mt-4'>
            <Card/>
        <Card/>
        <Card/>
            </div>
        </div>
    )
}

export default CardItems
