import React, { Component } from 'react';
import './Footer.css';

class Footers extends Component {
  render() {
    return (
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>About Us</h2>
                  <p>Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.</p>
                  <ul className="social">
                    <li><a href="#"><i className="icofont-facebook"></i></a></li>
                    <li><a href="#"><i className="icofont-google-plus"></i></a></li>
                    <li><a href="#"><i className="icofont-twitter"></i></a></li>
                    <li><a href="#"><i className="icofont-vimeo"></i></a></li>
                    <li><a href="#"><i className="icofont-pinterest"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h2>Quick Links</h2>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul>
                        <li><a href="#"><i className="fa fa-caret-right"></i>Home</a></li>
                        <li><a href="#"><i className="fa fa-caret-right"></i>About Us</a></li>
                        <li><a href="#"><i className="fa fa-caret-right"></i>Services</a></li>
                        <li><a href="#"><i className="fa fa-caret-right"></i>Our Cases</a></li>
                        <li><a href="#"><i className="fa fa-caret-right"></i>Other Links</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul>
                        <li><a href="#"><i className="fa fa-caret-right"></i>Consuling</a></li>
                        <li><a href="#"><i className="fa fa-caret-right"></i>Finance</a></li>
                        <li><a href="#"><i className="fa fa-caret-right"></i>Testimonials</a></li>
                        <li><a href="#"><i className="fa fa-caret-right"></i>FAQ</a></li>
                        <li><a href="#"><i className="fa fa-caret-right"></i>Contact Us</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Open Hours</h2>
                  <p>Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor incididunt.</p>
                  <ul className="time-sidual">
                    <li className="day">Monday - Friday <span>8.00-20.00</span></li>
                    <li className="day">Saturday <span>9.00-18.30</span></li>
                    <li className="day">Monday - Thusday <span>9.00-15.00</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Newsletter</h2>
                  <p>subscribe to our newsletter to get all our news in your inbox. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                    <input 
                      name="email" 
                      placeholder="Email Address" 
                      className="common-input" 
                      onFocus={(e) => e.target.placeholder = ''} 
                      onBlur={(e) => e.target.placeholder = 'Your email address'} 
                      required 
                      type="email" 
                    />
                    <button className="button"><i className="icofont icofont-paper-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="copyright-content">
                  <p>© Copyright 2018  |  All Rights Reserved by <a href="https://www.wpthemesgrid.com" target="_blank" rel="noopener noreferrer">wpthemesgrid.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footers;
