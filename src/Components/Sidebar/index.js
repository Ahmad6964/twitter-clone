import React from "react";
import logo from "../../img/logo.png";
import "../../Components/Sidebar/style.scss";
import {RiHome7Fill} from 'react-icons/ri';
import {FiHash} from 'react-icons/fi';
import {MdNotificationsNone} from 'react-icons/md';
import {TbMessage2} from 'react-icons/tb';
import {BsBookmark} from 'react-icons/bs'
import {CgList} from 'react-icons/cg'
import {CgProfile} from 'react-icons/cg'
import {CgMoreO} from 'react-icons/cg'

const index = () => {
  return (
    <>
      <div className="main-sidebar">
        <div className="container">
          <img src={logo} alt="" />
          <div className="menu">
            <ul>
            <RiHome7Fill/><li>Home</li>
            <FiHash/><li>Explore</li>
            <MdNotificationsNone/><li>Notification</li>
            <TbMessage2/><li>Messages</li>
            <BsBookmark/><li>Bookmarks</li>
            <CgList/><li>Lists</li>
            <CgProfile/><li>Profile</li>
            <CgMoreO/><li>More</li>
            </ul>
          </div>
          <button>Tweet</button>
        </div>
      </div>
    </>
  );
};

export default index;
