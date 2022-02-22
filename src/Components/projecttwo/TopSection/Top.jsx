import "./style.css";
import GrandWine from "../images/grandWine.jpg";
import label from "../images/wineLabel.PNG";
import wineGlass from "../images/wine.PNG";

const Top = () => {
  return (
    <section className="topContParent">
      <div className="child1">
        <div className="wineImgBox">
          <div className="grandeBox">
            <img src={GrandWine} alt="" />
          </div>
          <div className="grandeContent">
            <img src={label} alt="" />
            <img src={label} alt="" />
            <img src={wineGlass} alt="" />
          </div>
        </div>
        <div className="wineContBox">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            maiores corporis minima! Magnam cupiditate possimus inventore quod
            nam, incidunt ducimus reprehenderit nesciunt, qui architecto
            temporibus quisquam sint cum porro consequuntur?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            maiores corporis minima! Magnam cupiditate possimus inventore quod
            nam, incidunt ducimus reprehenderit nesciunt, qui architecto
            temporibus quisquam sint cum porro consequuntur?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            maiores corporis minima! Magnam cupiditate possimus inventore quod
            nam, incidunt ducimus reprehenderit nesciunt, qui architecto
            temporibus quisquam sint cum porro consequuntur?
          </p>
        </div>
      </div>

      <div className="child2">
        <section>
          <h5>chatau Joget- chinon cuvee terrior</h5>
          <p className="mt-3"><span>Millesime:</span>1995</p>
          <p><span>Couleur:</span> rouge</p>
          <p><span>Quatitie:</span>3 bouteilles</p>
          <p><span>Viticuluer:</span>biologique</p>
          <p><span>type de cave:</span> cave naturelle enterree</p>
          <p><span>caisse bois/ coffret d'origine:</span>non</p>
          <p><span>caspule representative de dreoit (CRD)</span>non</p>
          <p><span>pourcentage alcohol:</span>13.50%</p>
          <p><span>region:</span>brodex</p>
          <p><span>appellation/ vin:</span>saint-emilion grand cru</p>
          <p><span>classment:</span>1er grand cru classe a</p>
        </section>
        <section>
            <p>ajout le: <span>12/10/2021</span></p>
            <p>par <strong>vous</strong> </p>
        </section>
        <section>
            <p>envoie a la charge de l' achetueur</p>
            <p>option 1 : 12.90 &euro;</p>
            <p>option 1 : 12.90 &euro;</p>
            <p>option 1 : 12.90 &euro;</p>
        </section>
        <section>
            <h1>29.90 &euro;</h1>
        </section>
        <section>
            <button className="btnGrey">modifier</button>
            <button className="btnMaroon">booster</button>
        </section>

      </div>
    </section>
  );
};
export default Top;
