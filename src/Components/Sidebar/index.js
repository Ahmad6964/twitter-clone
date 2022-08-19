import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../Components/Sidebar/style.scss";
import { RiHome7Fill } from "react-icons/ri";
import { FiHash } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { TbMessage2 } from "react-icons/tb";
import { BsBookmark } from "react-icons/bs";
import { CgList } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";

const index = () => {
  return (
    <>
      <div className="main-sidebar">
          <img src={logo} alt="" />
          <div className="menu">
            <ul>
              <div>
                <RiHome7Fill />
                <li><Link to="/">Home</Link></li>
              </div>
              <div>
                <FiHash />
                <li><Link to="/explore">Explore</Link></li>
              </div>
              <div>
                <MdNotificationsNone />
                <li><Link to="/notification">Notification</Link></li>
              </div>
              <div>
                <TbMessage2 />
                <li><Link to="/messages">Messages</Link></li>
              </div>
              <div>
                <BsBookmark />
                <li><Link to="/bookmarks">Bookmarks</Link></li>
              </div>
              <div>
                <CgList />
                <li><Link to="/lists">Lists</Link></li>
              </div>
              <div>
                <CgProfile />
                <li><Link to="/profile">Profile</Link></li>
              </div>
              <div>
                <CgMoreO />
                <li><Link to="/more">More</Link></li>
              </div>
            </ul>
          </div>
          <button>Tweet</button>
        
      </div>
    </>
  );
};

export default index;
