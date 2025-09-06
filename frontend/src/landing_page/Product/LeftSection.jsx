import React from 'react'

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className='container p-5'>
      <div className='row '>
        <div className='col-6 p-5 '>
    <img src={imageURL} alt="" />
        </div>
           
        <div className='col-5 p-5 mt-5 mx-5' >
          <div style={{marginLeft:"80px"}} >
          <h2>{productName}</h2><br />
          <p style={{width:"350px"}}>{productDescription}</p>
          <a style={{textDecoration:"none"}} href={tryDemo}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <a style={{textDecoration:"none" , marginLeft:"60px"}} href={learnMore}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a><br /><br />
          <a href={googlePlay}> <img src="media/images/googlePlayBadge.svg" /> </a> &nbsp; &nbsp; &nbsp;
           <a href={appStore}><img src="media/images/appstoreBadge.svg" /> </a>
         </div>
        </div>
                <div className='col-1'>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
