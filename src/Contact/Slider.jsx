import React from 'react'
import { Col, Row } from "react-bootstrap";
import fea1 from  "../Feactured/fea6s.jpg"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from  "../Feactured/fea6s.jpg"


const Slidertest = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (

    <div>
       {/* <div>
        <Slider {...settings}>
        <div className="Featured-products-div">  
        <Row className="Womenclothing-right-div-row1">
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
         <Row className="Womenclothing-right-div-row2">
         <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
         
         <Row className="Womenclothing-right-div-row2">
         <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
        <Row className="Womenclothing-right-div-row1">
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
         <Row className="Womenclothing-right-div-row2">
         <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
         
         <Row className="Womenclothing-right-div-row2">
         <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
        <Row className="Womenclothing-right-div-row1">
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
         <Row className="Womenclothing-right-div-row2">
         <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
         
         <Row className="Womenclothing-right-div-row2">
         <Col className="Womenclothing-right-div-cols2">
            <div className="rowdivfea">
            <div className="rowimgss">
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
            <img src={fea1} alt="row1img1" className="row1imgs"/>
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
         
        </Slider>
      </div> */}
      
      <Carousel>
    <Carousel.Item>
    <img src={fea1} alt="row1img1" className="row1imgs"/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={fea1} alt="row1img1" className="row1imgs"/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={fea1} alt="row1img1" className="row1imgs"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>









  <Carousel slide={false}>
      <Carousel.Item>
    <img src={fea1} alt="row1img1" className="row1imgs"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    <img src={fea1} alt="row1img1" className="row1imgs"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    <img src={fea1} alt="row1img1" className="row1imgs"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
    

    
  )
}

export default Slidertest
