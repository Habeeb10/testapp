import "./index.css";
import more from "../../more.svg";
export const TopSection = () => {
  return (
    <div className="contain">
      <div className="header">
        <h3>my logo</h3>
        <div className="headerlist">
          {listData.map((item, index) => {
            return <h6 key={index}>{item.title}</h6>;
          })}
        </div>
      </div>
      <h4 className="name">Creative Agency</h4>
      <h1 className="bigTitle">HERO HEADER</h1>
      <h3 className="best">The best in town.</h3>
      <img src={more} alt="logo" />
    </div>
  );
};

const listData = [
  {
    title: "Home",
  },
  {
    title: "About",
  },
  {
    title: "Portfolio",
  },
  {
    title: "Blogs",
  },
  {
    title: "Contacts",
  },
];
