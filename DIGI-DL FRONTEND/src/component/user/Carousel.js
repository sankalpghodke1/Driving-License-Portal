import React from 'react'
import pic1 from '../images/12.jpg'
import pic2 from '../images/13.jpg'
import pic4 from '../images/14.jpg'
import { Link } from 'react-router-dom'
import { AlignMiddle } from 'react-bootstrap-icons'

function Carousel() {
  return (
    <div className="">
        <div className='d-flex justify-content-left'>
  <Link to="/rtologin" className="btn btn-danger mr-3 col-md-1">RTO OFFICER</Link>
</div>



         <div id="id" className='carousel slide' data-bs-ride="true">

{/* <!-- Indicators --> */}
<ul className="carousel-indicators">
    <li data-target="#id" data-slide-to="0" className="active"></li>
    <li data-target="#id" data-slide-to="1"></li>
    <li data-target="#id" data-slide-to="2"></li>
    <li data-target="#id" data-slide-to="3"></li>
</ul>
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./13.jpg" class="d-block w-80"  alt="..." width="100%" height="600"  />
    </div>
    <div class="carousel-item">
      <img src="./12.jpg" class="d-block w-80" alt="..." width="100%" height="600" />
    </div>
    <div class="carousel-item">
      <img src="./14.jpg" class="d-block w-80" alt="..." width="100%" height="600" />
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{/* <!-- Left and right controls --> */}
<a className="carousel-control-prev" href="#id" data-slide="prev"> <span
    className="carousel-control-prev-icon"></span>
</a> <a className="carousel-control-next" href="#id" data-slide="next"> <span
    className="carousel-control-next-icon"></span>
</a>
</div>




<div className='d-flex justify-content-center'>
  <Link to="/user/login" className="btn btn-success mr-3 col-md-3">Login</Link>
  <Link to="/user/register" className="btn btn-primary col-md-3">Register</Link>
</div>




    </div>
    
  )
}

export default Carousel