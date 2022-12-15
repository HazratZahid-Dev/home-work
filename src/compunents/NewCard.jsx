import React from "react";
import img from "../compunents/1.jpg";
import image from "../compunents/9.jpg";

const Card = () => {
  const data = [
    { id: 1, name: "zahid", father_name: "Rehman", pic: img },
    { id: 2, name: "basit", father_name: "Mehmood", pic: img },
    { id: 3, name: "munir", father_name: "Naveed", pic: img },
    { id: 4, name: "saad", father_name: "Azam", pic: img },
  ];
  return (
    <div   className=" image-card flex bg-green-100 gap-7 w-100 h-100 my-4">
      {data.map((it) => (
        <>
          <div className="p-4">
            <div key={it.id} className='border-2 border-rounded    '>
              <img src={it.pic} className="w-30 h-30 rounded"></img>
              <p className="text-blue-900 text-center my-2">{it.name}</p>
              <p className="text-blue-900 text-center">{it.father_name}</p>
              <button className="text-center p-2 tracking-active place-content-center bg-orange-900 rounded">Submit</button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Card;
