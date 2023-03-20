import React from "react";
import "../styles/Projects.css";
import "../styles/Style.css";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Weather from "../images/Weather-Dash-Mock-up.jpg";
import SuperHero from "../images/SuperHero Game.jpg";
import Password from "../images/generate_password.jpg";
import Scheduler from "../images/Work-Day-Scheduler.jpg";
import Bootstrap from "../images/Bootstrap-Portfolio.jpg";
import Furniture from "../images/Furniture-Store.jpg";

function Projects() {
  return (
    <div className="pageContent jumbotron">        
      <Tab.Container id="left-tabs-example" defaultActiveKey="Pro-1">
        <div>
          <Row className="card sideCard">
            <h2 className="card-title">Projects</h2>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="Pro-1">Weather</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Pro-2">Hero</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Pro-3">Password</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Pro-4">Scheduler</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Pro-5">Bootstrap</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Pro-6">Furniture</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
          </Row>
        </div>
        <div>
        <Row className="card mainCard">
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="Pro-1">
                <h2 className="card-title">Weather Dashboard</h2>
                <img id="weather" src={Weather} alt="Weather Dashboard"></img>
                <p>"At vero eos et accusamus et iusto odio."</p>
                <Button href="https://rhanciles.github.io/Weather-Dashboard/" className="btn btn-projects" type="submit">Visit Site</Button>{' '}
                {/* <button href="" type="submit" className="btn btn-primary">Submit</button> */}
                </Tab.Pane>
                <Tab.Pane eventKey="Pro-2">
                <h2 className="card-title">SuperHero Game</h2>
                <img id="hero" src={SuperHero} alt="Weather Dashboard"></img>
                <p>"Sed ut perspiciatis unde omnis iste natus?"</p>
                <Button href="https://rhanciles.github.io/SuperHero_Game" className="btn btn-projects" type="submit">Visit Site</Button>{' '}
                </Tab.Pane>
                <Tab.Pane eventKey="Pro-3">
                <h2 className="card-title">Password Generator</h2>
                <img id="password" src={Password} alt="Weather Dashboard"></img>
                <p>Contrairement à une opinion répandue.</p>
                <Button href="https://rhanciles.github.io/Password-Generator/" className="btn btn-projects" type="submit">Visit Site</Button>{' '}
                </Tab.Pane>
                <Tab.Pane eventKey="Pro-4">
                <h2 className="card-title">Work Day Scheduler</h2>
                <img id="scheduler" src={Scheduler} alt="Weather Dashboard"></img>
                <p>"At vero eos et accusamus et iusto."</p>
                <Button href="https://rhanciles.github.io/Work-Day-Scheduler/" className="btn btn-projects" type="submit">Visit Site</Button>{' '}
                </Tab.Pane>
                <Tab.Pane eventKey="Pro-5">
                <h2 className="card-title">Bootstrap Portfolio</h2>
                <img id="bootstrap" src={Bootstrap} alt="Weather Dashboard"></img>
                <p>"At vero eos et accusamus et iusto odio."</p>
                <Button href="https://rhanciles.github.io/Bootstrap-Portfolio/" className="btn btn-projects" type="submit">Visit Site</Button>{' '}
                </Tab.Pane>
                <Tab.Pane eventKey="Pro-6">
                <h2 className="card-title">Furniture Store</h2>
                <img id="furniture" src={Furniture} alt="Weather Dashboard"></img>
                <p>"Sed ut perspiciatis unde omnis iste natus?"</p>
                <Button href="https://rhanciles.github.io/Furniture-Store/" className="btn btn-projects" type="submit">Visit Site</Button>{' '}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </div>
      </Tab.Container>
    </div>  
  );
}

export default Projects;
