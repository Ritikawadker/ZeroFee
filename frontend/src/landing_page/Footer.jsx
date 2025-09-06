import React from 'react'

function Footer() {
  return (
    <div className='footer p-5 border-top '>
      <div className='row mt-5 ms-5'>
        <div className='col'>
          <img src="media/images/logo.svg" style={{ width: "180px" }} alt="" />
          <p className='mt-4 fs-6'>&copy; 2010-2025, Not Zerodha Broking <br />limited, all rights reserved.</p>
        </div>
        <div className='col' >
          <p className='fs-5'>Company</p>
          <div className='footer_a' >
          <a  href="">About</a><br />
          <a href="">Products</a><br />
          <a href="">Pricing</a><br />
          <a href="">Referral programee</a><br />
          <a href="">Careers</a><br />
          <a href="">Press & Media</a>
          </div>
        </div>

        <div className='col'>
          <p className='fs-5'>Support</p>
          <div className='footer_a' >
          <a href="">Contact</a><br />
          <a href="">Support portal</a><br />
          <a href="">Z-connect blog</a><br />
          <a href="">Download & resources</a>
          </div>
        </div>

        <div className='col'>
          <p className='fs-5'>Account</p>
          <div className='footer_a' >
          <a href="">Open an account</a><br />
          <a href="">Fund transfer</a><br />
          <a href="">60 day challenge</a><br />
          </div>
        </div>
      </div>
      <div className='footer-content'>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
          </div>
    </div>
  )
}

export default Footer
