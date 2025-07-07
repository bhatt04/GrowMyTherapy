import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome '>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/image.png' alt='' className="w-full max-w-[500px] max-h-[250px] object-contain mx-auto"/>

          </div>
          <div className='right row'>
            <Heading subtitle='LEARN About' title='Dr. Serena Blake, PsyD (Clinical Psychologist)' />
            <div className='item flexSB'>
              <div className='text'>
                <h2>About Me</h2>
                  <p>
                      A licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. 
                  </p>
              </div>
            </div>

            <div className='item flexSB'>
              <div className='text'>
                  <p>
                      She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Meeting her in Maplewood Drive office or connecting virtually, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                  </p>
              </div>
            </div>

          <div className='item flexSB'>
    <div className='text'>
      <h2>Services & Specialties</h2>
      <ul>
        <li>Anxiety & Stress Management</li>
        <li>Relationship Counseling</li>
        <li>Trauma Recovery</li>
      </ul>
    </div>
  </div>

  <div className='item flexSB'>
    <div className='text'>
      <h2>Session Fees</h2>
      <ul>
        <li>$200 / individual session</li>
        <li>$240 / couples session</li>
      </ul>
    </div>
  </div>

  <div className='item flexSB'>
    <div className='text'>
      <h2>FAQs</h2>
      <ul>
        <li><strong>Do you accept insurance?</strong> No, but a superbill is provided for self-submission.</li>
        <li><strong>Are online sessions available?</strong> Yes—all virtual sessions via Zoom.</li>
        <li><strong>What is your cancellation policy?</strong> 24-hour notice required.</li>
      </ul>
    </div>
  </div>
          </div>
        </div>
      </section>
      <div className='margin-home'></div>
      <Awrapper />
    </>
  )
}

export default AboutCard
