import React from 'react'
import logo from "./images/logo.png"
import bridge from "./images/bridge.jpg"
import {Navv} from "./Navv.css"
 export const Main = () => {
  return (
    <>
     <div id='container'>
      <nav className="nav1">
        <ul className="l1">
            <div className='img'>
            <img src={logo} alt="not found" height="40px" width="100"/>
            </div>
            
            <li className='str1'>|</li>
            <li className='str'><a href=''> STORIES</a></li>
            <button className="btn">courses</button>
        </ul>
      </nav>
    </div>
    <div >
    <img src={bridge} alt="not found" className='img2'/>
    </div>
    </>
    
  )
}

export default Main
