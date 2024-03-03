import React from 'react';
import "./HorizontalMarquee.css";
function HorizontalMarquee() {
  return (
    <div className="container-fluid p-3 my-3">
      <div className="row">
        <div className="col-md-12">
          <div className="marquee-container">
            <marquee behavior="scroll" direction="left" scrollamount="6">
              <span className="marquee-text">
              RTO License Portal |  Learning License  | Permanent License 

              </span>
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalMarquee;


