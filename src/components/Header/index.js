import "./Header.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import header from "../../res/header.png";
import ReactPlayer from "react-player";

const Header = () => {
  console.log(window.innerWidth)
  return (
    <section className="section-header" id="header">
      <Carousel
        showArrows={true}
        showThumbs={false}
        swipeable={true}
        infiniteLoop
        interval={1000}
      >
        <div className="header">
          <div className="header-home">
            <img className="header-img" src={header} alt="" />
          </div>

          <div className="button-registration">
            <button className="registration">Inscreva sua equipe</button>
          </div>
        </div>

        <div className="header">
          <h2>Cronograma do Hackaton</h2>
          <br />
          <p>17/09/2022 - Evento de lançamento e início das inscrições</p>
          <p>01/10/2022 - Fechamento das Inscrições</p>
          <p>06/10/2022 – Divulgação equipes pré-selecionadas</p>
          <p>08/10/2022 - Evento dos Pré-Selecionados</p>
          <p>22/10/2022 – Fechamento entrega propostas pré-selecionadas</p>
          <p>25/10/2022 - Divulgação dos Finalistas</p>
          <p>12 a 15/11/2022 - Evento de Encerramento</p>
        </div>

        <div className="header">
          <ReactPlayer url="https://www.youtube.com/watch?v=-Z6bzrKBftg&ab_channel=LucasFernandoCastro" width="100%" />

          <div className="button-registration">
            <p>Hackaton 2022</p>
          </div>
        </div>

        <div className="header">
          <ReactPlayer url="https://www.youtube.com/watch?v=qLTywxrC5-A&ab_channel=EditoraCidadeNova" width="100%" />
          
          <div className="button-registration">
            <p>Como você muda o mundo?</p>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Header;
