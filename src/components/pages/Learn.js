import React from "react";

function Learn() {
  return (
    <div>
      <section className="pageContent">
        <div className="col mb-4">
          <div className="card sideCard">
            {/* <img src="./images/Bootstrap-Pfolio2.jpg">className="card-img-top" alt="Image of Bootcamp Project Website"</img>  */}
            <div className="card-body">
              <h5 className="card-title">Roders</h5>
              <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
            </div>
            <div className="card-footer">
              {/* <a href="https://rhanciles.github.io/Mini-Proj-Wk1/" className="btn btn-dark btn-two" target="_blank">Click Here</a> */}
              <small className="text-muted txt-fix">To Visit Site</small>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card mainCard">
            {/* <img src="./images/Bootstrap-Pfolio3.jpg">className="card-img-top" alt="Image of the Furniture Store Website"</img> */}
            <div className="card-body">
              <h5 className="card-title">About Me</h5>
              <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
            </div>
            <div className="card-footer">
              {/* <a href="https://rhanciles.github.io/Furniture-Wk2/" className="btn btn-dark btn-two" target="_blank">Click Here</a> */}
              <small className="text-muted txt-fix">To Visit Site</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Learn;
