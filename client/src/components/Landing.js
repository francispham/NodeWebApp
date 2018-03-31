import React from 'react';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <header class="container">
        <div>
          <img src="/images/logo.png" /> <br />
          <p><strong>
            It’s time to take the next step in your healthy & beauty.</strong></p>

        </div>
      </header>

      <section id="about">
        <p>This is about section</p>
      </section>

      <section id="services">
        <p>This is services section</p>
      </section>

      <section id="portfolio">
        <p>This is portfolio section</p>
      </section>

      <section id="contact">
        <p>This is contact section</p>
      </section>

    </div>
  );
};

export default Landing;
