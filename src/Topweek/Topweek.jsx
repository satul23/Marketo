import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Topweek.css";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import image1 from './topweek1.png';
import { CiHeart } from "react-icons/ci";
import iphone7s from "./7s.jpg";
import iphone6s from './6s.png';
import wirelessmicro from './wiremicro.jpg';
import cccam from './cccam.jpg';
import movincam from './movincam.jpg';
import corei7lap from './corei7lap.webp';
import unlockedphone from './uphone.jpg';
import sthead from './sthead.jpg';
import cameradrone from "./cameradrone.jpg";
import sdrone from './sdrone.jpg';
import ledpro from './ledpro.webp';

const Topweek = () => {


    return(
        <>
       <section className="Topweek-section">
         <div  className="topweek-heading">
            <h4>Top Categories This Week</h4>  
        </div> 
         <div className="Topcatlist">
            <ul className="toplistItems">
                <li>
                 <a className="toplistlink" href=""> Projectors</a> 
                </li>
                <li>
                 <a className="toplistlink" href="">Light</a> 
                </li>
                <li>
                 <a className="toplistlink" href=""> Laptop</a> 
                </li>
                <li>
                 <a className="toplistlink" href="">Headphones</a> 
                </li>
                <li>
                 <a className="toplistlink" href="">Google Glass</a> 
                </li>
            </ul>
        </div>  
       </section>

       <section className="topproducts">
        
       <Row className="toprows">
          <Col className="topcols">
          
          <div className="projectorx">
          <div className="xProjector">
              <img className="topcatimg" src={image1} alt="" />
          </div>
           <div className="topproductst1">
               <h6>Xpeed Projector</h6>
               <h5 className="tophead"><span className="topheadspan"><strike className='strike'> $520.00</strike></span>$499.00</h5>
           </div>
          </div> 
          <CiHeart className="topicon"/>
          </Col>
          <Col className="topcols">
          <div className="projectorx">
          <div className="xProjector">
              <img className="topcatimg" src={iphone7s} alt="iphone7s" />
          </div>
           <div className="topproductst1">
               <h6>Apple iPhone 7s</h6>
               <div className="pricediv">
               <h5 className="tophead"><span className="topheadspan"><strike>$690.00</strike></span>$660.00</h5>
               </div>
           </div>
          </div>
          <CiHeart className="topicon"/> 
          </Col>  
          <Col className="topcols">
          <div className="projectorx">
          <div className="xProjector">
              <img className="topcatimg" src={iphone6s} alt="6s" />
          </div>
           <div className="topproductst1">
               <h6>Apple iPhone 6s</h6>
               <h5 className="tophead">$299.00</h5>
           </div>
          </div>
          <CiHeart className="topicon"/> 
          </Col> 
          <Col className="topcols">
          <div className="projectorx">
          <div className="xProjector">
              <img className="topcatimg" src={wirelessmicro} alt="wirelessmicro" />
          </div>
           <div className="topproductst1">
               <h6>Wireless Microphone</h6>
               <h5 className="tophead">$70.00</h5>
           </div>
          </div> 
          <CiHeart className="topicon"/>
          </Col> 
        </Row> 
        <Row className="toprows">
          <Col className="topcols">
          <div className="projectorx">
          <div className="xProjector">
              <img className="topcatimg" src={cccam} alt="cc camera" />
          </div>
           <div className="topproductst1">
               <h6>CC Camera</h6>
               <h5 className="tophead"><span className="topheadspan"><strike> $520.00</strike></span>$499.00</h5>
           </div>
          </div>
          <CiHeart className="topicon"/> 
          </Col>
          <Col className="topcols">
          <div className="projectorx">
          <div className="xProjector">
              <img className="topcatimg" src={movincam} alt="movincam" />
          </div>
           <div className="topproductst1">
               <h6>Moving Camera</h6>
               <h5 className="tophead">$230.00</h5>
           </div>
          </div>
          <CiHeart className="topicon"/> 
          </Col>  
          <Col className="topcols">
          <div className="projectorx">
          <div className="xProjector">
              <img className="topcatimg" src={corei7lap} alt="corei7lap" />
          </div>
              
          <div className="textdiv34">
          <div className="staricon">
           <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          </div>
           <div className="topproductst1">
               <h6>Core i7 Laptop</h6>
               <h5 className="tophead">$125.00</h5>
               
           </div>
           </div>
          </div> 
          
          <CiHeart className="topicon"/>
    
          </Col> 
          <Col className="topcols">
          <div className="projectorx">
          <div className="xProjector">
              <img className="topcatimgmobile" src={unlockedphone} alt="unlocked" />
          </div>
           <div className="topproductst1">
               <h6>Unlocked Mobile Phone</h6>
               <h5 className="tophead">$125.00</h5>
           </div>
          </div>
          <CiHeart className="topicon"/> 
          </Col> 
        </Row> 
        <Row className="toprows">
          <Col className="topcols">
          <div className="projectorx">
          <div className="xProjector">
              <img className="topcatimg" src={sthead} alt="stereo" />
          </div>
           <div className="topproductst1">
               <h6>Stereo Headset</h6>
               <h5 className="tophead">$16.00</h5>
           </div>
          </div>
          <CiHeart className="topicon"/> 
          </Col>
          <Col className="topcols">
          <div className="projectorx">
          <div className="xProjector">
              <img className="topcatimg" src={cameradrone} alt="cameradrone" />
          </div>
           <div className="topproductst1">
               <h6>Camera Drone</h6>
               <h5 className="tophead"><span className="topheadspan"><strike> $720.00</strike></span>$540.00</h5>
           </div>
          </div>
          <CiHeart className="topicon"/> 
          </Col>  
          <Col className="topcols">
          <div className="projectorx">
          <div className="xProjector">
              <img className="topcatimg" src={sdrone} alt="stone drone" />
          </div>
           <div className="topproductst1">
               <h6>Holy Stone Drone</h6>
               <h5 className="tophead"><span className="topheadspan"><strike>$720.00</strike></span>$540.00</h5>
           </div>
          </div>
          <CiHeart className="topicon"/> 
          </Col> 
          <Col className="topcols">
          <div className="projectorx">
          <div className="xProjector">
              <img className="topcatimg" src={ledpro} alt="" />
          </div>
          <div className="textdiv34">
          <div className="staricon">
           <FaStar/>
          <FaStar/>
          <CiStar/>
          <CiStar/>
          <CiStar/>
          </div>
           <div className="topproductst1">
               <h6>LED Projector</h6>
               <h5 className="tophead">$20.00</h5>
           </div>
           </div>
          </div> 
          <CiHeart className="topicon"/>
          </Col> 
        </Row> 
       </section>
        </>
    )
}

 export default Topweek;