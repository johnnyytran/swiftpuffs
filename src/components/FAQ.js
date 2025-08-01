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
              All you need is to provide an outlet and about 2-3 feet of wall or
              floor space.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Does it have to be wall mounted?
            </Accordion.Header>
            <Accordion.Body>
              No, we can put the machine on a pedestal that is roughly the same
              size, just a few inches bigger on the floor.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Do you only sell vapes?</Accordion.Header>
            <Accordion.Body>
              No, depending on the demographic of the location, we sell nicotine
              pouches and legal weed products as well. We can have a
              conversation if you think those products would be good for your
              bar,
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How do I get my share of the profit?
            </Accordion.Header>
            <Accordion.Body>
              Whatever payment method works best for you! We pay out the first
              of every month. Most of ourr locations take payment via Venmo, but
              we are flexible with payment method.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};
