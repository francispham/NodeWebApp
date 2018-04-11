import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }} id="scroll-container">
      <header className="box scroll-page">
        <div>
          <img src="/images/logo-web.png" alt=""/> <br />
          <p><strong>
            It’s time to take the next step in your healthy & beauty.</strong></p>
        </div>
      </header>

      <div>
        <section id="about">
          <p><strong>Our Story</strong> </p>
        </section>

        <section>
          <Grid id="services">

          <Row className="show-grid">
            <Col style={{padding:"0px"}} sm ={6} md={3}><div id="fade"><strong>Teeth</strong></div></Col>
            <Col style={{padding:"0px"}} sm ={6} md={3}><div id="fade"><strong>Lazer</strong></div></Col>
            <Col style={{padding:"0px"}} sm ={6} md={3}><div id="fade"><strong>Inject</strong></div></Col>
            <Col style={{padding:"0px"}} sm ={6} md={3}><div id="fade"><strong>Chemical</strong></div></Col>
          </Row>
        </Grid>
        </section>
      </div>

      <div id="special">
        <div>Special Offers</div>
        <div style={{float: 'left', width: '50%', padding: '1em'}}>
          <div id="fade">

          </div>
        </div>
        <div style={{float: 'right', width: '50%', padding: '1em'}}>
          <div id="fade">

          </div>
        </div>
      </div>

      <div >
        <section id="feedback">
          <div style={{height: '60vh', padding: '3em'}}>
            <div id="fade" style={{height: '60vh', padding: '3em'}} >

              <h2>What's people say?</h2>
            </div>
          </div>
        </section>
        <section className="scroll-page" id="contact">
          <h3>Contact</h3>
        </section>
      </div>
    </div>
  );
};

export default Landing;
