import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../common/constants'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import $, { data } from 'jquery'
import './Lcard.css'
import SJ from '../images/SJ.jpg'
import ReactToPrint from 'react-to-print'
import React, { useRef } from 'react';
import { ComponentToPrint } from './ComponentToPrint';
//import { useLocation } from 'react-router'

const Pcard = () => {

  const [license, setLicense] = useState('')
  const isSignin = useSelector((state) => state.isSignin);
  const history = useHistory();
  const [status, setStatus] = useState('')
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [exDate, setExDate] = useState('')
  const [date1, setDate1] = useState('')
  const componentRef = useRef();

  useEffect(() => {
    console.log(`All Learning Permanent Details`)
    getLearning()
    getImage()
  }, [])


  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  const getLearning = () => {
    const id = isSignin.user.userId
    axios.get(url + '/license/permanent/' + id).then((response) => {
      const res = response.data
      if (res.status === 'OK') {

        const fullName = res.result.firstName + " " + res.result.lastName
        setName(fullName)
        console.log(license)
        console.log(license.createdAt)

        var date = new Date(res.result.createdAt);
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year1 = date.getFullYear() + 10;
        var year = date.getFullYear();
        if (month < 10) {
          month = "0" + month;
        }
        if (day < 10) {
          day = "0" + day;
        }

        var mindate = (year) + "-" + (month)
          + "-" + day;
        setDate1(mindate)

        var maxdate = (year1) + "-" + (month)
          + "-" + day;
        setExDate(maxdate)
        setLicense(res.result)
      }
    })
  }

  const getImage = () => {
    const id = isSignin.user.userId
    axios.get(url + '/user/getimage/' + id).then((response) => {
      const res = response.data
      if (res.status === 'OK')
        setImage(res.result)

    })
  }

  return (
    <div id='body'>
      <div className="card-container">
      <div className="card">
      <div className="print-button mt-5">
      <div style={{ alignContent: "center" }}>
        <ReactToPrint
          trigger={() => <a class="btn text-light bg-success" role="button" href="#">Print Permanent License</a>}
          content={() => componentRef.current}
        />
      </div>
      </div>
      {
        license != null ? (
          <div className='container-fluid' ref={componentRef}>

            <section id="div1" className='container-fluid'>
              <img className='img5' src={SJ} style={{ width: "70px", height: "70px", position: "relative", marginLeft: "0px", marginTop: "0px" }}></img><p id="p1">INDIAN UNION DRIVING LICENSE</p>
              <p id="p5"><p id='p6'>MAHARASTRA STATE MOTOR DRIVING LICENCE</p></p>


              <div id="div2">
                <p id="p2 text-justify"><label id="label1">Name:</label> <label id="label2">{name}</label></p>
                <p id="p2 text-justify" style={{ marginTop: "0px" }}><label id="label1">City:</label> <label id="label2">{license.district}</label></p>
                <p id="p2 text-justify"><label id="label1">D.O.B:</label> <label id="label2">{license.dob}</label></p>
                <p id="p2 text-justify"><label id="label1">ID NO:</label> <label id="label2">{license.applicantId}</label></p>
                <p id="p2 text-justify"><label id="label1">Expiry:</label> <label id="label2">{exDate}</label></p>
                <p id="p2 text-justify"><label id="label1">Gender:</label> <label id="label2">{license.gender}</label></p>


              </div>
              {
                image != '' ?
                  (<img className='img5' src={url +'/images/' + image} alt="" />) : (<div id='a1'><Link className="nav-link" to={{ pathname: "/user/addimage" }}>Upload Photo</Link></div>)
              }
              <table id='table'>
                <tr><td className='td5' >Vehicle Class</td><td td className='td5'>LMV</td><td td className='td5'>MCWG</td><td td className='td5'></td><td td className='td5'></td></tr>
                <tr><td td className='td5'>Date Of Issue</td><td td className='td5'>{date1}</td><td td className='td5'>{date1}</td><td td className='td5'></td><td td className='td5'></td></tr>
              </table>
            </section>
            <h5 id='h5' >PERMANENT LICENCE</h5>
          </div>
        ) : ''
      }
        </div>
        </div>
    </div>
  )
}

export default Pcard