import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
const NotFound = () => {
    return (
        <section className='notFound'>
            <div className="container">
                <img src="/notFound.svg" alt="Not found" />
                <h1>Look like you are lost</h1>
                <p>We cant seem to find ypu the page you are looking for </p>
                <Link to={"/"}>Back To Home <span>{HiOutlineArrowNarrowRight}</span></Link>
                <p></p>
            </div>
        </section>
    )
}

export default NotFound