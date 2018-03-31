import React from 'react';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <header className="container">
        <div>
          <img src="/images/logo-web.png" /> <br />
          <p><strong>
            It’s time to take the next step in your healthy & beauty.</strong></p>

        </div>
      </header>

      <section id="about">
        <p>This is about section</p>
      </section>

      <section id="services">
        <div>
          <p>This is services section</p>
        </div>

        <div id="services-list">
          <div>Teeth</div>
          <div>Lazer</div>
          <div>Inject</div>
          <div>Chemical</div>
        </div>
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
