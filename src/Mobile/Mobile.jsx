import React from "react";
import './Mobile.css';
import { Col, Row } from "react-bootstrap";
import MObileleft from './mobileleft.webp';
import mobilemiddle from './mobilemiddle.jpg';
import mobile1row1 from './mobile-1row1.jpg';
import Mobile7s from './mobile7s.jpg';
import mobilevr from './mobilevr.jpg';
import mobiletv from './mobiletv.jpg';
import mobilezhn from './mobilezhn.webp';
import Mobilemetal from './mobilemetal.webp';

const Mobile = () => {


    return(
        <>
        <section className="Mobile-section">
        <div className="mobile-div">
         <div className="mobile-left-div">
           <div className="Womenclothing-left-image-div">
          <img src={MObileleft} alt="leftdivimg" className="mobile-Leftdivimg"/>  
          </div>
          <div className="mobile-left-text-div">
          <div className="Heading-div">
            <h4>Mobile</h4>
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
          <img src={mobilemiddle} alt="middledivimg" className="middledivimg"/>
         </div>
         <div className="Womenclothing-right-div">
         <Row className="Womenclothing-right-div-row1">
            <Col className="Womenclothing-right-div-cols">
            <div className="1rowdiv">
            <div className="rowimgss"> 
            <img src={mobile1row1} alt="row1img1" className="row1imgs"/>
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
            <Col className="Womenclothing-right-div-cols">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={Mobile7s} alt="row1img1" className="row1imgs"/>
            </div>
             <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Apple iPhone 7s</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$660.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={Mobilemetal} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Metal Body Phone</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$160.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={mobilezhn} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Zhndu Mobile</h6>
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
            <img src={mobilevr} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>3D Glass</h6>
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
            <img src={mobile1row1} alt="row1img1" className="row1imgs"/>
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
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={mobilezhn} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Zhndu Mobile</h6>
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
            <img src={mobiletv} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Smart TV</h6>
                </div>
                
              <div className="row1text-div-price">
                <p>$60.00</p>
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

 export default Mobile;