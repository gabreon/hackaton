import './Partners.css';
import partner from "../../res/photos/logo.png";

const Partner = ({ image, name }) => (
  <div className="partner">
    <img className="partner-img" src={image} alt="" />
    <h4>{name}</h4>
  </div>
);

const Partners = () => {
  return (
    <section className="section-partners" id="partners">
      <div className="partners">
        <h1>Parceiros</h1>
      </div>

      <div className="partners-list">
        <Partner
          image={partner}
          name="Partner"
          
        />
        <Partner
          image={partner}
          name="Partner"
          
        />
        <Partner
          image={partner}
          name="Partner"
          
        />
        <Partner
          image={partner}
          name="Partner"
          
        />
        <Partner
          image={partner}
          name="Partner"
          
        />
        <Partner
          image={partner}
          name="Partner"
          
        />
      </div>
    </section>
  );
};

export default Partners;