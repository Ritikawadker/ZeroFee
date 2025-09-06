import React from 'react'

function Universe() {
  return (
    <div className='container'>
      <div className='row mb-5'>

        <div className='text-center'>
          <h5 className='text-muted'>Want to know more about our technology stack? Check out the <a href="">Zerodha.tech</a> blog.</h5><br /><br /><br /><br />
          <h4>The Zerodha Universe</h4><br />
          <p>Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className='col-2 mt-5'></div>
        <div className='col-3 p-3 mt-4'>
          <img style={{width:"200px"}} src="media/images/smallcaseLogo.png" alt="" /><br /><br />
          <p className='text-small text-muted'>Thematic investment plateform</p>
        </div>
        <div className='col-3 p-3 mt-4'>
          <img style={{width:"200px"}} src="media/images/streakLogo.png" alt="" /><br /><br />
          <p className='text-small  text-muted'>Algo & strategy plateform</p>
        </div>
        <div className='col-3 p-3 mt-5'>
          <img style={{width:"200px"}} src="media/images/sensibullLogo.svg" alt="" /><br /><br />
          <p className='text-small text-muted'>Options trading plateform</p>
        </div>
        <div className='col-1 mt-5'></div>

        <div className='col-2 mt-5'></div>
        <div className='col-3 p-3 mt-5'>
          <img style={{width:"200px"}} src="media/images/zerodhaFundhouse.png" alt="" /><br /><br />
          <p className='text-small text-muted'>Asset management</p>
        </div>
        <div className='col-3 p-3 mt-5'>
          <img style={{width:"200px"}}  src="media/images/goldenpiLogo.png" alt="" /><br /><br />
          <p className='text-small text-muted'>Bonds trading plateform</p>
        </div>
        <div className='col-3 p-3 mt-5'>

        </div>
        <div className='col-1 mt-5'></div>
        <div className='text-center mt-5 mb-5'>

          <button className='btn btn-primary '>Sign up for free</button>
        </div>
      </div>

    </div>
  )
}

export default Universe
