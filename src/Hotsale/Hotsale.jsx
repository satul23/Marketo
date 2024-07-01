import React from "react";
import "./Hotsael.css";
import ProgressBar from "react-bootstrap/ProgressBar";
// import Watch from "./watch.webp";
// import LAptop1 from "./laptop1.jpg";
import Laptop2 from "./Laptop2.webp";
import Watch2 from "./watch2.webp";
import Vr from "./vr.webp";
const Hotsale = () => {
  return (
    <>
      <section className="Hotsale-section">
        <div className="hotesale-heading">
          <h4>Hot Sale</h4>
        </div>
        <div className="Topcatlist">
          <ul className="toplistItems-hot">
            <li>
              <a className="toplistlink" href="">
                {" "}
                16% Off
              </a>
            </li>
            <li>
              <a className="toplistlink" href="">
                {" "}
                25% Off
              </a>
            </li>
            <li>
              <a className="toplistlink" href="">
                {" "}
                33% Off
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="Hotsale2-section">
        <div className="top-left-div">


          <div className="watch-div">
            <div className="watch-text-div">
              <p className="watch-p">Basic Gift Idea</p>
              <h5>Mini Two Wheel </h5>
              <div className="h4-div">
                <h5>Self Balancing</h5>
                <h5> Scooter</h5>
              </div>
              <div className="hotsale-button">
              <div className="watch-button">
                <p
                  style={{
                    color: "white",
                    margin: "0",
                    fontSize: "small",
                    fontWeight: "600",
                  }}
                >
                  Go Shop
                </p>
              </div>
              </div>
            </div>
            <div className="swatch-div"></div>
          </div>

          <div className="watch-div-laptop">
            <div className="watch-text-div-laptop">
              <p className="watch-p">Basic Gift Idea</p>
              <h5>New Arrivals </h5>
              <div className="h4-div">
                <h5>in Accessories</h5>
                <h5> at Best Price.</h5>
              </div>
              <div className="hotsale-button">
              <div className="watch-button">
                <p
                  style={{
                    color: "white",
                    margin: "0",
                    fontSize: "small",
                    fontWeight: "600",
                  }}
                >
                  Go Shop
                </p>
              </div>
              </div>
            </div>
            <div className="swatch-div-laptop"></div>
          </div>
            {/* <img src={Watch} alt="smart watch" className="swatch-div"/>  */}


          {/* <div className="laptop1-div">
            <div className="watch-text-div">
              <p>Get 50% Off</p>
              <h5>New Arrivals </h5>
              <div className="h4-div">
                <h5>in Accessories at</h5>
                <h5>Best Price.</h5>
              </div>
              <div className="watch-button">
                <p
                  style={{
                    color: "white",
                    margin: "0",
                    fontSize: "small",
                    fontWeight: "600",
                  }}
                >
                  Go Shop
                </p>
              </div>
            </div>
            <div className="laptopimg1-div"></div>
          </div> */}

        </div>

          {/* <img src={LAptop1} alt="latop1" className="laptopimg1-div"/>  */}
        <div className="right-side-div">
          <div className="right-side-div1">
            <div className="right-side-image-div">
              <img src={Laptop2} alt="laptop2" className="right-side-div-img" />
              <div className="image-text-div">
                <div className="image-text2-div">
                  <h4>15%</h4>
                  <h5>Offer</h5>
                </div>
              </div>
            </div>
            <div className="right-side-div-text">
              <div className="right-side-div-h6">
                <h6>Intel Laptop</h6>
              </div>
              <div className="right-side-div-price">
                <div className="h5-left-side">
                  <h5>
                    <strike>$640.00</strike>
                  </h5>
                </div>
                <div className="h5-right-side">
                  <h5>$540.00</h5>
                </div>
              </div>
            </div>
            <div className="under-text-div">
              <div className="uneder-text-div1">
                <div className="uneder-text1-div1">
                  <h5>Hurry Up!</h5>
                </div>
                <div className="uneder-text2-div1">
                  <h6>Offers ends in:</h6>
                </div>
              </div>
              <div className="circles-div">
                <p>0</p>
                <p>00</p>
                <p>00</p>
                <p>00</p>
              </div>
              <div className="circles-time">
                <p>DAYS</p>
                <p>HOURS</p>
                <p>MINUTES</p>
                <p>SECONDS</p>
              </div>
            </div>
          </div>
          <div className="right-side-div1">
            <div className="right-side-image-div">
              <img src={Watch2} alt="Watch2" className="right-side-div-img" />
              <div className="image-text-div">
                <div className="image-text2-div">
                  <h4>15%</h4>
                  <h5>Offer</h5>
                </div>
              </div>
            </div>
            <div className="right-side-div-text">
              <div className="right-side-div-h6">
                <h6>Luxury Watch</h6>
              </div>
              <div className="right-side-div-price">
                <div className="h5-left-side">
                  <h5>
                    <strike>$640.00</strike>
                  </h5>
                </div>
                <div className="h5-right-side">
                  <h5>$540.00</h5>
                </div>
              </div>
            </div>
            <div className="luxury-watch-text-div">
              <div className="avaibility-div">
                <p>Already Sold:23</p>
                <p>Avaibilty:29</p>
              </div>

              <div className="sold-bar">
                <ProgressBar
                  variant="warning"
                  now={80}
                  style={{ height: "10px" }}
                />
              </div>
            </div>
            <div className="under-text-div2">
              <div className="uneder-text-div1">
                <div className="uneder-text1-div1">
                  <h5>Hurry Up!</h5>
                </div>
                <div className="uneder-text2-div1">
                  <h6>Offers ends in:</h6>
                </div>
              </div>
              <div className="circles-div">
                <p>0</p>
                <p>00</p>
                <p>00</p>
                <p>00</p>
              </div>
              <div className="circles-time">
                <p>DAYS</p>
                <p>HOURS</p>
                <p>MINUTES</p>
                <p>SECONDS</p>
              </div>
            </div>
          </div>
          <div className="right-side-div1">
            <div className="right-side-image-div">
              <img src={Vr} alt="VR" className="right-side-div-img" />
              <div className="image-text-div">
                <div className="image-text2-div">
                  <h4>15%</h4>
                  <h5>Offer</h5>
                </div>
              </div>
            </div>
            <div className="right-side-div-text">
              <div className="right-side-div-h6">
                <h6>3D Glass</h6>
              </div>
              <div className="right-side-div-price">
                <div className="h5-left-side">
                  <h5>
                    <strike>$640.00</strike>
                  </h5>
                </div>
                <div className="h5-right-side">
                  <h5>$540.00</h5>
                </div>
              </div>
            </div>
            <div className="under-text-div">
              <div className="uneder-text-div1">
                <div className="uneder-text1-div1">
                  <h5>Hurry Up!</h5>
                </div>
                <div className="uneder-text2-div1">
                  <h6>Offers ends in:</h6>
                </div>
              </div>
              <div className="circles-div">
                <p>0</p>
                <p>00</p>
                <p>00</p>
                <p>00</p>
              </div>
              <div className="circles-time">
                <p>DAYS</p>
                <p>HOURS</p>
                <p>MINUTES</p>
                <p>SECONDS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hotsale;
