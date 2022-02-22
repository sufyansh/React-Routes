import Navbar from "../Components/projecttwo/Navbar/Navbar";
import Top from "../Components/projecttwo/TopSection/Top";
//import SmCards from "../Components/projecttwo/SmallCards/SmCards";
import Cards from "../Components/projecttwo/Cards/Cards"
import Footer from "../Components/projecttwo/Footer/Footer"

import './Projecttwo.css'
const projecttwo = () =>{
    return (
      <div>
        <Navbar />
        <Top />
        <div className="smallCards">
          <Cards />
          <Cards />
          <div className="smContent">
            Voir toute votre cave
          </div>
        </div>
        <h1 className="h1TopCard">Vous aimerez egalement chez nos autres member;</h1>
        <Cards />
        <Cards />
        <Footer />
      </div>
    );
  }
  
  export default projecttwo;
  