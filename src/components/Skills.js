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
                    We provide, install, maintain and replenish the vape vending
                    machine for FREE
                  </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Latest vape products" />
                  <h5>
                    We sell the latest vapes so your customers never need to
                    leave to buy a vape.
                  </h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Profit sharing" />
                  <h5>We share the profits with you!</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Licensing handled" />
                  <h5>
                    We take care of all licenses and legal responsibility.
                  </h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="ID tech for age verification" />
                  <h5>We use ID tech to prevent underage vape sales.</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="QR code support" />
                  <h5>
                    We handle all complaints via a QR code on the machine.
                  </h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Trusted Nebraska locations" />
                  <h5>
                    Trusted by top Nebraska spots like The Brass Rail, The Bar,
                    Grata, and more.
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
