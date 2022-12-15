import React, { useState } from "react";
import img from "../compunents/10.jpg";
import img2 from "../compunents/7.jpg";
import img3 from "../compunents/6.jpg";
import img4 from "../compunents/5.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
 import "./index.css";
//  import '../compunents/content.css'
import { BsArrowRight } from "react-icons/bs";

const Card = () => {

 
  const [old, newone] = useState(img);


  const changeImage = () => {
    if (old === img) {
      newone(img2);
    } else {
      old(img);
    }
  };

  const data = [
    { id: 1, name: "Barbera",desc:'Red grape variety', price: "60$", pic: img },
    { id: 2, name: "Pizza",desc:'Bunny Cafe', price: "900", pic: img2 },
    { id: 3, name: "Pizza",desc:'Cheese N Cheers', price: "1230", pic: img3 },
    { id: 4, name: "Pizza",desc:'Italian Pizza - University Road', price: "890", pic: img4 },
  ];
  return (
    <div className="display-flex flex-wrap   ">
      {data.map((it) => (
        <>
          <div>
            <div key={it.id} className='border-2 rounded'>
            <div className="overflow">
              <img
                src={it.pic}
                className=" image-card   "
                onClick={changeImage} 
              ></img>
              </div>
              <p className="  mt-3 ">{it.red}</p>
              <h6 className="text-left ml-3">{it.desc}</h6>
            <div className="flex gap-12">
              <p className="  text-left text mb-4 ml-3  ">{it.name} {it.price}</p>
              
              <select className="btn btn-outline-primary mr-2  text-center btn-sm text-light ml-1 text-dark font-weight-bold mt-4 ">
                <option>Size</option>
                <option>Small</option>
                <option>Large</option>
                <option>Extra Large</option>

              </select>

              </div>

              {/* <p className=" text mb-3 ">{it.price}</p> */}
              
              <button className="btn btn-outline-primary text-center btn-sm text-light  mx-9   text-dark font-weight-bold mt-4 ">
                click for order
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Card;
