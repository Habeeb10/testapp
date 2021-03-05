import "./index.css";
import more from "../../pic.png";
import video from "../../video.svg";
const SecondSection = () => {
  return (
    <div className="container">
      <div>
        <h4 className="agency">About our agency</h4>
        <h5 className="awesome">
          We create awesome prototypes, <br /> plugins, and templates.
        </h5>
        <h2 className="back">
          For instance, whenever I go back to the guest <br /> house during the
          morning to copy out the <br /> contract, these gentlemen are always
          still sitting <br /> there eating their breakfasts.
        </h2>
        <div className="video">
          <img src={video} alt="video" />
          <h5 className="play">PLAY VIDEO</h5>
        </div>
      </div>
      <img src={more} alt="pic" className="pic" />
    </div>
  );
};
export default SecondSection;
