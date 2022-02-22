import "./style.css";
import Red from "../images/red.PNG";
import Skin from "../images/skin.PNG";
import Pink from "../images/pink.PNG";

const ExtraText2 = () => {
  return (
    <section className="extratxtBox mb-5 mt-5">
      <h1>Suggestion de recherche</h1>
      {/* <div>
        <div>
          <p>Par couleur</p>
            <img src={Red} alt="" />
            <img src={Skin} alt="" />
            <img src={Pink} alt="" />
        </div>
      </div> */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="mt-2 mb-3">
              <p>Par couleur</p>
              <img src={Red} alt="" />
              <img src={Skin} alt="" />
              <img src={Pink} alt="" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="mt-2">
              <p>Par Millesime</p>
              <p>
                <span>2000</span>
                <span>2004</span>
                <span>2005</span>
                <span>2008</span>
              </p>
            </div>
            <p>
              <span>2010</span>
              <span>2014</span>
              <span>2015</span>
              <span>2018</span>
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="mt-2 mb-3">
              <p>Par pays</p>
              <p>
                <span>France</span>
                <span>Italie</span>
              </p>
              <p>
                <span>Espagne</span>
                <span>Allemagne</span>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="mt-2 mb-3">
              <p>Par region</p>
              <p>
                <span>Bordeaux</span>
                <span>Bourgogne</span>
                <span>Rhone</span>
              </p>
              <p>
                <span>Chanmpagne</span>
                <span>Languedoc</span>
                <span>Jura</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ExtraText2;
