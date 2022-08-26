import React from "react";
import "../../Components/Trends/style.scss";
import { Trend } from "../../Mapapi/Trendapi";
import { BiSearch } from "react-icons/bi";

const index = () => {
  return (
    <>
      <div className="main-trend">
        <div className="container">
          <div className="search-icon">
            <BiSearch />
            <input type="text" placeholder="Search Twitter" />
          </div>
          <div className="trend-content">
            <h3>Trends for you</h3>
            {Trend.map((item) => {
              return (
                <div className="trend-card">
                  <p>{item.trendlocation}</p>
                  <h4>{item.tag}</h4>
                  <p>{item.tweets}</p>
                </div>
              );
            })}
            <a href="">Show More</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
