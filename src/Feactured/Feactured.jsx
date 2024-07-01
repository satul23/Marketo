import React from "react";
import './Featured.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Col, Row } from "react-bootstrap";
import fea1 from './feavr.jpg';
import fea2 from './feaKotion.jpg';
import fea3 from './feaLaptop.webp';
import fea4 from './feagame.jpg';
import fea5 from './feaccam.jpg';
import fea6 from './feastereo.jpg';
import fea7 from './fea6s.jpg';
import fea8 from './feamovincam.jpg';
import fea9 from './feagame.jpg';
import feacre from './feacre.png';
import feacre2 from './feacre2.png';
import feahip from './feahip.png';
import feavin from './feavin.png';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";


const Featured = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <IoIosArrowForward />,
      prevArrow: <IoIosArrowBack />
  };

    return(
        <>
        <section className="Featured-section">
        <div className="Topcatlist">
            <ul className="toplistItems">
                <li>
                 <a className="toplistlinks" href=""> Featured Products</a> 
                </li>
                <li>
                 <a className="toplistlink" href="">Trending Products </a> 
                </li>
                <li>
                 <a className="toplistlink" href=""> Hot Sale</a> 
                </li>
            </ul>
        </div>
        <section className="Featured-products">
        
        <section className="Featured-products-div">
        <Slider {...settings}>
         
        <div className="Featured-products-div">  
        <Row className="featured-right-div-row1">
            <Col className="Womenclothing-right-div-cols">
            <div className="rowdivfea">
            <div className="rowimgss"> 
            <img src={fea1} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Mini 3D Glass</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$220.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea2} alt="row1img1" className="row1-2imgs"/>
            </div>
             <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Kotion Headset</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$29.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea3} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Core i7 Laptop</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$125.00</p>
              </div>
             </div>
            </div>
            </Col>
            
         </Row>
         <Row className="featured-right-div-row2">
         <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea4} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Bluetooth Gamepad</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$199.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea5} alt="row1img1" className="row1-2imgs"/>
            </div>
             <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Waterproof Camera</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$520.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea6} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Stereo Headset</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$16.00</p>
              </div>
             </div>
            </div>
            </Col>
           
         </Row>
         
         <Row className="featured-right-div-row2">
         <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea7} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Apple iPhone 6s</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$299.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea8} alt="row1img1" className="row1imgs"/>
            </div>
             <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Moving Camera</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$230.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea9} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Golden Bluetooth</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$12.00</p>
              </div>
             </div>
            </div>
            </Col>
         </Row> 
         </div> 
         <div className="Featured-products-div">  
        <Row className="featured-right-div-row1">
            
            <Col className="Womenclothing-right-div-cols">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea2} alt="row1img1" className="row1imgs"/>
            </div>
             <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Kotion Headset</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$29.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea3} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Core i7 Laptop</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$125.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols">
            <div className="rowdivfea">
            <div className="rowimgss"> 
            <img src={fea1} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Mini 3D Glass</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$220.00</p>
              </div>
             </div>
            </div>
            </Col>
            
         </Row>
         <Row className="featured-right-div-row2">
         
            <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea5} alt="row1img1" className="row1imgs"/>
            </div>
             <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Waterproof Camera</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$520.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea6} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Stereo Headset</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$16.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea4} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Bluetooth Gamepad</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$199.00</p>
              </div>
             </div>
            </div>
            </Col>
           
         </Row>
         
         <Row className="featured-right-div-row2">
         
            <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea8} alt="row1img1" className="row1imgs"/>
            </div>
             <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Moving Camera</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$230.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea9} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Golden Bluetooth</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$12.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea7} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Apple iPhone 6s</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$299.00</p>
              </div>
             </div>
            </div>
            </Col>
         </Row> 
         </div>
          </Slider>
          
          </section> 
         
        
         <section className="featured-img-div">
         <img src={fea2} alt="fea2"  className="featured-right-img"/>
         <div className="featured-right-text-div">
          <div className="featured-text1">
           <h1>Your Dream</h1>
          </div>
          <div className="featured-text2">
           <h1>
            <h1> Comes True</h1>
           </h1>
          </div>
         </div>
         </section>
         </section> 
         </section>
       

        <section className="section-under-featured">
        <div className="section-under-featured-div">
           <div className="section-under-featured1">
           <img src={feacre} alt="feacre"  className="featured-section2-img"/>
           </div>
           <div className="section-under-featured1">
           <img src={feacre} alt="feacre2"  className="featured-section2-img"/>
           </div>
           <div className="section-under-featured1">
           <img src={feavin} alt="feavin"  className="featured-section2-img"/>
           </div>
           <div className="section-under-featured1">
           <img src={feacre2} alt="feacre2"  className="featured-section2-img"/>
           </div>
           <div className="section-under-featured1">
            <img src={feahip} alt="feahip" className="featured-section2-img" /> 
           </div>
        </div>
        </section>
        </>
    )
}
 
   export default Featured;
