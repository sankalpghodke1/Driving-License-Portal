import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { url } from "../common/constants";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const ForgotPassword = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is Required'),
    }),
    onSubmit: (values) => {
      findPassword(values);
    },
  });

  const findPassword = (data) => {
    axios.post(url + "/user/forgot", data).then((response) => {
      const result = response.data;

      if (result.status === "OK") {
        Swal.fire('Password has been sent to your email please check')
        history.push('/user/login')
      }
      else if (result.status === "BAD_REQUEST") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'please verify your email address. If it is not registered, please register first.',
        })
      }
      else {
      }
    });
  }

  return (
    <div className="container">
      <div className="row justify-content-center" style={{ marginTop: "2%", marginBottom: '2%' }}>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-body" style={{ textAlign: "center", fontFamily: "redressed georgia garamond serif" }}>
              <h4>Forgot Password</h4>
            </div>

            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>

                <div className="form-group">
                  <label htmlFor="email">Email Id:</label>
                  <input
                    type="email"
                    className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                    placeholder="Enter email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="invalid-feedback">{formik.errors.email}</div>
                  ) : null}
                </div>

                <button className="btn btn-primary mt-4 mx-auto d-block" type="submit">Submit</button>

                <p className="text-body" style={{ textAlign: "center" }}>
                  <br />
                  Not Registered ? <a href='/user/register' className="text-primary" style={{ textDecoration: "underline" }}>Create an account</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword;
