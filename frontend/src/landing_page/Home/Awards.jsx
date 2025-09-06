import React from 'react'

function Awards() {
  return (
    <div className='container mt-5 p-3'>
      <div className='row'>
        <div className='col-6'>
          <img src="media/images/largestBroker.svg" alt="largest broker" />
        </div>
        <div className='col-6 mt-5'>
         <h2>Largest stock broker in India</h2>
         <p>5+ million Zerodha clients contribute to over 50% of all retails order volumes in India daily by trading and investing in:</p>
         <div className='row mt-5'>
          <div className='col-6'>
            <ul>
              <li> <p> Future and Options </p></li>
              <li> <p>Commodity derivatives </p></li>
              <li> <p>Currency derivatives </p></li>
            </ul>
          </div>
          <div className='col-6'>
            <ul>
              <li> <p>Stocks and IPOs </p></li>
              <li> <p>Direct mutual funds </p></li>
              <li> <p>Bonds and Govt. Securities </p></li>
            </ul>
          </div>
         </div>
         <img style={{width:"500px",marginLeft:"12px", marginTop:"10px"}} src="media/images/pressLogos.png" alt="press logos" />
      </div>
      </div>
    </div>
  )
}

export default Awards
