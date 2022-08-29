import "./MiddleLine.css";
import middleLine from "../../res/nav-gradient.png";

const MiddleLine = () => {
  return (
    <section className="section-middle-line">
      <div className="middle-line">
        <img src={middleLine} alt="" />
      </div>
    </section>
  );
};

export default MiddleLine;
