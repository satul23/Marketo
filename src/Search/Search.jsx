import React from "react";
import "./Search.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { Dropdown } from "react-bootstrap";

const Search = () => {
  return (
    <>
      {/* <section className="Search">
        <div className="categorysec">
          <IoReorderThreeSharp className="icon2" />
          <a href="" className="category">
            All Categories
          </a>
          <RiArrowDropDownLine className="icon3" />
        </div>

        <div className="searchbox">
          <input
            className="input"
            type="search"
            placeholder="find your product"
          />
          <div className="paradiv">
            <p className="para"> All Categories</p>
          </div>
          <div>
            <IoSearchSharp className="icon4" />
          </div>
        </div>
        <div className="box23">
          <h5 className="box2">BLACK FRIDAY</h5>
          <p className="box3">Get 45% off!</p>
        </div>
      </section> */}
     
      <section className="Search">
        <div className="categorysec">
          <IoReorderThreeSharp className="icon2" />
          <h2 className="cate">All Categories</h2>
          <RiArrowDropDownLine className="icon3" />
        </div>
         
        <section className="Search1">
        <div className="categorysec2">
          <div className="text4">
            <input
              type="text"
              className="searchbar"
              placeholder="Find your product"
            />
          </div>
          <div className="allcate">
            <Dropdown className="categories_dropdown">
              <Dropdown.Toggle  id="dropdown-basic">
                All Categories
              </Dropdown.Toggle >

              <Dropdown.Menu >
                <Dropdown.Item href="#/action-1">All Categories</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Laptop</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Portable</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Watch</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Speaker</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Projector</Dropdown.Item>

                <Dropdown.Item href="#/action-3">Mobile</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Light</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Headphones</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Google Glass</Dropdown.Item>
                
              </Dropdown.Menu>
            </Dropdown>
          </div>
          
        </div>
        <section>
        <div className="allcate2">
            <a href="">
              <IoSearchSharp className="icon5" />
            </a>
          </div>
        </section>
        </section>
        <div className="black">
          <div className="black2">
          <h3 className="black1">BLACK FRIDAY</h3>
          {/* <div className="black2"> */}
            <p >get 45% Off</p>
          {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
