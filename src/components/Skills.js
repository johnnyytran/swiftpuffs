import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";
import meter5 from "../assets/img/meter5.png";
import meter6 from "../assets/img/meter6.png";
import meter7 from "../assets/img/meter7.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Vape Vending</h2>
              <p>What we provide:</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Free vape machine installation" />
                  <h5>
                    We install, maintain, and restock the vape vending machine
                    in your business — 100% FREE.
                  </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Latest vape products" />
                  <h5>
                    We offer the most popular vapes and tobacco products in the
                    machines for your customers.
                  </h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Profit sharing" />
                  <h5>
                    Boost bar revenue by fulfilling customer’s nicotine cravings
                    which encourages them to stick around longer.
                  </h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Licensing handled" />
                  <h5>
                    The machines come with a modern looking user-friendly
                    touchscreen interface and are designed to operate quietly in
                    the background.
                  </h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="ID tech for age verification" />
                  <h5>
                    Worried about underage access? We offer advanced ID
                    verification scanners on the machines.
                  </h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="QR code support" />
                  <h5>
                    We handle all complaints via a QR code on the machine.
                  </h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
