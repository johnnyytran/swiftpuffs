import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/logospin.gif";
import smokeVideo from "../assets/video/smoke.gif";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

const toRotate = ["BARS", "PUBS", "CLUBS"];

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [showSmoke, setShowSmoke] = useState(true); // for smoke effect
  const period = 1000;

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSmoke(false); // hide smoke after 5s
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const brandText = "SWIFT PUFFS";

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div className="swift-puffs-wrapper">
                    <div className="swift-puffs">
                      {[...brandText].map((char, i) => (
                        <span
                          key={i}
                          className={char === " " ? "tagline space" : "tagline"}
                          style={{ animationDelay: `${1 + i * 0.3}s` }}
                        >
                          {char}
                        </span>
                      ))}
                    </div>

                    <div className="subtitle">Vape Vending</div>

                    {showSmoke && (
                      <img
                        className="smoke-overlay"
                        src={smokeVideo}
                        alt="Smoke effect"
                      />
                    )}
                  </div>

                  <h1>
                    {`ATTENTION ALL IOWA `}
                    <br />
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Transform that unused corner in your business to generate
                    MORE for you. Vape Vending Machines ARE the FUTURE!
                  </p>
                  <button onClick={() => console.log("connect")}>
                    How it works: <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
