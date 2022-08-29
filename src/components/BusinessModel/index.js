import "./BusinessModel.css";
import canvasAtual from "../../res/photos/canvas_atual.png";
import canvasPerspectivas from "../../res/photos/canvas_perspectivas.png";

const BusinessModel = () => {
  return (
    <section className="section-business-model" id="business-model">
      <div className="business-model">
        <h1>Modelo de negócios</h1>

        <div className="canvas-box">
          <img className="canvas" src={canvasAtual} alt="" />
          <p>Visão atual da Editora Cidade Nova</p>
        </div>

        <div className="canvas-box">
          <img className="canvas" src={canvasPerspectivas} alt="" />
          <p>Perspectivas futuras da Editora Cidade Nova</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
