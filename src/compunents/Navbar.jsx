import React from "react";

import logo from "../compunents/logo.svg";
import '../compunents/Navbar.css';
import { BsSearch } from "react-icons/bs";
import { BsArrowRight} from "react-icons/bs";
// import { Link } from "react-router-dom";


const Navbar = () => {
  return (

    <>
 
   
      <div className="container-fluid">
        <div className="row bg-success">
          <div className="col-2 flex gap-2">
            <div>
              <img src={logo} className='mt-2' alt="error" />
            </div>
            <div>
              <h6 className="font-weight-bold mt-3 text-white">Food </h6>
            </div>
          </div>

          <div className="col-4 flex">
          <div className=" flex gap-1 between mt-1">
            <div>
              <h4 className="mt-2    text-white "><BsSearch/></h4>
            </div>
            <div>
              <input type="text" className="mt-2  input    text-center text-dark bg-success" placeholder="search"></input>
            </div>
            </div>
          </div>
          
            <div className="col-6  ">
                <div className="list">
                    <ul className="flex gap-5 links text-white ">
                   
                        <li className="li-item">Home </li>
                        <li className="li-item">
                             About</li>
                        <li className="li-item">
                                Contact</li>
                        <li className="li-item flex gap-2"> More   <span className="mt-1 font-weight-bold"> <BsArrowRight/></span></li>
                    </ul>
                </div>
            </div>
          
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
