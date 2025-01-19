import React from 'react'
import './Hero.css'
import videosource from './assets/bgvid.mp4'

const Hero = () =>{
    return(
        <>
        <div className="videocon">
            <video autoPlay loop muted className='bgvidmp4'>
                <source src={videosource} type='video/webm' />
            </video>
            <div className="content">
                <h1>FIRSTFLIGHT TRAVELS</h1>
                <p>Plan your trip with us and travel around the world with the most affordable packages!</p>
            </div>
        </div>
        </>
    )
}

export default Hero