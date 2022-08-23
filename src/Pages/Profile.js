import React from 'react'
import "./Home.scss"
import Menu from "../Components/Sidebar/index"
import Feed from "../Components/Feeds/index"
import Widget from "../Components/Widget/index"
const Home = () => {
  return (
    
    <>
        <div className="main">
            <div className='menus'>
                <Menu/>
            </div>
            <div className='feed'>
                <h1>Profile page</h1>
            </div>
            <div className='widget'>
              <Widget/>
            </div>
        </div>
    </>
  )
}

export default Home

