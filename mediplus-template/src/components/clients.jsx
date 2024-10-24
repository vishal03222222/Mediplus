import React, { Component } from 'react';
import './Clients.css';

class Clients extends Component {
  render() {
    return (
      <div className="clients overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="owl-carousel clients-slider">
                <div className="single-clients">
                  <img src="img/client1.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="img/client2.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="img/client3.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="img/client4.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="img/client5.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="img/client1.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="img/client2.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="img/client3.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="img/client4.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
