import React from 'react'

function Hero() {
  return (
    <div className='container p-5'>
      <div className='row text-center'>
        <img src="media/images/homeHero.png" alt="hero image" className='mb-5' />
        <h1 className='mb-2'>Invest in everything</h1>
        <p>Online plateform to invest in stocks, derivatives, mutual funds, and more</p>
        <button className='btn btn-primary col-2 fs-5' style={{marginLeft: "500px"}}>Signup Now</button>
      </div>
      
    </div>
  )
}

export default Hero
