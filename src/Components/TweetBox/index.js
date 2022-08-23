import React from "react";
import profile from "../../img/login.png";
import "../../Components/TweetBox/style.scss";
import { GoFileMedia } from "react-icons/go";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { GrSchedule } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";
import {BsStars} from "react-icons/bs"

const index = () => {
  return (
    <>
      <div className="header">
          <div><h5>Home</h5></div>
          <div><BsStars/></div>
        </div>
      <div className="main-tweetbox">
      
        <div className="tweet">
          <img src={profile} alt="" />
          <input type="text" placeholder="What`s happening?" />
        </div>
        <div className="icons">
          <div className="icon-content">
            <GoFileMedia />
            <AiOutlineFileGif />
            <BiPoll />
            <BsEmojiSmile />
            <BiPoll />
            <BsEmojiSmile />
          </div>
          <div>
            <button>Tweet</button>
          </div>
        </div>
      </div>
      <div className="hr">
        <hr />
        <p className="text-center">Show 36 Tweets</p>
        <hr />
      </div>
    </>
  );
};

export default index;
