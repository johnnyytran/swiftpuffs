import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import emailIcon from "../assets/img/mail-icon.png";
import phoneIcon from "../assets/img/phone-icon.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="mailto:johnnyytran01@gmail.com">
                <img src={emailIcon} alt="Email" />
              </a>
              <a href="tel:+5157719204">
                <img src={phoneIcon} alt="Phone" />
              </a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
