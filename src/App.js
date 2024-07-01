import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Home from "./Home/Home.jsx";
import Search from "./Search/Search.jsx";
import Topweek from "./Topweek/Topweek.jsx";
import Hotsale from "./Hotsale/Hotsale.jsx";
import Womenclothing from "./womenclothing/Womenclothing.jsx";
import Mensclothing from "./Mensclothing/Mensclothing.jsx";
import Mobile from "./Mobile/Mobile.jsx";
import Computer from "./Computer/Computer.jsx";
import Watches from "./Watches/Watches.jsx";
import Lifeeasy from "./Lifeeasy/Lifeeasy.jsx";
import Featured from "./Feactured/Feactured.jsx";
import Contact from "./Contact/Contact.jsx";
import Footer from "./Footer/Footer.jsx";
import Underfooter from "./Below-footer/Underfooter.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (
    <>
     <Navbar />
     <Search />
     <Home />
     <Topweek />
     <Hotsale/>
     <Womenclothing/>
     <Mensclothing/>
     <Mobile/>
     <Computer/>
     <Watches/>
     <Lifeeasy/>
     <Featured/> 
     <Contact/>
     <Footer/>
     <Underfooter/>
    </>
  )
}

 export default App;