import React, { useState, useEffect } from 'react';     // import necessay modules and components from react
import axios from 'axios';                             //axios used for making http request
import { useSelector } from 'react-redux';             //useselector for accessing Redux state           
import { useHistory } from 'react-router-dom';         // usehistory for navigation history
import { Link } from 'react-router-dom';              //  Link for creating links in React Router
import { url } from '../common/constants';            //url from constant files
import { Redirect } from 'react-router-dom';          //redirect for redirecting another router



const AdminPage = () => {                               //admin page is functional component defined here.
  const [users, setUsers] = useState([]);               //It initializes state variable users and officers using the useState hook to store user and officer data fetched from the server.
  const [officers, setOfficers] = useState([]);         
  const isSignin = useSelector((state) => state.isSignin);  // It also uses the useselector hook to get the isSignin state from redux,indicating whether the user is signed in or not.
  const history = useHistory();                             //usehistory hook is used to get access to the navigation history.

  useEffect(() => {                                         //useeffect component is called when the component mounts
    getUsers();                                             //It invokes getusers and getofficer function to fetch user and officer data from the server.
    getOfficers();
  }, []);                                                   //The empty dependency array [] ensures that this effect runs only once after the initial render.

  const getUsers = () => {                                    
    axios.get(url + '/admin/userList').then((response) => {
      const res = response.data;
      if (res.status === 'OK') {
        setUsers(res.result);
      } else {
        alert('Error while loading list of Users');
      }
    });                                                           // getUsers and getOfficers functions use axios to make HTTP GET requests to fetch the list of users and officers from the server. Upon successful response, it updates the state variables users and officers with the received data. If there's an error, it shows an alert.
  };

  const getOfficers = () => {                                       
    axios.get(url + '/admin/officerList').then((response) => {
      const res = response.data;
      if (res.status === 'OK') {
        setOfficers(res.result);
      } else {
        alert('Error while loading list of Officers');
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
        {/* Users Table */}
        <h2 className="bg-light" style={{ textAlign: 'center', fontFamily: 'redressed georgia garamond serif' }}>
          Users List
        </h2>
        <table className="table table-bordered table-hover table-secondary">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Officers Table */}
        <h2 className="bg-light" style={{ textAlign: 'center', fontFamily: 'redressed georgia garamond serif' }}>
          Officers List
        </h2>
        <table className="table table-bordered table-hover table-secondary">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {officers.map((officer) => (
              <tr key={officer.id}>
                <td>{officer.firstName} {officer.lastName}</td>
                <td>{officer.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
