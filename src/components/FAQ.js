import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const FAQ = () => {
  return (
    <section className="faq" id="faq" style={{ padding: "60px 0" }}>
      <Container>
        <h2 className="text-center mb-5">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey={null} flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What am I responsible for providing as the bar owner?
            </Accordion.Header>
            <Accordion.Body>
              All we need from you is a power outlet and 2-3 feet of space.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How much is the monthly electric bill?
            </Accordion.Header>
            <Accordion.Body>
              These machines don’t consume a lot of electricity and work on
              standard outlets. The estimated average cost is $1-$2 a month.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Do your machines sell other products?
            </Accordion.Header>
            <Accordion.Body>
              Yes we can sell other tobacco and nicotine products at your
              request.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};
