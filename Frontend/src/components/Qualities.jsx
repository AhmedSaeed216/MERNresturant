import React from 'react'
import {data} from "../restApi.json"
const Qualities = () => {
  return (
    <section className='qualities' id='qualities'>
        <div className="container">
            {data[0].ourQualities.map(element=>{
                return (
                <div className='card' key={element.id}>
                    <img src={element.image} alt="elemnt image" />
                    <p className='title'>{element.title}</p>
                    <p className='description'>{element.description}</p>

                </div>
            )})}
        </div>
        {/* <div>HIIHI</div> */}
    </section>
  )
}

export default Qualities