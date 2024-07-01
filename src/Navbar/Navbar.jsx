import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Navbar.css";
import {NavDropdown} from 'react-bootstrap'

const Navbar = () =>{


    return(
        <>
          
            <header className="header ">
                <div className="logo">
                    <a href="" className="logos flex">
                        <h1>Marketo <span className="dot">.</span></h1>
                    </a>
                </div>
                
                <div  className="navbarwid">
                
                    <ul className="navbarlist">
                    <li className="NavItems">
                           <a href="" className="Navlink">Home</a>   
                                          
                       </li>  
                       <NavDropdown className="drop"  title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1"  >About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                FAQ
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tearms And Conditions</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Products
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="drop"  title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" >Shop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Product details
              </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown className="drop"  title="Blogs" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Blog Single
              </NavDropdown.Item>
            </NavDropdown>
    
        <li className="NavItems">
                           <a href="" className="Navlink">Gallery</a>                
                       </li>
                       <li className="NavItems">
                           <a href="" className="Navlink">Doakn</a>                   
                       </li>

                    </ul>
                </div>
                <div className="icons ">

                <div className="heartIcon">
                  <a href="">
                  <FaRegHeart className="icon"/>
                  </a>
                </div>
                <div className="shoppingIcon">
                  <a href="">
                  <HiOutlineShoppingBag className="icon"/>
                  </a>
                </div>
                </div>
            </header>
          
        </>
    )
}

 export default Navbar;