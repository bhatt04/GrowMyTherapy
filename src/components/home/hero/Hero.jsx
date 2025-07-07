import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="/images/water.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME ' title='Grow My Therapy' />
            <p>Design beautiful, easy-to-use websites for mental health professionals — helping you get found online and convert website visitors into clients.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW DETAILS <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin-home"></div>
    </>
  )
}

export default Hero
