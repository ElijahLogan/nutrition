import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';






const Landing = () => {
  return (
    <Fragment>
      <section className='landing'>
        <div className='text-container'>

          <div className='text-box'>
            <h1 className='hero_content'>Get to a healthier and more active diet with Lockscreen Nutrition</h1>

            <p>
              It's hard to know if you're getting the macronutrients you need to stay healthy.  
        </p>
          </div>

        </div>
        { /* seperation between text and imae container */}

        <div className='image-container' >

          <div className='cover-photo'>

          </div>

        </div>

      </section>
      { /* seperation between sections */}
      <section className='landing'>

        { /* seperation between text and imae container */}

        <div className='image-container' id="color">

          <div className='cover-photo-two' >

          </div>

        </div>

        { /* seperation between text and imae container */}

        <div className='text-container' id="color">

          <div className='text-box'>
            <h1 className='hero_content'> Gain a better understanding of your eating habits </h1>

            <p>
              Live a healthier life by makung nutrition tracking simple and fun 
        </p>
          </div>

        </div>

      </section>

    </Fragment>



  )
}

export default Landing