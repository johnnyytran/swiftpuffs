import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import bgImage from "../assets/img/blackbg.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  return (
    <section
      className="project"
      id="projects"
      style={{ backgroundImage: `url(${bgImage})` }} // pass as inline style
    >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Product Details</h2>
                  <p>We have TWO models to pick from!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Model 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Model 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row className="align-items-center">
                          <Col md={6}>
                            <div className="image-glow-box">
                              <img
                                src={projImg1}
                                alt="Model 1"
                                className="img-fluid"
                              />
                            </div>
                          </Col>
                          <Col md={6} className="right-column">
                            <h3 className="model-title">Model 1</h3>
                            <ul className="model-details">
                              <li>H: 71 inches</li>
                              <li>D: 11.6 inches</li>
                              <li>W: 33.5 inches</li>
                            </ul>
                          </Col>
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row className="align-items-center">
                          <Col md={6}>
                            <div className="image-glow-box">
                              <img
                                src={projImg2}
                                alt="Model 2"
                                className="img-fluid"
                              />
                            </div>
                          </Col>
                          <Col md={6} className="right-column">
                            <h3 className="model-title">Model 2</h3>
                            <ul className="model-details">
                              <li>H: 40.5 inches</li>
                              <li>D: 12.5 inches</li>
                              <li>W: 23.6 iches</li>
                            </ul>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
