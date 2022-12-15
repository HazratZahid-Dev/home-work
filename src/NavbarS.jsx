import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../src/compunents/logo.svg'



import './index.css'
import './App.css'
function NavbarS() {

  

    return (
        <div >
            <nav className={`navbar navbar-expand-lg    navbar navbar-text bg-primary `} >
                <div className='container'>

                    <Link to="/" className="nav-link active navbar-brand">
                        <img alt='error' src={logo} className='Logo' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse  mar-right" id="navbarSupportedContent ">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link active text-bold">Home </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link active">About </Link>

                            </li>
                            <div>
                                <li className="nav-item">
                                    <Link to="/Contact" className="nav-link active mr-2">Contact </Link>
                                </li>
                            </div>
                            <div>
                                <li className="nav-item">
                                    <Link to="/More" className="nav-link active mr-2">More</Link>
                                </li>
                            </div>
                            


                           


                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );

}
export default NavbarS;