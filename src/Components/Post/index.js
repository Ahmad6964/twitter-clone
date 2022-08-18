import React from "react";
import profile from "../../img/profile.png";
import "../../Components/Post/style.scss";
import { CgMoreO } from "react-icons/cg";

const index = () => {
  return (
    <>
      <div className="main-post container">
        
          <div className="post-content">
            <div>
              <img src={profile} alt="" />
            </div>
            <div className="text-div">
              <h6>Ahmad Randhwa</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                similique quos aliquam ullam libero. Delectus, doloremque atque?
                Nostrum harum accusamus asperiores itaque? Minus nam itaque
                beatae odit doloremque a perspiciatis!
              </p>
              <img src={profile} alt="" />
              <div className="icon">
              <CgMoreO />
              <CgMoreO />
              <CgMoreO />
              <CgMoreO />
              </div>
            </div>
          </div>
        </div>
   
    </>
  );
};

export default index;
