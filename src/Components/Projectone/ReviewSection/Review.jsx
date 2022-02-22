import "./style.css";
import John from "../images/john.jpg";

const ReviewSection = () => {
  return (
    <div className="reviewParent d-flex justify-content-center mt-5 mb-5">
      <section className="reviewBox mr-4">
        <div className="reviewImg">
          <img src={John} alt="" />
        </div>
        <div>
          <section className="reviewStar">
            <div className="">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="starCont">Aujurid hoi</div>
          </section>
          <section>
            <h5>Ravis De mon premiear Achat</h5>
            <p>
              Cest Mon Premier achat sur Vignitus tout est simple je recommende
            </p>
          </section>
        </div>
      </section>
      <section className="reviewBox ml-4">
        <div className="reviewImg">
          <img src={John} alt="" />
        </div>
        <div>
          <section className="reviewStar">
            <div className="">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="starCont">Aujurid hoi</div>
          </section>
          <section>
            <h5 className="bg-transparent">Ravis De mon premiear Achat</h5>
            <p>
              Cest Mon Premier achat sur Vignitus tout est simple je recommende
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
