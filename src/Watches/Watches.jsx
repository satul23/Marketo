import React from "react";
import './Watches.css';
import { Col, Row } from "react-bootstrap";
import MensWatches from './MensWaches.jpg';
import WatchesLux from './WatchesLux.webp';
import Watchleft from './watchleft.webp';
import Watchmiddle from './watchmiddle.jpg';
import WatchGHour from './WatchGHour.webp';
import WatchGold from './WatchGold.webp';
import Watchdia from './Watchdia.jpg';
import WatchBra from './WatchBra.avif';
import WatchAP from './WatchAP.jpg';

const Watches = () => {


    return(
        <>
        <section className="Watches-section">
        <div className="Watch-div">
         <div className="watch-left-div">
           <div className="Womenclothing-left-image-div">
          <img src ={Watchleft} alt="leftdivimg" className="watch-Leftdivimg"/>  
          </div>
          <div className="watch-left-text-div">
          <div className="Heading-div">
            <h4>Watches</h4>
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
          <img src={Watchmiddle} alt="middledivimg" className="middledivimg"/>
         </div>
         <div className="Womenclothing-right-div">
         <Row className="Womenclothing-right-div-row1">
            <Col className="Womenclothing-right-div-cols">
            <div className="1rowdiv">
            <div className="rowimgss"> 
            <img src={MensWatches} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Mens Watches</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>AP</h6>
                </div>
              <div className="row1text-div-price">
                <p>$240.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={WatchesLux} alt="row1img1" className="row1imgs"/>
            </div>
             <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Luxury Watch</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Rolex</h6>
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
            <img src={Watchdia} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Diamond Watches</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Rolex</h6>
                </div>
              <div className="row1text-div-price">
                <p>$210.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={WatchGold} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Women Watch</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Gucci</h6>
                </div>
              <div className="row1text-div-price">
                <p>$540.00</p>
              </div>
             </div>
            </div>
            </Col>
         </Row>
         <Row className="Womenclothing-right-div-row2">
         <Col className="Womenclothing-right-div-cols2">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={WatchBra} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Bracelet Watches</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>TH</h6>
                </div>
              <div className="row1text-div-price">
                <p>$40.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={WatchGHour} alt="row1img1" className="row1imgs"/>
            </div>
             <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Goldenhour Watch</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>TH</h6>
                </div>
              <div className="row1text-div-price">
                <p>$60.00</p>
              </div>
             </div>
            </div>
            </Col>
            <Col className="Womenclothing-right-div-cols2">
            <div className="1rowdiv">
            <div className="rowimgss">
            <img src={WatchAP} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Audemars Pique</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Royal Oak</h6>
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
            <img src={WatchGold} alt="row1img1" className="row1imgs"/>
            </div>
            <div className="row1text-div">
              
                <div className="row1text-div1-1">
                 <h6>Women Watch</h6>
                </div>
                <div className="row1text-div1-1">
                 <h6>Gucci</h6>
                </div>
              <div className="row1text-div-price">
                <p>$540.00</p>
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

 export default Watches;