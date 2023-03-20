import React from "react";
import "../styles/About.css";
import "../styles/Style.css";
import rodsPic from "../images/rod-180722.jpg";

function About() {
  return (
    <div>
      <section className="pageContent jumbotron">
        <div sm={5}>
          <div className="card sideCard">
            {/* <img src="./images/Bootstrap-Pfolio2.jpg">className="card-img-top" alt="Image of Bootcamp Project Website"</img>  */}
            <div className="card-body">
              <img id="superRod" src={rodsPic} alt="Roders"></img>
              <h2 className="card-title">Roders</h2>
              <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            </div>
            <div className="card-footer">
              {/* <a href="https://rhanciles.github.io/Mini-Proj-Wk1/" className="btn btn-dark btn-two" target="_blank">Click Here</a> */}
              <small className="text-muted txt-fix">To Visit Site</small>
            </div>
          </div>
        </div>
        <div sm={7}>
          <div className="card mainCard aboutCard">
            {/* <img src="./images/Bootstrap-Pfolio3.jpg">className="card-img-top" alt="Image of the Furniture Store Website"</img> */}
            <div className="card-body">
              <h2 className="card-title">About Me</h2>
            
              <p className="card-text"><span id="heading"><h4>Background:</h4></span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
              <p><span id="heading"><h4>Clientele:</h4></span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
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

export default About;
