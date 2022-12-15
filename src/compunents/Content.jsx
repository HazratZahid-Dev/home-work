import React from "react";
import "../compunents/content.css";

const Content = () => {
  return (
    <>
      <div className="container-fluid flex-wrap">
        <div className=" row bg-image flex-wrap">
          <div className=" col-6 main">
            <h1 className="  first">Order Pizza <span className="color">Online</span> in Peshawar <span className="color"> Today!</span></h1>

            <h2 className="  second">
              Ordering Pizza from <span className="second-tag">restaurants near you</span> couldn't be <span className="second-tag">easier</span>
            </h2>
            <button type="button" class="btn btn-warning mt-4 main-btn">Shop Now</button>
          </div>

          <hr />
        </div>
      </div>
    </>
  );
};

export default Content;
