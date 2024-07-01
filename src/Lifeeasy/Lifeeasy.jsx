import React from "react";
import './Lifeeasy.css';
import Backgroundimg from './Backgroundimg.jpg';
import { Col, Row } from "react-bootstrap";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import laptop1 from './life-lap-1.webp';
import laptop2 from './life-lap-2.webp';
import laptop4 from './life-lap-4.webp';
import laptop3 from './life-lap-3.webp';

const Lifeeasy = () => {


    return(
        <>
        <section className="Lifeeasy-section">
         <div className="Lifeeasy-section-img">
            <img src={Backgroundimg} alt="lifeeasyback" className="Lifeeasy-background-img"/>
            <div className="Lifeeasy-div">
         <div className="Life-top-div">
            <div className="Life-top-text">
            <h4>Gadget Makes Your Life Easy</h4>
            </div>
            <div className="Life-top-button">
             <p>View Collections</p>
            </div>
        </div> 

        <div className="Life-middle-div">
         <Row className="life-row-1">
            <Col className="life-col-1">
            <div className="Life-middle-img-col">
            <div className="Life-middle-img-div">
              <img src={laptop1} alt="" className="Life-middle-img1"/>
            </div>
            
            
            <div className="Life-middle-text-div">
            <div className="lifestar">
                 <FaStar className="life-star"/>
                 <FaStar className="life-star"/>
                 <FaStar className="life-star"/>
                 <CiStar className="life-star"/>
                 <CiStar className="life-star"/>
                 <div className="lifeicone">
               <CiHeart className="life-icon"/>
               </div>
                </div>
              <div className="life-all-text">
              <div className="Life-middle-text1">
               <h6>Xpeed Laptop</h6>
              </div>
              <div className="Life-middle-Price">
                <div className="Life-middle-Price1">
               <h5><strike>$640.00</strike></h5>
               </div>
               <div className="Life-middle-Price2">
                <h5>$540</h5>
               </div>
              </div>
              <div className="Life-middle-button-div">
                <h6>Read More</h6>
                </div> 
                </div>  
            </div>
            </div>
            
            </Col>
            <Col className="life-col-1">
            <div className="Life-middle-img-col">
            <div className="Life-middle-img-div">
              <img src={laptop2} alt="" className="Life-middle-img1"/>
            </div>
            <div className="Life-middle-text-div">
            <div className="lifeiconee">
            <CiHeart className="life-icon"/>
            </div>
            <div className="life-bottom-text-col2">
              <div className="Life-middle-text1">
               <h6>Xpeed Laptop</h6>
              </div>
              <div className="Life-middle-Price">
                <div className="Life-middle-Price1">
                <h5><strike>$640.00</strike></h5>
               </div>
               <div className="Life-middle-Price2">
                <h5>$540</h5>
               </div>
              </div>
              <div className="Life-middle-button-div">
                <h6>Read More</h6>
                </div>
                </div>
                
            </div>
            
                </div>  
                 
            </Col>
         </Row >
         <Row className="life-row-1">
            <Col className="life-col-1">
            <div className="Life-middle-img-col">
            <div className="Life-middle-img-div">
              <img src={laptop3} alt="" className="Life-middle-img1"/>
            </div>
            
            
            <div className="Life-middle-text-div">
            <div className="lifestar">
                 <FaStar className="life-star"/>
                 <FaStar className="life-star"/>
                 <FaStar className="life-star"/>
                 <FaStar className="life-star"/>
                 <FaStar className="life-star"/>
                 <div className="lifeicone">
               <CiHeart className="life-icon"/>
               </div>
                </div>
              <div className="life-all-text">
              <div className="Life-middle-text1">
               <h6>Core i7 Laptop</h6>
              </div>
              <div className="Life-middle-Price">
                <div className="Life-bottom-Price1">
               <h5>$125.00</h5>
               </div>
              </div>
              <div className="Life-middle-button-div">
                <h6>Add to cart</h6>
                </div> 
                </div> 
            </div>
            </div>
            
            </Col>
            <Col className="life-col-1">
            <div className="Life-middle-img-col">
            <div className="Life-middle-img-div">
              <img src={laptop4} alt="" className="Life-middle-img1"/>
            </div>
            
            
            <div className="Life-middle-text-div">
            <div className="lifestar">
                 <FaStar className="life-star"/>
                 <FaStar className="life-star"/>
                 <FaStar className="life-star"/>
                 <CiStar className="life-star"/>
                 <CiStar className="life-star"/>
                 <div className="lifeicone">
               <CiHeart className="life-icon"/>
               </div>
                </div>
              <div className="life-all-text">
              <div className="Life-middle-text1">
               <h6>Xpeed Laptop V2</h6>
              </div>
              <div className="Life-middle-Price">
                <div className="Life-bottom-Price1">
               <h5>$699.00</h5>
               </div>
              </div>
              <div className="Life-middle-button-div">
                <h6>Add to cart</h6>
                </div> 
                </div>
                
            </div>
            
            </div>
            
            </Col>
         </Row>
        </div>
        </div>
        </div>
       
        </section>
        </>
    )
}

 export default Lifeeasy;
