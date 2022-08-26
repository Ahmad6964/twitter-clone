import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Explore from "../src/Pages/Explore";
import Notification from "../src/Pages/Notification";
import Messages from "../src/Pages/Messages";
import Bookmarks from "../src/Pages/Bookmarks";
import Lists from "../src/Pages/Lists";
import Profile from "../src/Pages/Profile";
import More from "../src/Pages/More";
import Login from "./Components/Login"


function App() {
  return (
    <>
     
    <BrowserRouter>
     <Routes> 
      <Route path="/" element={<Login/>}/>
       <Route path="home" element={<Home/>}/>
       <Route path="Explore" element={<Explore/>}/>
       <Route path="Notification" element={<Notification/>}/>
       <Route path="Messages" element={<Messages/>}/>
       <Route path="Bookmarks" element={<Bookmarks/>}/>
       <Route path="Lists" element={<Lists/>}/>
       <Route path="Profile" element={<Profile/>}/>
       <Route path="More" element={<More/>}/>
      
       
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
