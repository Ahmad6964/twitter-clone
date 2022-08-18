import React from "react";
import profile from "../../img/profile.png"
import "../../Components/TweetBox/style.scss"
import {GoFileMedia} from "react-icons/go"
import {AiOutlineFileGif} from "react-icons/ai"
import {BiPoll} from "react-icons/bi"
import {BsEmojiSmile} from "react-icons/bs"
import {GrSchedule} from "react-icons/gr"
import {GrLocation} from "react-icons/gr"


const index = () => {
  return (
    <>
    <div className="main-tweetbox container">
      <div className="header">
        <h3>Home</h3>
       </div>
      <div className="tweet">
        <img src={profile} alt="" />
        <input type="text" placeholder="What`s happening?"/>
      </div>
      <div className="icons">
      <div className="icon-content">
      <GoFileMedia/>
      <AiOutlineFileGif/>
      <BiPoll/>
      <BsEmojiSmile/>
      <BiPoll/>
      <BsEmojiSmile/>
    
        </div>
        <div>
        <button>tweet</button>
        </div>
      </div>
      <hr />
      <p className="text-center">Show text</p>
      <hr />
      </div>
    
    </>
  );
};

export default index;
