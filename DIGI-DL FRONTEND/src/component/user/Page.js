import axios from "axios";
import { useState, useEffect } from 'react'
//import { url } from "../common/constants";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './page.css';
import uicon from '../images/usericon.png'
import Swal from 'sweetalert2';

const Page = () => {


  const isSignin = useSelector((state) => state.isSignin);
  const history = useHistory();

  if (!isSignin.status) {
    Swal.fire({
      title: 'Not Signed In',
      text: 'Please sign in first!',
      icon: 'warning',
      showConfirmButton: false,
      timer: 500, // Display for 1.5 seconds
      onClose: () => {
        history.push('/user/login'); // Redirect to login route
      },
    });
  }
  const handleLogout = () => {
    Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to log out?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform logout actions here
        // alert('Logged out successfully');
        history.push('/user/logout'); // Redirect to logout route
      }
    });
  };

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);




  return (
    <div className="container">
      <div className="container mt-3">
      <div className="row justify-content-between">
        
        <div className="col-md-2" >
          <div className="card text-center text-white" style={{backgroundColor:"blueviolet"}}>
            <div className="card-body">
              <Link to="/license/learning" className="nav-link">
                Learning License
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <div className="card text-center" style={{backgroundColor:"springgreen"}}>
            <div className="card-body">
              <Link to="/license/permanent" className="nav-link">
                Permanent License
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <div className="card text-center" style={{backgroundColor:"skyblue"}}>
            <div className="card-body">
              <Link to="/user/mocktest" className="nav-link">
                Mock Test
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <div className="card text-center text-white" style={{backgroundColor:"purple"}}>
            <div className="card-body">
              <Link to="/user/status" className="nav-link">
                Status
              </Link>
            </div>
          </div>
        </div>
        

        <div className="col-md-2">
          <div className="card">
            <div className="card-body text-center" style={{backgroundColor:"paleturquoise"}}>
              <b style={{ color: "ActiveBorder", fontFamily: "" }}>
                Welcome {isSignin.user.firstName}
              </b>
              <div className="mt-3">
                <Link to="/user/logout" onClick={handleLogout} className="btn btn-bg-danger btn-info btn-sm">
                  Log Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

      <div className="container LL bg-success text-white">
        <h1>Learning License</h1>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <h4>Need for a Driving License</h4>
            <p>No person shall drive a motor vehicle in any public place unless he holds an effective driving license issued to him by the licensing authority , authosrising him to drive the vehicle.</p>
            <br />
            <h4>Licensing Authorities</h4>
            <p>The joint commisioner/deputy commisioner and the regional transport officers are the licensing authorities. The administrative officers and motor vehicle inspectors are the additional licensing authorities.</p>
          </div>

          <div className="col-md-6">
            <h4>Age limit to obtain Driving License</h4>
            <p>-An applicant who has completed sixteen years of age is eligible to apply for a driving license to drive a motor cycle with engine capacity below 55 cc subject to the condition that the parent or guardian should furnish a declaration in the manner prescribed.</p>
            <p>-The applicant who has completed the age of eighteen years of age is eligible to apply for a driving license to drive a motor vehicle other than a transport vehicle.</p>
            <p>-An applicant who has completed twenty years of age will be eligible for applying for a license to drive a transport vehicle.</p>
          </div>
        </div>
      </div>


      <div className="container DL bg-info text-white">
        <h1>Permanent License</h1>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <p>The faculty of online slot booking for test of completence of driving license has been provided. Please visit the website for scheduling an appointment.</p>
            <br />
            <h4>Procedure:</h4>
            <p>-Schedule an appointment for the test of competence online by visiting the website or any RTO office where such facility exists. In other cases schedule an appointment directly at the office concerned.</p>
            <p>-An application in Form 4, for a permanent driving license shall be made along with the learner's license obtained for such class of vehicle.</p>
            <p>-The applicant who has held a valid Learner's license, for a period of at least 30 days, shall be competent to appear for the test of competence.</p>
          </div>

          <div className="col-md-6">
            <p>-The test of competence will be conducted by the competent authority.</p>
            <p>-The applicant should bring a vehicle of the type to which the application relates.</p>
            <p>-The application should satisfy the officer conducting the test regarding his capability to drive the vehicle and his ability to perform the tasks specified in Rule-15(2) of the CMVR.</p>
            <p>-The candidate who passes the test of competence successfully will be issued with a driving license and sent through speed post to the address furnished.</p>
            <p>-Fees as prescribed along with user charges.</p>
          </div>
        </div>
      </div>

      <hr />     

    </div>
  )
}

export default Page;