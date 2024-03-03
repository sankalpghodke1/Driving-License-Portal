import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function HorizontalCard() {
    return (
      <>
    <div className="container-fluid p-3 my-3" >
        <h1 className='text-center'>License Related Services</h1>
        <p className='text-center'>Various services related to new/old driving licence or learner's licence like Appointment Booking, Duplicate driving licence, Application Status, Online test for learner's licence, etc</p>
      <div className="row mt-3">
        <div className="col-md-3">
          <div className="card text-center" style={{ borderColor:"steelblue", borderRadius: '30px', cursor: 'pointer' }} >
            <img
              src="https://parivahan.gov.in/parivahan//sites/default/files/images/v-learners-license-services.png"
              className="card-img-top mx-auto"
              alt="Card"
              style={{ width: '150px', height: '150px', objectFit: 'cover',  }}
            />
            <div className="card-body">
              <h5 className="card-title">Drivers/ Learners License</h5>
              <p className="card-text">License registration on your fingertips</p>
              <a href='/user/login'><button className="btn btn-primary btn-sm">more</button></a> 
              {/* <Link to="/user/login" className="btn btn-primary btn-sm w-100">more</Link> */}
            </div>
          </div>
        </div>

        
        
        <div className="col-md-3">
          <div className="card text-center" style={{ border: 'none', borderRadius: '30px', cursor: 'pointer' }}>
            <img
              src="https://parivahan.gov.in/parivahan//sites/default/files/images/v-driving-school-license.png"
              className="card-img-top mx-auto"
              alt="Card"
              style={{ width: '120px', height: '120px', objectFit: 'cover',  }}
            />
            <div className="card-body">
              <h5 className="card-title">Driving School</h5>
              <p className="card-text">One place for application of Driving School License</p>
              <a href="/user/drivingschool">
                  <button className="btn btn-primary btn-sm">more</button>
              </a>
              {/* <Link to="/user/drivingschool" className="btn btn-primary btn-sm w-100">more</Link> */}
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center" style={{ border: 'none', borderRadius: '30px', cursor: 'pointer' }}>
            <img
              src="https://parivahan.gov.in/parivahan//sites/default/files/images/v-online-test-appointment.png"
              className="card-img-top mx-auto"
              alt="Card"
              style={{ width: '150px', height: '150px', objectFit: 'cover',  }}
            />
            <div className="card-body">
              <h5 className="card-title">Online Test/ Appointment</h5>
              <p className="card-text">Book/ Modify Online test appointments</p>
              {/* <button className="btn btn-primary btn-sm">more</button> */}
              {/* <Link to="/user/login" className="btn btn-primary btn-sm w-100">more</Link> */}
              <a href="/user/login">
                  <button className="btn btn-primary btn-sm">more</button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center" style={{ border: 'none', borderRadius: '30px', cursor: 'pointer' }}>
            <img
              src="https://parivahan.gov.in/parivahan//sites/default/files/images/v-driving-license.png"
              className="card-img-top mx-auto"
              alt="Card"
              style={{ width: '120px', height: '120px', objectFit: 'cover',  }}
            />
            <div className="card-body">
              <h5 className="card-title">Other Services</h5>
              <p className="card-text">Explore the plethora of services related to Driving License</p>
              {/* <button className="btn btn-primary btn-sm">more</button> */}
              {/* <Link to="/user/login" className="btn btn-primary btn-sm w-100">more</Link> */}
              <a href="/user/login">
                  <button className="btn btn-primary btn-sm">more</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

      
    </>
  );
}

export default HorizontalCard;


