import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className='bg-dark text-center text-white'>
      <Container className='p-4 pb-0'>
        <section className='mb-4'>
          <Button
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://www.facebook.com/p/Transport-Department-RTO-Maharashtra-100088892012097/?_rdr'
            role='button'
          >
            <i className="fab fa-facebook-f"></i>
          </Button>

          <Button
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://twitter.com/mmvd_rto?lang=en'
            role='button'
          >
            <i className="fab fa-twitter"></i>
          </Button>

          <Button
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='https://www.google.com/search?q=rto+maharashtra&sca_esv=559959589&rlz=1C1VDKB_enIN1048IN1048&sxsrf=AB5stBhFnnCiSg8zd6iw_fMxR05t7iCsJg%3A1692941611895&ei=Kz3oZKGqNumgseMP-q6lmAI&oq=rto+ma&gs_lp=Egxnd3Mtd2l6LXNlcnAiBnJ0byBtYSoCCAAyBxAjGIoFGCcyCBAAGIoFGJECMgUQABiABDIIEAAYigUYkQIyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIkyZQqBFY5h5wA3gAkAEAmAHrAaAB9weqAQUwLjQuMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgoQABiKBRixAxhDwgINEAAYigUYsQMYgwEYQ8ICBxAAGIoFGEPCAgsQLhiABBjHARivAcICCxAAGBYYHhjxBBgKwgICECbCAggQABiKBRiGA-IDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp'
            role='button'
          >
            <i className="fab fa-google"></i>
          </Button>

          
        </section>
      </Container>

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className="fas fa-gem me-3"></i>
                Driving License Portal 
              </h6>
              <p className='text-justify'>
              "Experience the ease of Online RTO services for driving licenses. Apply, renew, or modify your license from anywhere, saving time and hassle. 
              
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='/user/login' className='text-reset'>
                Drivers/ Learners License
                </a>
              </p>         
              <p>
                <a href='/user/login' className='text-reset'>
                Online Test/ Appointment
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className="fas fa-home me-2"></i>
                Infoway Private ltd, Kothrud Pune
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                rtocdac@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 91 9763538797
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 91 7720915060
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} rtocdac.com
        <a className='text-white' href='https://mdbootstrap.com/'>
          
        </a>
      </div>
    </footer>
  );
}

