import React from 'react';

function Notification() {
  return (
    <div className="container-fluid p-3 my-3">
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card" style={{ height: '300px' }}>
            <div className="card-header">Services</div>
            <div className="card-body">
              <ul>
                <li>
                  Learning License and Permanent License : Provides<br />
                  application form and other details regarding the same.
                </li>
                <li>Work In Progress : Giving the demo test and getting the notification from the system.</li>
                <li>The main motto is to bring transparency in all the related operations.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card" style={{ height: '300px' , color:"red"}}>
            <div className="card-header">Information/Notification</div>
            <div className="card-body">
              <marquee width="100%" direction="up" height="200px">
                <ul>
                  <li>
                    As of 1st October-2020, Indians need to follow an altered set of rules, which changes the guidelines set forth in
                    the Central Motor Vehicles Rules 1989.
                  </li>
                  <li>
                    Carrying these documents increased the chances of misplacing them. With digital storage facilities, drivers can
                    now leave the original documents safely at home.
                  </li>
                  <li>
                    An important change in the rules is the legalization of using mobile phones for navigation while driving. Most
                    drivers today rely on their phone’s map application for real-time GPS location tracking.
                  </li>
                </ul>
              </marquee>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card" style={{ height: '300px' }}>
            <div className="card-header">Queries</div>
            <div className="card-body">
              <ul>
                <li>Know Documents Required.</li>
                <li>Update about Terms and Condition.</li>
                <li>State Transport Department 24x7 helpline.</li>
              </ul>

              <h6 className="text-dark">Note:</h6>
              <p>
                The Queries section is based on frequently asked questions by users. Click on the links of respective queries to know
                more about it, and if the issue still persists kindly contact using the contact us option.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
