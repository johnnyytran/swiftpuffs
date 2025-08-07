import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import extraLogo from "../assets/img/extra-logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="d-flex align-items-center">
            {/* Logos container */}
            <div className="logo-group">
              <img src={logo} alt="Logo" className="footer-logo" />
              <img src={extraLogo} alt="Extra Logo" className="contact-logo" />
            </div>
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="contact-wrapper">
              <div className="contact-details">
                <a href="mailto:Swiftpuffsdsm@gmail.com">
                  Swiftpuffsdsm@gmail.com
                </a>
                <a href="tel:+15155126313">(515) 512-6313</a>
              </div>
            </div>
            <p>© 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
