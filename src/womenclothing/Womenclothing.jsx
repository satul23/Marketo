import React from "react";
import './Womenclothing.css';
import Leftdivimg from './leftdivimg.jpg';
import Middledivimg from './middledivimg.jpg';
import Row1img1 from './row1-1.jpg';
import Row1img2 from './row1-2.jpg';
import Row1img3 from './row1-3.webp';
import { Col, Row } from "react-bootstrap";
 
const Womenclothing = () => {


    return(
        <>
        <section className="Womenclothing-section">
        <div className="Womenclothing-div">
         <div className="Womenclothing-left-div">
           <div className="Womenclothing-left-image-div">
          <img src={Leftdivimg} alt="leftdivimg" className="Leftdivimg"/>  
          </div>
          <div className="Womenclothing-left-text-div">
          <div className="Heading-div">
            <h4>Women Clothing</h4>
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
          <img src={Middledivimg} alt="middledivimg" className="middledivimg"/>
         </div>
         <div className="Womenclothing-right-div">
         <Row className="Womenclothing-right-div-row1">
            <Col className="Womenclothing-right-div-cols">
            <div className="1rowdiv">
            <div className="rowimgss"> 
            <img src={Row1img1} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Summer Casual</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Cotton</h6>
                </div>
              <div className="row1text-div-price">
                <p>$19.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={Row1img2} alt="row1img1" className="row1imgs"/>
            </div>
             <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Black Solid Color</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Full Sleves</h6>
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
            <img src={Row1img3} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Women Tops Solid</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Color</h6>
                </div>
              <div className="row1text-div-price">
                <p>$19.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={Row1img3} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Women Tops</h6>
                </div>
              <div className="row1text-div-price">
                <p>$19.00</p>
              </div>
             </div>
            </div>
            </Col>
         </Row>
         <Row className="Womenclothing-right-div-row2">
         <Col className="Womenclothing-right-div-cols2">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={Row1img1} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Summer Casual</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Cotton</h6>
                </div>
              <div className="row1text-div-price">
                <p>$19.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={Row1img3} alt="row1img1" className="row1imgs"/>
            </div>
             <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Women Tops Solid</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Color</h6>
                </div>
              <div className="row1text-div-price">
                <p>$19.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={Row1img2} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Women Tops</h6>
                </div>
              <div className="row1text-div-price">
                <p>$19.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={Row1img3} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Women Solid Color</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Short Sleeves</h6>
                </div>
              <div className="row1text-div-price">
                <p>$29.00</p>
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

 export default Womenclothing;