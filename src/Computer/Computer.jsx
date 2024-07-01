import React from "react";
import './Computer.css';
import { Col, Row } from "react-bootstrap";
import Laptop7s from './Laptop7s.jpg';
import Laptopcorei7lap from './Laptopcorei7lap.webp';
import Laptopvr from './Laptopvr.webp';
import LaptopKotion from './LaptopKotion.jpg';
import Laptopmiddle from './Laptopmiddle.jpg';
import Laptopsthead from './Laptopsthead.jpg';
import Laptopzhn from './Laptopzhn.webp';
import Laptopleft from './Laptopleft.jpg';

const Computer = () => {


    return(
        <>
        <section className="Computer-section">
        <div className="computer-div">
         <div className="laptop-left-div">
           <div className="Womenclothing-left-image-div">
          <img src={Laptopmiddle} alt="leftdivimg" className="laptop-Leftdivimg"/>  
          </div>
          <div className="laptop-left-text-div">
          <div className="Heading-div">
            <h4>Computer</h4>
          </div>
          <div className="Options-div">
           <ul className="Options-div-list">
             <li>
                <a href=""  className="Options-div-listLinkss" >Speaker</a>
             </li>
             <li className="Options-div-listLinks">
                <a href=""  className="Options-div-listLinkss" >Portable</a>
             </li>
             <li className="Options-div-listLinks">
                <a  className="Options-div-listLinkss" href="">Mobile</a>
             </li>
             <li className="Options-div-listLinks">
                <a  className="Options-div-listLinkss" href="">Light</a>
             </li>
             <li className="Options-div-listLinks">
                <a  className="Options-div-listLinkss" href="">Headphone</a>
             </li>
             <li className="Options-div-listLinks">
                <a  className="Options-div-listLinkss" href="">Google Glass</a>
             </li>
             <li className="Options-div-listLinks">
                <a  className="Options-div-listLinkss" href="">Drone</a>
             </li>
             <li className="Options-div-listLinks">
                <a  className="Options-div-listLinkss" href="">Camera</a>
             </li>
             <li className="Options-div-listLinks">
                <a  className="Options-div-listLinkss" href="">3D Glass</a>
             </li>
           </ul>
          </div>
          </div>
         </div>     
         <div className="Womenclothing-middle-div">
          <img src={Laptopleft} alt="middledivimg" className="middledivimg"/>
         </div>
         <div className="Womenclothing-right-div">
         <Row className="Womenclothing-right-div-row1">
            <Col className="Womenclothing-right-div-cols">
            <div className="1rowdiv">
            <div className="rowimgss"> 
            <img src={Laptopcorei7lap} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Intel Laptop</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$540.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={LaptopKotion} alt="row1img1" className="row1imgs"/>
            </div>
             <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Kotion Headset</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Casual Short</h6>
                </div>
              <div className="row1text-div-price">
                <p>$29.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={Laptopsthead} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Stereo Headset</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Casual Full Sleeve</h6>
                </div>
              <div className="row1text-div-price">
                <p>$16.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={Laptopzhn} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
            <div className="row1text-div1-1">
                 <h6>Zhndu Mobile</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Casual Full Sleeve</h6>
                </div>
              <div className="row1text-div-price">
                <p>$160.00</p>
              </div>
             </div>
            </div>
            </Col>
         </Row>
         <Row className="Womenclothing-right-div-row2">
         <Col className="Womenclothing-right-div-cols2">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={Laptopvr} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>3D Glass</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>T-Shirts</h6>
                </div>
              <div className="row1text-div-price">
                <p>$540.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={Laptop7s} alt="row1img1" className="row1imgs"/>
            </div>
             <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Apple iPhone 7s</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6></h6>
                </div>
              <div className="row1text-div-price">
                <p>$660.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={Laptopzhn} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
            <div className="row1text-div1-1">
                 <h6>Zhndu Mobile</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>T-Shirt</h6>
                </div>
              <div className="row1text-div-price">
                <p>$160.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={Laptopcorei7lap} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>core i7 Laptop</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Short Sleeve</h6>
                </div>
              <div className="row1text-div-price">
                <p>$125.00</p>
              </div>
             </div>
            </div>
            </Col>
         </Row> 
         </div>
        </div>

        </section>
        </>
    )
}

 export default Computer;