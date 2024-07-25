import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p className='footer-head'>About Us</p>
      <p className='footer-p'>Welcome to MarvelHub, your ultimate destination for all things Marvel! We're passionate fans who love diving into the Marvel Universe and sharing our enthusiasm with fellow fans. From the latest news and updates to in-depth analysis and fan theories, we've got you covered!</p>

      <hr className='footer-hr'/>

      <p className='footer-head'>Legal Disclaimer</p>
      <p className='footer-p'>This website is a fan-made project and is not affiliated with Marvel Studios or The Walt Disney Company. All Marvel characters, logos, and images are the property of their respective owners. We do not claim any ownership of the Marvel Universe.</p>

      <hr className='footer-hr'/>

      <p className='footer-head-last'>Copyright © 2024 MarvelHub. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
