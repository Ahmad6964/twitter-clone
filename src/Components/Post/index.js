import React from "react";
import profile from "../../img/profile.png";
import "../../Components/Post/style.scss";
import {MdVerified} from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import crick from "../../img/crick.jpg";
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
                <h6>{item.Name}</h6>
                {item.icon}
                <p>
                  {item.Discription}
                </p>
                <img src={crick} alt="" />
                <div className="icon">
                  <FaRegComment />
                  <AiOutlineRetweet />
                  <AiOutlineHeart />
                  <FiShare />
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
