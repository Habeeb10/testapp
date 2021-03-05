import "./index.css";
import Card1 from "../../Card1.png";
import Card2 from "../../Card2.png";

const ThirdSection = () => {
  return (
    <div className="container2">
      <div>
        <h1 className="port">Portfolio</h1>
        <h2 className="browse">Browse Our Projects</h2>
        <div className="all">
          <div className="first">All</div>
          <nav>Web Design</nav>
          <nav>Development</nav>
          <nav>Research</nav>
        </div>
        <div className="cards">
          <img src={Card1} alt="card1" />
          <img src={Card2} alt="card2" />
        </div>
        <div className="cards">
          <img src={Card2} alt="card2" />
          <img src={Card1} alt="card1" />
        </div>
        <div className="cards">
          <img src={Card1} alt="card1" />
          <img src={Card2} alt="card2" />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
