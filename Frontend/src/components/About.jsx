import React from 'react'
import { Link } from 'react-scroll'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">
                        ABOUT Us
                    </h1>
                    <p>Grab Your Meal Now!</p>
                </div>
                <p className='mid'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis soluta tempora recusandae quasi eveniet dolore cum temporibus a, fugiat quas eligendi dolorem possimus blanditiis, assumenda ratione vero quidem maiores eos sequi quam voluptate asperiores. Nihil laudantium omnis a aperiam eius?</p>
                <Link to={'/'}>Explore Menu <span>
                    <HiOutlineArrowNarrowRight/>
                    </span></Link>
                </div>

                <div className="banner">
                    <img src="/about.png" alt="About" />
                </div>
        </div>

    </section>
  )
}

export default About