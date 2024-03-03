import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { url } from '../common/constants';
import { Redirect } from 'react-router-dom';

const Feedbacks = () => {
  const [contacts, setContacts] = useState([]);
  const isSignin = useSelector((state) => state.isSignin);
  const history = useHistory();

  useEffect(() => {
     getContacts();
  }, []);

  const getContacts = () => {
    axios.get(url + '/admin/getFeedback').then((response) => {
      const res = response.data;
      if (res.status === 'OK') {
        setContacts(res.result);
      } else {
        alert('Error while loading list of Contacts');
      }
    });
  };

  if (!isSignin) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link active" to={{ pathname: '/adminpage' }}>
            Users List
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={{ pathname: '/feedback' }}>
            Feedbacks
          </Link>
        </li>
      </ul>
      <nav className="navbar navbar-expand-sm">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <a className="nav-link" href="/rtoregister">
              <button type="button" className="btn bg-danger my-2 my-sm-0 text-white">
                Register RTO Officer
              </button>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/">
              <button type="button" className="btn bg-danger my-2 my-sm-0 text-white">
                Log Out
              </button>
            </a>
          </li>
        </ul>
      </nav>
      <div className="container-fluid mt-2">
        {/* Contact Info Table */}
        <h2 className="bg-light" style={{ textAlign: 'center', fontFamily: 'redressed georgia garamond serif' }}>
          Contact Info
        </h2>
        <table className="table table-bordered table-hover table-secondary">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.subject}</td>
                <td>{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Feedbacks;