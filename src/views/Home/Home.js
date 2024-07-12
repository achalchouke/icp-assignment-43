
import "./Home.css"
import Navbar from "../../componants/Naavbar/Navbar"
import Footer from "../../componants/Footer/Footer"
import Homeimg from "./cake_ shop.png"
import Contact from "../Contact/Contact"
import { siteDetails , featurs , theme } from "./../../data"
import FeatureCard from "../../componants/FeatureCard/FeatureCard"

function Home() {
  return (
    <>
    <Navbar/>
    <div>
   
     <h1 className="title" style={{color:theme.Text}}> {siteDetails.title} </h1>
     <img src = {Homeimg} className="img" />

     <div className="featurs">
      {
       featurs.map((featurs , i)=>{
       const{title , img} = featurs  

        return(
        <FeatureCard key={i} title={title} img={img}/>
        )
      }) 
      
      }
     </div>
     <Footer/>
    </div>
    </>
    )
}

export default Home