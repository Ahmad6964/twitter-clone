import React from "react";
import "../../Components/Follow/index.scss";
import Profile from "../../img/profile.png";
import { follow } from "../../Mapapi/Followapi";
const index = () => {
  return (
    <>
      <div className="follow">
        <h3>Who To Follow</h3>
        {follow.map((item)=>{
          return(
            <div className="follow-card">
          <div className="left-side">
            <div>
              <img src={item.img} alt="" />
            </div>
            <div>
              <h6>{item.name}</h6>
              <p>{item.tag}</p>
            </div>
          </div>
          <div>
            <button className="btn btn-dark">Follow</button>
          </div>
        </div>
          )
        })}
        
      </div>
    </>
  );
};

export default index;
