import React from "react";
import "./Footer.css";
import "./App.css";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
//  import { IconName } from "react-icons/fa";
//  import { BsChatDotsFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 head-about ">
              <h2 className="about">About Us</h2>
              <div className="underline"></div>
              <p className="mt-2">
                Everyone notice everything that you carry while you are
                travelling,
                <br />
                visiting your friend’s place, attending a party, wedding and
                family
                <br />
                gathering and even go shopping.
              </p>
              <div className=" ">
            
                <a href="https://web.whatsapp.com/">
                  <button type="button" className="btn-first p-2   ">
                    <FaFacebook />
                  </button>
                </a>
                
    
                <button type="button" className="btn-first p-2 ">
                  <FaWhatsapp />
                </button>
                <button type="button" className="btn-first p-2 ">
                  <FaTwitter />
                </button>
              </div>

               {/* <h2 className='icons'><FaFacebook/> <FaWhatsapp/> <FaTwitter/></h2>  */}
            </div>
            <div className="col-4  ">
            <div className="mr-4">
              <h2 className="head-contact  ">Contact Us</h2>
              <div className="underline1"></div>
              <div className="ml-5 mt-3 contact-detail">
              <div className="flex gap-3 text-center text-white contact-detail">
                <p>
                  <FaPhoneAlt />
                </p>
                <p>0336454533</p>
              </div>
              <div className="flex gap-3 text-center text-white contact-detail">
                <p>
                  <FaMapMarkerAlt />
                </p>
                <p>Near To GOVT College </p>
              </div>
              <div className="flex gap-3 text-center text-white contact-detail">
                <p>
                  <  FaFacebook />
                </p>
                <p>Hazrat Zahid</p>
              </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <div className="footer__down ">
        <p className="footer__text text-center ">
          <span>All Rights Reserved. © 2022</span> Parse shop Sawari Buner
          <span className="bold"> Design By : Hazrat zahid </span>
        </p>
      </div>
    </>
  );
};

export default Footer;
