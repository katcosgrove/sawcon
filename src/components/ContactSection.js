import React from 'react';

export default class ContactSection extends React.Component {
    render() {
        return (
            <section className="section">
              <div className="container container--md">
                <form name="cfpForm" id="cfpForm" method="POST" action="/thanks" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="cfpForm" value="cfpForm" />
                  <div className="sr-only">
                    <label id="honeypot-label" htmlFor="honeypot">Don't fill this out if you're human:</label>
                    <input aria-labelledby="honeypot-label" id="honeypot" name="bot-field" />
                  </div>
                  <input aria-labelledby="honeypot-label" type="hidden" name="form-name" value="contactForm" />
                  <div className="form-group">
                    <label id="name-label" htmlFor="name">Name</label>
                    <input aria-labelledby="name-label" type="text" name="name" id="name" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label id="title-label" htmlFor="title">Title</label>
                    <input aria-labelledby="name-label" type="text" name="title" id="title" placeholder="Your title" required />
                  </div>
                  <div className="form-group">
                    <label id="email-label" htmlFor="email">Email</label>
                    <input aria-labelledby="email-label" type="email" name="email" id="email" placeholder="Your email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Talk Category</label>
                    <div className="form-select-wrap">
                      <select name="subject" id="subject">
                        <option value="">Please select</option>
                        <option value="Full Session">Full Session (90 Minutes)</option>
                        <option value="Short Session">Short Session (60 Minutes)</option>
                        <option value="Lightning Talk">Lightning Talk (15 Minutes)</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label id="message-label" htmlFor="abstract">Abstract</label>
                    <textarea aria-labelledby="message-label" name="message" id="message" rows="5" placeholder="Your abstract" />
                  </div>
                  <div className="form-group form-checkbox">
                    <input aria-labelledby="consent-label" type="checkbox" name="consent" id="consent" />
                    <label id="consent-label" htmlFor="consent">I understand that this form is storing my submitted information so I can be
                      contacted.</label>
                  </div>
                  <div className="form-submit">
                    <button type="submit" className="button">Submit</button>
                  </div>
                </form>
              </div>
            </section>
        );
    }
}
