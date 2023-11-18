// import { Link } from 'react-router-dom'
import { useState } from 'react';
import React from 'react'
import anuj from '../images/anuj.jpeg'
import correcticon from '../images/correcticon.jpg'
import eye from '../images/eye.png'
// import facebook from '../images/facebook.png'
// import fav from '../images/fav.png'
// import star from '../images/star.png'
import face1 from "../images/Facebook_Thumb_icon.svg"
import heart1 from "../images/heart.svg"
import star2 from "../images/star12.svg"
export const Header = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);
    const [count1, setCount1] = useState(0);
    const [heart, setHeart] = useState(0);
    const [star1, setStar] = useState(0);
    const increase = () => {
        setCount(count + 1);
    }
    const increase1 = () => {
        setData(data + 1);
    }
    const increasecount = () => {
        setCount1(count1 + 1);
    }
    const increaseheart = () => {
        setHeart(heart + 1);
    }
    const increasestar = () => {
        setStar(star1 + 1);
    }









    return (
        <>
            <div>
                <header className='HeaderStyle'>
                    <img src={anuj} alt="not found" className='anujimg' />
                    <span className='n1'>Anuj Gosalia</span>
                    <span>
                        <img src={correcticon} alt="not found" className="icon"></img>

                    </span>
                    <button onClick={increase} className='header-button'>{count}</button>
                    <h3 className='f1'>followers</h3>
                    <button onClick={increase1} className='header-button'>{data}</button>
                    <h3 className='f2'>following</h3>


                </header>


            </div>
            <div className='founder'>
                <h2>Co-founder & CEO at Terribly Tiny Tales   </h2>
                <a href="http://www.instagram.com/anujgosalia" target="_blank" rel="noopener noreferrer" className='l4'>
                http://www.instagram.com/anujgosalia
                </a>

            </div>
            <div className='logoitems'>
                <ul className='fav'>
                    <img src={eye} alt="Logo" className="p1"></img>
                    <span className="b1">125</span>
                    <button onClick={increasecount} className="thumb-button">
                        <img src={face1} alt="Logo" className="p2"></img>
                    </button>

                    <span className="b2">{count1}</span>
                    <button onClick={increaseheart} className='heart'>
                        <img src={heart1} alt="Logo" className="p3"></img>
                    </button>

                    <span className='b3'>{heart}</span>
                    <button onClick={increasestar} className='star1'>
                        <img src={star2} alt="Logo" className="p4"></img>
                    </button>

                    <span className='b4'>{star1}</span>
                </ul>
                <h2 className='po'>134 Posts</h2>
                <hr></hr>
            </div>
        </>



    )
}

export default Header
