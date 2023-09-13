import React from 'react'
import {Link} from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="bottom">
        <div className="left">
          <div className='logo'>
            <Link className='link' to="/">
            <h2>Punk API</h2></Link>
          </div>
        </div>
        <div className="right">
          <span>Developed By <span className='btm-rt'><Link className='link' target="_blank" to="https://github.com/puneethx">T Puneeth Reddy</Link></span></span>
        </div>
      </div>
    </div>
  )
}

export default Footer