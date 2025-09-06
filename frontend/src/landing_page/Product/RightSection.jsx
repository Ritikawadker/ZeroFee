import React from 'react'

function RightSection({
  productName,
  productDescription,
  tryDemo,
  imageURL,
}) {
  return (
    <div className='container p-5'>
      <div className='row'>
     
        <div className='col-6  '>
            <div style={{marginTop:"9rem", marginLeft:"5rem"}} >
            <h2>{productName}</h2><br />
            <p style={{ width: "350px" }}>{productDescription}</p>
            <a style={{ textDecoration: "none" }} href={tryDemo}>Learn more<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
     </div>
        </div>
        <div className='col-6 '>
          <div style={{marginLeft:"-4rem"}}>
          <img  src={imageURL} alt="" />
          </div>
        </div>
       
           



      </div>
    </div>
  )
}

export default RightSection
