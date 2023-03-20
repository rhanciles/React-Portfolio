import React from 'react';

function Contact() {
  return (
    <div>
      <section className="pageContent jumbotron">
        <div className="col mb-4">
          <div className="card Card">
            <form class="card-body">
              <h5 class="card-title">Contact Us</h5>
              <input class="form-control" type="text" placeholder="Name"/>
              <input class="form-control" type="text" placeholder="Email"/>
              <input class="form-control" type="text" placeholder="Contact No."/>
              <p class="card-text">We'll love to hear from you.</p>              
            </form>
            <span class="contact-info">
              <ul>
                <li><a href="#"><i class="bi bi-geo-alt"></i> Address</a></li>
                <li><p>100 Bootstrap Street</p></li>
                <li><p>Web City</p></li>
                <li><p>Northend</p></li>
                <li><p>AB1 0CD</p></li>
                <li><a href="#"><i class="bi bi-telephone"></i> +44 7474 778 899</a></li>
                <li><a href="#"><i class="bi bi-envelope"></i> info@rodersportal.com</a></li>
              </ul>      
            </span>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Contact;
