import React from "react";
import "../../Components/Follow/index.scss";
import Profile from "../../img/profile.png";
import { follow } from "../../Mapapi/Followapi";
import {MdVerified} from "react-icons/md"
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
            <div className="name-tag">
              <div>
              <h6>{item.Name}</h6>
              </div>
              <div>
              <MdVerified/>
              </div>
              </div>
              {/* <div className="sur">
              <p>{item.sur}</p>
              </div> */}
            
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
