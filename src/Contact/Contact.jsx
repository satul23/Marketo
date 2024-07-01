import React from "react";
import './Contact.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import contactpay from './contactpay.png';
import contactskrill from './contact-skrill.png';
import contactnor from './contact-nor.png';
import contactam from './contact-am.png';
import contactmca from './contact-mca.png';

const Contact = () => {

    return(
        <>
        <section className="Contact-section">
        <div className="Contact-marketo-div">
         <div className="Contact-heading">
         <a href="" className="logos flex">
                        <h1>Marketo <span className="dot">.</span></h1>
                    </a>
         </div>
         <div className="Contact-Question">
                <h3>
                    Got Question? Call Us
                </h3>
         </div>
         <div className="Contact-Question2">
                   <h3>24/7</h3>
         </div>
         <div className="Contact-Questionno">
                <h5>
                    [80] 1017197
                </h5>
         </div>
         <div className="Contact-location"> 
             <p>17 Princess Road, London, Greater</p> 
             <p>London NW1 8JR, UK</p>   
         </div>
         
         <div className="Contact-button-div">
            <div className="Contact-icon-div">
           <FaLocationDot className="Contact-icon"/><p>View On Map</p>
           </div>
         </div>
        </div> 
        <div className="Contact-marketo-div2">
        <div className="Contact-Question">
                <h3>
                    We Using
                </h3>
         </div>
         <div className="Contact-Questionno">
                <h3>
                    Safe Payments
                </h3>
         </div>
         <div className="contact-payments">
         <img src={contactskrill} alt="contactskrill" />
         <img src={contactpay} alt="contactpay" />
         <img src={contactam} alt="contactam" />
         </div>
         <div className="Contact-location">
          <p>
            Secured By:
          </p>
         </div>
         <div className="Contact-secured-img">
          <img src={contactnor} alt="" />
          <img src={contactmca}  alt="" />
         </div>
        </div>
        <div className="Contact-marketo-div3-4">
        <div  className="Contact-marketo-div3">
        <div className="Contact-Heading-div">
            <h4>Our Stores</h4>
          </div>
          <div className="Contact-Options-div">
           <ul className="Options-div-list">
             <li>
                <a href=""  className="Options-div-listLinksss" >New York</a>
             </li>
             <li className="Options-div-listLinks">
                <a href=""  className="Options-div-listLinksss" >London SF</a>
             </li>
             <li className="Options-div-listLinks">
                <a  className="Options-div-listLinksss" href="">Cockfosters BP</a>
             </li>
             <li className="Options-div-listLinks">
                <a  className="Options-div-listLinksss" href="">Los Angles</a>
             </li>
             <li className="Options-div-listLinks">
                <a  className="Options-div-listLinksss" href="">Chicago</a>
             </li>
             <li className="Options-div-listLinks">
                <a  className="Options-div-listLinksss" href="">Las Vegas</a>
             </li>
             <li className="Options-div-listLinks">
                <a  className="Options-div-listLinksss" href="">Albarta</a>
             </li>
            
           </ul>
          </div>
        </div>
        <div className="Contact-marketo-div4">
        <div className="Contact-Heading-div">
            <h4>Quick Links</h4>
          </div>
          <div className="Contact-Options-div">
           <ul className="Options-div-list">
             <li>
                <a href=""  className="Options-div-listLinksss" >Support Center</a>
             </li>
             <li className="Options-div-listLinks">
                <a href=""  className="Options-div-listLinksss" >Terms @ Conditions</a>
             </li>
             <li className="Options-div-listLinks">
                <a  className="Options-div-listLinksss" href="">Shipping</a>
             </li>
             <li className="Options-div-listLinks">
                <a  className="Options-div-listLinksss" href="">Privacy Policy</a>
             </li>
             <li className="Options-div-listLinks">
                <a  className="Options-div-listLinksss" href="">Help</a>
             </li>
             <li className="Options-div-listLinks">
                <a  className="Options-div-listLinksss" href="">Products Return</a>
             </li>
             <li className="Options-div-listLinks">
                <a  className="Options-div-listLinksss" href="">FAQS</a>
             </li>
            
           </ul>
          </div>
        </div>
        </div>
        <div className="Contact-marketo-div5">
         {/* <div className="Contact-marketo-div5-button">
           <div className="Contact-marketo-div4-button-icon">
           </div>
         </div> */}
         <div>
            <button className="Contact-marketo-div5-button">
            <FaArrowDownLong 
                      className="div5-button"/>
          <p>Back  Top</p>

            </button>
         </div>
        </div>

        </section>
        </>
    )
}

  export default Contact;