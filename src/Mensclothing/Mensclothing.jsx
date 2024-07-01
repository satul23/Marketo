import React from "react";
import './Mensclothing.css';
import { Col, Row } from "react-bootstrap";
import mensleftimg from './mens-left-img.jpg'
import mensmiddle from './mens-middle.jpg'; 
import mens1row1  from './mens-row1.jpg';
import mens1row2 from './mens-1row2.webp';
import mens1row3 from './mens-1row3.jpg';
import mens1row4 from './mens-1row4.jpg';
import mens2row4 from './mens-2row.jpg';

const Mensclothing = () => {


    return(
        <>
        <section className="Mensclothing-section">
        <div className="menclothing-div">
         <div className="menclothing-left-div">
           <div className="menclothing-left-image-div">
          <img src={mensleftimg} alt="leftdivimg" className="men-Leftdivimg"/>  
          </div>
          <div className="menclothing-left-text-div">
          <div className="Heading-div">
            <h4>Mens Clothing</h4>
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
          <img src={mensmiddle} alt="middledivimg" className="middledivimg"/>
         </div>
         <div className="Womenclothing-right-div">
         <Row className="Womenclothing-right-div-row1">
            <Col className="Womenclothing-right-div-cols">
            <div className="1rowdiv">
            <div className="rowimgss"> 
            <img src={mens1row1} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Pioneer Men</h6>
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
            <img src={mens1row2} alt="row1img1" className="row1imgs"/>
            </div>
             <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Pioneer Men</h6>
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
            <img src={mens1row3} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Pioneer Men</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Casual Full Sleeve</h6>
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
            <img src={mens1row4} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Pioneer Men</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Casual Full Sleeve</h6>
                </div>
              <div className="row1text-div-price">
                <p>$29.00</p>
              </div>
             </div>
            </div>
            </Col>
         </Row>
         <Row className="Womenclothing-right-div-row2">
         <Col className="Womenclothing-right-div-cols2">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={mens1row4} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Mens Pioneer</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>T-Shirts</h6>
                </div>
              <div className="row1text-div-price">
                <p>$29.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={mens1row3} alt="row1img1" className="row1imgs"/>
            </div>
             <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Men Black Solid</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Full Sleeves</h6>
                </div>
              <div className="row1text-div-price">
                <p>$29.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={mens1row2} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Mens Pioneer</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>T-Shirt</h6>
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
            <img src={mens2row4} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Men's Solid Color</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Short Sleeve</h6>
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

 export default Mensclothing;