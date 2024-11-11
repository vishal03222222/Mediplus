import React from 'react';
// ??import './styles/font-awesome.min.css'; // Adjust the import path as necessary
//import  'icofont.css'; // Adjust the import path as necessary
import hcontent from './hcontent.json'
class Header extends React.Component {
  render() {
    return (
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
                    <a href="index.html"><img src="img/logo.png" alt="#" /></a>
                  </div>
                  <div className="mobile-nav"></div>
                </div>
                <div className="col-lg-7 col-md-9 col-12">
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        {hcontent.map((value)=>{
                          return<li className="active">
                            <a href="#">{value.name} <i className="icofont-rounded-down"></i></a>
                            <ul className="dropdown">
                              {/* //<li><a href="index.html">{value.prop}</a></li> */}
                            </ul>
                          </li>

                          
                        })}
                        
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
    );
  }
}

export default Header;
