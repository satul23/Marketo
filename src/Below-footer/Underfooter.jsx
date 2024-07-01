import React from 'react';
import './Underfooter.css';
import { IoMdHome } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoReorderThree } from "react-icons/io5";

const Underfooter = () => {
  
  
  return (
    <>
    <section className='Underfooter-section'>
     <div className='Underfooter-div'>
      <div className='Underfooter-home'>
      <IoMdHome className='Underfooter-icon1'/>
      </div>
      <div className='Underfooter-account'>
       <FaRegUser className='Underfooter-icon'/>
      </div>
      <div className='Underfooter-bagg'>
       <RiShoppingBagLine className='Underfooter-icon3'/>
      </div>
      <div className='Underfooter-options'>
      <IoReorderThree className='Underfooter-icon4'/>
      </div>
     </div>
    </section>
    </>
  )
}

export default Underfooter;
