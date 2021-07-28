import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return <Layout>
    <main className="page">
      <section className="contact-page">
        <article className="contact-info">
          <h3>Want to get in touch?</h3>
          <p>Fanny pack disrupt poutine, salvia normcore succulents brunch tousled paleo cloud bread banh mi before they sold out cliche. Heirloom enamel pin vape lumbersexual, fingerstache vegan master cleanse cray aesthetic paleo.</p>
          <p>Four dollar toast seitan salvia freegan cronut hella knausgaard tumblr trust fund lomo scenester sustainable la croix.</p>
          <p>Literally cloud bread umami asymmetrical roof party kinfolk prism yuccie distillery mixtape celiac.</p>
        </article>
        <article>
          <form className="form contact-form">
            <div className="form-row">
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">Your email</label>
              <input type="email" email="email" id="email" />
            </div>
            <div className="form-row">
              <label htmlFor="mesage">Your message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </form>
        </article>
      </section>
    </main>
  </Layout>;
};

export default Contact;
