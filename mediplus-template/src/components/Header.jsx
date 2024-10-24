
import React, { Component } from 'react';
// import "../styles/css/bootstrap.css";
// import "../styles/css/nice-select.css";
// import "../styles/css/font-awesome.css";
// import "../styles/css/iconfont.css";
// import "../styles/css/slicknavcss";
// //import "../styles/css/owl-carousel.css";
// import "../styles/css/datepicker.css";
// import "../styles/css/animate.css";
// import "../styles/css/magnific.css";
// import "../styles/css/normalize.css";
// import "../styles/css/style.css";
// import "../styles/css/responsive.css";


// import './styles/font-awesome.min.css';
// import './styles/icofont.css';
// import './styles/slicknav.min.css';
// import './styles/owl-carousel.css';
// import './styles/datepicker.css';
// import './styles/animate.min.css';
// import './styles/magnific-popup.css';
// import './styles/normalize.css';
// import './styles/style.css';
// import './styles/responsive.css';


class BlogSingle extends Component {
  render() {
    return (
      <>
        <div className="preloader">
          <div className="loader">
            <div className="loader-outter"></div>
            <div className="loader-inner"></div>
            <div className="indicator"> 
              <svg width="16px" height="12px">
                <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
              </svg>
            </div>
          </div>
        </div>

        <ul className="pro-features">
          <a className="get-pro" href="#">Get Pro</a>
          <li className="big-title">Pro Version Available on Themeforest</li>
          <li className="title">Pro Version Features</li>
          <li>2+ premade home pages</li>
          <li>20+ html pages</li>
          <li>Color Plate With 12+ Colors</li>
          <li>Sticky Header / Sticky Filters</li>
          <li>Working Contact Form With Google Map</li>
          <div className="button">
            <a href="http://preview.themeforest.net/item/mediplus-medical-and-doctor-html-template/full_screen_preview/26665910?_ga=2.145092285.888558928.1591971968-344530658.1588061879" target="_blank" className="btn">Pro Version Demo</a>
            <a href="https://themeforest.net/item/mediplus-medical-and-doctor-html-template/26665910" target="_blank" className="btn">Buy Pro Version</a>
          </div>
        </ul>

        <header className="header">
          <div className="topbar">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-5 col-12">
                  <ul className="top-link">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Doctors</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQ</a></li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-7 col-12">
                  <ul className="top-contact">
                    <li><i className="fa fa-phone"></i>+880 1234 56789</li>
                    <li><i className="fa fa-envelope"></i><a href="mailto:support@yourmail.com">support@yourmail.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="header-inner">
            <div className="container">
              <div className="inner">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-12">
                    <div className="logo">
                      <a href="index.html"><img src="img/logo.png" alt="#"/></a>
                    </div>
                    <div className="mobile-nav"></div>
                  </div>
                  <div className="col-lg-7 col-md-9 col-12">
                    <div className="main-menu">
                      <nav className="navigation">
                        <ul className="nav menu">
                          <li className="active"><a href="#">Home <i className="icofont-rounded-down"></i></a>
                            <ul className="dropdown">
                              <li><a href="index.html">Home Page 1</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Doctors</a></li>
                          <li><a href="#">Services</a></li>
                          <li><a href="#">Pages <i className="icofont-rounded-down"></i></a>
                            <ul className="dropdown">
                              <li><a href="404.html">404 Error</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Blogs <i className="icofont-rounded-down"></i></a>
                            <ul className="dropdown">
                              <li><a href="blog-single.html">Blog Details</a></li>
                            </ul>
                          </li>
                          <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-lg-2 col-12">
                    <div className="get-quote">
                      <a href="appointment.html" className="btn">Book Appointment</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="breadcrumbs overlay">
          <div className="container">
            <div className="bread-inner">
              <div className="row">
                <div className="col-12">
                  <h2>Blog Single</h2>
                  <ul className="bread-list">
                    <li><a href="index.html">Home</a></li>
                    <li><i className="icofont-simple-right"></i></li>
                    <li className="active">Blog Single</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

       
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="single-main">
                      <div className="news-head">
                        <img src="img/blog1.jpg" alt="#"/>
                      </div>
                      <h1 className="news-title"><a href="news-single.html">More than 80 clinical trials launch to test of the coronavirus.</a></h1>
                      <div className="meta">
                        <div className="meta-left">
                          <span className="author"><a href="#">
                            <img src="img/author1.jpg" alt="#"/>Naimur Rahman</a></span>
                          <span className="date"><i className="fa fa-clock-o"></i>03 Feb 2019</span>
                        </div>
                        <div className="meta-right">
                          <span className="comments"><a href="#"><i className="fa fa-comments"></i>05 Comments</a></span>
                          <span className="views"><i className="fa fa-eye"></i>33K Views</span>
                        </div>
                      </div>
                      <div className="news-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <div className="image-gallery">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                              <div className="single-image">
                                <img src="img/blog2.jpg" alt="#"/>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                              <div className="single-image">
                                <img src="img/blog3.jpg" alt="#"/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <blockquote className="overlay">
                          <p>Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante...</p>					
                        </blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                      </div>
                      <div className="blog-bottom">
                        <ul className="social-share">
                          <li className="facebook"><a href="#"><i className="fa fa-facebook"></i><span>Facebook</span></a></li>
                          <li className="twitter"><a href="#"><i className="fa fa-twitter"></i><span>Twitter</span></a></li>
                          <li className="google-plus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                          <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                          <li className="pinterest"><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        </ul>
                        <ul className="prev-next">
                          <li className="prev"><a href="#"><i className="fa fa-angle-double-left"></i></a></li>
                          <li className="next"><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        

      
          <div className="row">
            <div className="col-12">
              <div className="blog-comments">
                <h2>All Comments</h2>
                <div className="comments-body">
                  {/* Single Comments */}
                  {this.renderComment(
                    "Afsana Mimi",
                    "img/author1.jpg",
                    "March 05, 2019",
                    "03:38 AM",
                    "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas"
                  )}
                  {this.renderComment(
                    "Naimur Rahman",
                    "img/author2.jpg",
                    "March 05, 2019",
                    "03:38 AM",
                    "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas"
                  )}
                  {this.renderComment(
                    "Suriya Molharta",
                    "img/author3.jpg",
                    "March 05, 2019",
                    "03:38 AM",
                    "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas"
                  )}
                  {/*/ End Single Comments */}
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="comments-form">
                <h2>Leave Comments</h2>

                <form className="form" method="post" action="mail/mail.php">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="form-group">
                        <i className="fa fa-user"></i>
                        <input type="text" name="first-name" placeholder="First name" required />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="form-group">
                        <i className="fa fa-envelope"></i>
                        <input type="text" name="last-name" placeholder="Last name" required />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="form-group">
                        <i className="fa fa-envelope"></i>
                        <input type="email" name="email" placeholder="Your Email" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group message">
                        <i className="fa fa-pencil"></i>
                        <textarea name="message" rows="7" placeholder="Type Your Message Here"></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group button">
                        <button type="submit" className="btn primary">
                          <i className="fa fa-send"></i>Submit Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="main-sidebar">
                <div className="single-widget search">
                  <div className="form">
                    <input type="email" placeholder="Search Here..." />
                    <a className="button" href="#">
                      <i className="fa fa-search"></i>
                    </a>
                  </div>
                </div>

                <div className="single-widget category">
                  <h3 className="title">Blog Categories</h3>
                  <ul className="categor-list">
                    <li><a href="#">Men's Apparel</a></li>
                    <li><a href="#">Women's Apparel</a></li>
                    <li><a href="#">Bags Collection</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Sun Glasses</a></li>
                  </ul>
                </div>

                <div className="single-widget recent-post">
                  <h3 className="title">Recent post</h3>
                  {this.renderRecentPost("We have announced our new product.", "img/blog-sidebar1.jpg", "Jan 11, 2020", 35)}
                  {this.renderRecentPost("Top five way for solving teeth problems.", "img/blog-sidebar2.jpg", "Mar 05, 2019", 59)}
                  {this.renderRecentPost("We provide highly business solutions.", "img/blog-sidebar3.jpg", "June 09, 2019", 44)}
                </div>

                <div className="single-widget side-tags">
                  <h3 className="title">Tags</h3>
                  <ul className="tag">
                    <li><a href="#">business</a></li>
                    <li><a href="#">wordpress</a></li>
                    <li><a href="#">html</a></li>
                    <li><a href="#">multipurpose</a></li>
                    <li><a href="#">education</a></li>
                    <li><a href="#">template</a></li>
                    <li><a href="#">Ecommerce</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      

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
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Home</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>About Us</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Services</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Our Cases</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Other Links</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <ul>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Consulting</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Finance</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Testimonials</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>FAQ</a></li>
                          <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Contact Us</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

    
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Open Hours</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Do eiusmod tempor incididunt.</p>
                  <ul className="time-sidual">
                    <li className="day">Monday - Friday <span>8.00-20.00</span></li>
                    <li className="day">Saturday <span>9.00-18.30</span></li>
                    <li className="day">Sunday <span>Closed</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Newsletter</h2>
                  <p>Subscribe to our newsletter to get all our news in your inbox. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                    <input
                      name="email"
                      placeholder="Email Address"
                      className="common-input"
                      onFocus={(e) => { e.target.placeholder = ''; }}
                      onBlur={(e) => { e.target.placeholder = 'Your email address'; }}
                      required
                      type="email"
                    />
                    <button className="button">
                      <i className="icofont icofont-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        

         <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="copyright-content">
                  <p>
                    © Copyright 2018 | All Rights Reserved by 
                    <a href="https://www.wpthemesgrid.com" target="_blank" rel="noopener noreferrer"> wpthemesgrid.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </footer>
   



                
    


</>
)}
}
export default BlogSingle;