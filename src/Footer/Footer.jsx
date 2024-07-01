import React from "react";
import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TbCircleLetterC } from "react-icons/tb";

const Footer = () =>{
    

    return(
        <>
        <section className="Footer-Section">
            <div className="Footer-div">
         <div className="Footer-left-div">
         <p><span> <TbCircleLetterC/> 2021</span> XpeedStudio <span>All Rights Reserved</span></p>
         </div>
         <div className="footer-right-div">
            <div className="Footer-faceb">
            <FaFacebookF className="footer-fb"/>
            <p>Facebook</p>
            </div>
            <div className="Footer-faceb">
            <FaTwitter className="footer-fb"/>
            <p>Twitter</p>
            </div>
            <div className="Footer-faceb">
            <FaPinterestP className="footer-fb"/>
            <p>Pinterest</p>
            </div>
            <div className="Footer-insta">
            <FaInstagram className="footer-fb"/>
            <p>Instagram</p> 
            </div>
         </div>
         </div>
        </section>
        </>
    )
}

 export default Footer;