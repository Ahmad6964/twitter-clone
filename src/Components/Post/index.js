import React from "react";
import profile from "../../img/profile.png";
import "../../Components/Post/style.scss";
import {MdVerified} from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import cycle from "../../img/cycle.jfif";
import { post } from "../../Mapapi/Postapi";

const index = () => {
  return (
    <>
      <div className="main-post">
        {post.map((item) => {
          return (
            <div className="post-content">
              <div>
                <img src={item.img} alt="" />
              </div>
              <div className="text-div">
                <div className="name-icon">
                <h6>{item.Name}</h6>
                {item.verified &&<MdVerified/>}
                <p>{item.sur}</p>

                </div>
                <p>
                  {item.Discription}
                </p>
                <img src={item.img2} alt="" />
                <div className="icon">
                <div className="icon-text"><div><FaRegComment /></div><div><p>450</p></div></div>
                <div className="icon-text"><div><AiOutlineRetweet /></div><div><p>300</p></div></div>
                <div className="icon-text"><div><AiOutlineHeart /></div><div><p>1.2M</p></div></div>
                <div className="icon-text"><div><FiShare /></div><div><p>1.7k</p></div></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default index;
