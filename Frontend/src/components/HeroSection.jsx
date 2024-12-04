import React from 'react'
import hero1 from "../../public/hero1.png"
import threeLines from "../../public/threeLines.svg"
import logo from "../../public/logo.svg"
import hero2 from "../../public/hero2.png"
import Navbar from './Navbar'
const HeroSection = () => {
    return (
        <section className='heroSection' id='heroSection'>
            <Navbar />
            <div className="container">
                <div className="banner">
                    <div className="largeBox"><h1 className='title'>Delicious</h1></div>
                    <div className="combined_boxes">
                        <div className="imageBox">
                            <img src={hero1} alt="hero1" />
                        </div>
                        <div className="textAndLogo">
                            <div className="textWithSvg">
                                <h1 className='title'>Food</h1>
                                <h1 className='title dishes_title'>Dishes</h1>
                                <img src={threeLines} alt="three lines" />
                            </div>
                            <img src={logo} alt="logo" className='logo' />
                        </div>
                    </div>
                </div>

                <div className="banner">
                    <div className="imageBox">
                        <img src={hero2} alt="hero2" />

                    </div>
                    <h1 className='title dishes_title'>Dishes</h1>
                </div>
            </div>
        </section>
    )
}

export default HeroSection