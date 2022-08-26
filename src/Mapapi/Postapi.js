import profile from "../img/babar-azam.webp";
import cycle from "../img/cycle.jfif"
import medal from "../img/medal.jfif"
import doller from "../img/doller.jfif"
import pm from "../img/pm.jpg"
import farman from "../img/farman.jfif"
import me from "../img/me.jpg"
import lahore from "../img/lahore.jfif"
import lovein from "../img/lovein.jpg"
import {MdVerified} from "react-icons/md"
export const post = [
  {
    id: 1,
    img: profile,
    Name: "Babar Azam",
    icon:  MdVerified,
    verified: true,
    Discription:"Babar Azam gets Sitara-i-Imtiaz, the 3rd highest civilian award from the State of Pakistan. 🏅",
    img2:medal
  },
  {
    id: 2,
    img: profile,
    Name: "Babar Azam",
    icon: MdVerified,
    verified: true,
    Discription:"Live every moment 🚴🏻‍♂️",
    img2:cycle
    
  },
  {
    id: 3,
    img: pm,
    Name: "Pakistan Magazine",
    verified: true,
    Discription: "The PKR continued falling for the third straight session on Wednesday, declining by 72 paise against the dollar in the interbank market",
    img2:doller
  },
  {
    id: 4,
    img: me,
    Name: "Ahmad Randhawa",
    verified: false,
    
    img2:farman,
  
  },
  {
    id: 2,
    img: lovein,
    Name: "Lovin Lahore",
    icon: MdVerified,
    verified: true,
    Discription:"Bashahi Mosque has to be one of the most beautiful structures in the world. 😍😍",
    img2:lahore
    
  },
];
