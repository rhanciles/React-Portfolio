import React from 'react';
import "../styles/Style.css";
import "../styles/Contact.css";

function Contact() {
  return (
    <div>
      <section className="pageContent jumbotron">
        <div className="col mb-4">
          <div className="card mainCard">
            <form className="card-body">
              <h2 className="card-title">Contact Us</h2>
              <input className="form-control" type="text" placeholder="Name"/>
              <input className="form-control" type="text" placeholder="Email"/>
              <input className="form-control" type="text" placeholder="Contact No."/>
              <div className="submitDiv" >
                <p className="card-text">We'll love to hear from you.</p> 
                <button type="submit" className="btn btn-primary">Submit</button> 
              </div>         
            </form>
            <span className="contact-info">
              <ul>
                <li><a href="#"><i className="bi bi-geo-alt"></i> Address</a></li>
                <li><p>100 Bootstrap Street</p></li>
                <li><p>Web City</p></li>
                <li><p>Northend</p></li>
                <li><p>AB1 0CD</p></li>
                <li><a href="#"><i className="bi bi-telephone"></i> +44 7474 778 899</a></li>
                <li><a href="#"><i className="bi bi-envelope"></i> info@rodersportal.com</a></li>
              </ul>      
            </span>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Contact;
