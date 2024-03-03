import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function AboutUs() {
  return (
<>
    <Tabs
      defaultActiveKey="home"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="About US">
      The Ministry of Road Transport & Highways (MoRTH) has been facilitating computerization of over 1300+ Road Transport Offices (RTOs) across the country. RTOs issue Registration Certificate (R.C.) & Driving License (D.L.) that are mandatory requirements and are valid across the country, subject to certain provisions and permissions.
      <div className="container mt-4">
    <div className="row md-6">
    <h3>Pune RTO office Location</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.1152926433183!2d73.8626276263713!3d18.53057719671644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c05c29345c63%3A0xff1ba18a1cf0f716!2sRTO%20Pune!5e0!3m2!1sen!2sin!4v1691389387477!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> 
    </iframe>

    <h3 className='mt-4'>Chatrapati Sambhaji Nagar RTO office Location</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.0259368883408!2d75.21757728585466!3d19.881126670340862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9a6c3b98e759%3A0xb0815629c3ee9629!2sAurangabad%20Rto!5e0!3m2!1sen!2sin!4v1691389744255!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    
    </div>
    </div>
<br />
<br />
With wide variations in state policies and manual/ system based procedures being followed across the country, it had become necessary to define same standards for these documents on a pan-India level to ensure interoperability, correctness and timely availability of information. SCOSTA committee setup for this purpose had recommended a uniform standardized software across the country. The Ministry thus entrusted National Informatics Centre (N.I.C.) with the task of standardizing & deploying two softwares - VAHAN for Vehicle Registration and SARATHI for Driving Licenses and of compiling the data with respect to Vehicle Registration and Driving Licenses of all the states in State Register and National Register.The applications VAHAN & SARATHI were conceptualized to capture the functionalities as mandated by Central Motor Vehicle Act, 1988 as well as State motor vehicle Rules with customization in the core product to suit the requirements of 36 States and UTs.
      </Tab>
      {/* <Tab eventKey="profile" title="our vision" >
      
Our vision for the Driving License Portal is to create a seamless, user-centric platform that revolutionizes the way citizens interact with regional transport authorities.
 We aim to empower individuals by providing them with convenient access to driver license services, simplifying application processes, and promoting road safety education.<br/>

Through our portal, we envision a future where obtaining or renewing a driver license is a hassle-free experience, eliminating the need for long queues and bureaucratic red tape. 
We aspire to leverage cutting-edge technology to enhance efficiency, transparency, and accountability in the management of driver licenses.<br/>

Furthermore, our vision extends beyond mere transactional interactions to foster a culture of responsible driving. We seek to educate and empower drivers through the integration 
of educational resources, practice tests, and personalized feedback, thereby promoting safer roads and reducing traffic accidents.<br/>

Ultimately, our driving license portal aims to serve as a beacon of innovation, bridging the gap between citizens and regional transport authorities while fostering a safer and
 more connected community.<br/> We are committed to continuous improvement and collaboration, working towards a future where obtaining a driver license is not just a bureaucratic
  process but a transformative journey towards responsible citizenship and road safety.<br/>
      </Tab>
      <Tab eventKey="longer-tab" title="our mission">
      To automate all Vehicle Registration and Driving License related activities in transport authorities of country with introduction of smart card technology to handle issues 
      like inter state transport vehicle movement and to create state and national level registers of vehicles/DL information
      </Tab> */}
      <Tab eventKey="contact" title="our objective" >
   <h3><b>Our Vision</b> </h3> <br/>
   <br/>
   &nbsp; &nbsp; To improve the quality of service delivery to the citizen and the quality of work environment of the RTOs.
<br />
<br />
 <h3><b>Our Mission</b></h3> <br />
 <br/>
&nbsp; &nbsp;To automate all Vehicle Registration and Driving License related activities in transport authorities of country with introduction of smart card technology to handle issues like inter state transport vehicle movement and to create state and national level registers of vehicles/DL information
<br />
<br />
<h3><b>Our Objectives</b></h3><br />
<br></br>
&nbsp; To provide :<br/>
&nbsp; 1. Better services to Transport Department as well as citizen <br />
&nbsp; 2. Quick implementation of government policies from time to time <br />
&nbsp; 3. Improved image of Government & Department <br />
&nbsp; 4. Instant access of Vehicle/DL information to other government departments <br /> <br />
&nbsp; The latest initiative has been to centralize both these applications for ensuring higher tranparency, security and reliability of operations through a countrywide unified database and provision of a highly citizen and trade centric web enabled environment. The new application being developed would provide for a multi-user environment wherein the end customers (citizens) may be empowered to perform most of the RTO related transactions (including payments) either from the comfort of home or from authorized third party service provider/s in their vicinity. This will also help, to a large extent, in removing the hassles and queues faced by citizens currently (in visiting RTOs for elementary types of transactions),minimizing the extensive paperwork currently being done on the ground and reducing the possibility of middlemen exploiting the uneducated / uninformed citizens. Going forward, mobile based applications would be developed and systems utilizing the Aadhar Based identification would also be integrated with the Unified RTO database for higher security and ease of operations.

&nbsp; With steady steps in direction of achievement of its Vision, Mission and objectives , the ministry is progressing towards provision of improved service access to citizens with quality and efficiency in service delivery, transparency in the system and reduced workload for RTO staff.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
      </Tab>
      <Tab eventKey="" title="our Team">
        <div>

            <div class="row mt-5">
                <div className="col-md-8 mx-auto">
                    <div class="card p-3 border-0 shadow">
                        <div>
                            <div>
                                <h2>

                                    <h2 class="font-weight-light">
                                        <b>DIGI-DL Team Are Available 24/7</b>{" "}
                                    </h2>
                                </h2>
                            </div>

                            <div class="row text-center">
                                <div class="col-xl-3 col-sm-6 mb-5">
                                    <div class="bg-white rounded shadow-sm py-5 px-4">
                                        <img
                                            src="./Kunal.jpeg "
                                            alt=""
                                            width="100"
                                            class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                        />
                                        <h5 class="mb-0">Kunal Deshmukh </h5>
                                        <h6>PRN - 230943120042</h6>
                                        <span class="small text-uppercase text-muted">
                                           SOFTWARE DEVELOPER
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 mb-5">
                                    <div class="bg-white rounded shadow-sm py-5 px-4">
                                        <img
                                            src="./mahesh.jpeg"
                                            alt=""
                                            width="100"
                                            class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                        />
                                        <h5 class="mb-0">Mahesh Pandule </h5>
                                        <h6>PRN - 230943120050</h6>
                                        <span class="small text-uppercase text-muted">
                                        SOFTWARE DEVELOPER
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 mb-5">
                                    <div class="bg-white rounded shadow-sm py-5 px-4">
                                        <img
                                            src="./Sankalp.jpeg"
                                            alt=""
                                            width="100"
                                            class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                        />
                                        <h5 class="mb-0">Sankalp Ghodke</h5>
                                        <h6>PRN - 230943120071</h6>
                                        <span class="small text-uppercase text-muted">
                                        SOFTWARE DEVELOPER
                                        </span>
                                    </div>
                                </div>
                            </div>

                            
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
      </Tab>
    </Tabs>
   
 
    </>
  );
}

export default AboutUs;