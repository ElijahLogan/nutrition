import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom';






const Log = () => {
  
  
  
    return (
      <Fragment>
              <section className='landing'>

{ /* seperation between text and imae container */}

<div className='image-container' id="color">

  <div className='cover-photo-three' >

  </div>

</div>

{ /* seperation between text and imae container */}

<div className='text-container' id="color">

  <div className='text-box'>
    <h1 className='hero_content'>Meal Composition</h1>

    <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
Fat    <span class="badge badge-primary badge-pill">14.83</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
Mass    <span class="badge badge-primary badge-pill">200.08</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
calories    <span class="badge badge-primary badge-pill">244.09</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
carb    <span class="badge badge-primary badge-pill">18.65</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
Protein <span class="badge badge-primary badge-pill">11.55</span>
  </li>
</ul>
  </div>

</div>

</section>
      </Fragment>
    );
  
}

export default Log
