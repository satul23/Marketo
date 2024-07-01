import React from "react";
import image1 from "./home1.jpg";
import image2 from "./home2.avif";
import image3 from "./home3.jpg";
import "./Home.css";
import image5 from "./home5.png";
import image4 from "./home4.png";
import image6 from "./home6.png";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <section className="homepage ">
        <div className="home ">
          <div className="imagee1">
            <div className="home-image-1">
            <img src={image1} alt="home1" className="image1" />
            </div>
            <div className="textdiv">
              <p className="text">Get 50% Off</p>
              <h2 className="text2">SHOP WISE WITH PRICE COMPARISONS</h2>
            </div>
            <div className="buttonsdiv">
              <div className="button1">
                <h6>VIEW COLLECTIONS</h6>
              </div>
              <div className="button2">
                <h6>CATEGORIES</h6>
              </div>
            </div>
          </div>
          <div className="rightimg">
            <div className="imagee2">
              <img src={image2} alt="home2" className="image2" />
              <div className="img2text">
                <h2>TOP PICKS IN POPULAR TECH & MORE</h2>
                <p>hurry,these deals will gone in a FLASH</p>
              </div>
            </div>
            <div className="imagee3">
              <img src={image3} alt="home3" className="image3" />
              <div className="img3text">
                <h2>ENJOY THE SECURITY</h2>
                <p>amazing offers for security systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="home2">
          <div className="home21">
            <div className="home21t">
              <p>Electronic, Minimal</p>
              <h2>Get Holiday Deals</h2>
              <div className="homebutton">
                <p>VIEW COLLECTIONS</p>
              </div>
            </div>

            <div className="home23img">
              <img className="imgcr" src={image5} alt="image5" />
            </div>
          </div>
          <div className="home22">
            <div className="home22t">
              <h4>Get 50% Off</h4>
              <h2>Every Handset Retina Item</h2>
              <div className="homebutton2">
                <p>GO SHOP</p>
              </div>
            </div>
            <div className="home23img">
              <img className="imgcr" src={image4} alt="image4" />
            </div>
          </div>
          <div className="home21">
            <div className="home21t">
              <p>Minimalism Design</p>
              <h2>Music Makes Feel Better</h2>
            </div>
            <div className="home23img">
              <img className="imgcr" src={image6} alt="image6" />
            </div>
          </div>
        </div>
      </section> */}

      <section className="section-after-banner">
        <Row className="for-media">
          <Col>
            <div className="home21">
              <div className="home21t">
                <p>Electronic, Minimal</p>
                <h2>Get Holiday Deals</h2>
                <div className="homebutton">
                  <p>VIEW COLLECTIONS</p>
                </div>
              </div>

              <div className="home23img">
                <img className="imgcr" src={image5} alt="image5" />
              </div>
            </div>
          </Col>

          <Col>
          <div className="home22">
            <div className="home22t">
              <h4>Get 50% Off</h4>
              <h2>Every Handset Retina Item</h2>
              <div className="homebutton2">
                <p>GO SHOP</p>
              </div>
            </div>
            <div className="home23img">
              <img className="imgcr" src={image4} alt="image4" />
            </div>
          </div>
          </Col>

          <Col>
          <div className="home21">
            <div className="home21t">
              <p>Minimalism Design</p>
              <h2>Music Makes Feel Better</h2>
            </div>
            <div className="home23img">
              <img className="imgcr" src={image6} alt="image6" />
            </div>
          </div>
        
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Home;
