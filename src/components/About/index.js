import './About.css';
import newHeadquarter from "../../res/photos/cn_nova_sede.png";
import aerialImage from "../../res/photos/mg_aerea.jpg";

const About = () => {
  return (
    <section className="section-about" id="about">
      <div className="about">
        <h1>Quem somos</h1>

        <div className="about-content">
          <div className="img-box img-margin-right">
            <img className="round-image" src={newHeadquarter} alt="" />
          </div>

          <div className="text-box">
            <p>
              A Editora Cidade Nova é uma associação civil e religiosa, sem fins
              lucrativos e de caráter educacional, constituída sob a inspiração
              do carisma de Chiara Lubich, civilmente Silvia Lubich, fundadora
              da Obra de Maria (Movimento dos “Focolari”). No Brasil, é
              conhecido como Movimento dos Focolares. Somos um “canal de
              comunicação” a serviço do Movimento dos Focolares para publicação
              de conteúdos que contribuam para um mundo mais unido. Tratamos de
              assuntos atuais e globais que fazem parte do dia a dia da
              sociedade e nos propomos criar espaços de diálogo para estabelecer
              relações com público sensível às temáticas: paz, solidariedade,
              justiça, dignidade humana, defesa da vida e direitos humanos,
              interculturalidade, tolerância, cidadania, ecologia integral,
              comunhão, partilha, e demais valores que contribuam para a
              construção de um mundo melhor.
            </p>
          </div>
        </div>

        <div className="about-content">
          <div className="text-box">
            <p>
              A história do Movimento dos Focolares, como é conhecido no Brasil,
              iniciou em Trento, em 1943, quando a jovem, Chiara Lubich, decidiu
              dedicar sua vida a Deus. A sede do Movimento fica na Itália, mas
              tem presença em todos os continentes e, atualmente, conta com
              milhões de participantes no mundo, com o objetivo de cooperar na
              construção de um mundo mais unido, impulsionados pela oração de
              Jesus ao Pai “para que todos sejam um” (Jo 17,21), no respeito e
              na valorização das diversidades.
            </p>
          </div>

          <div className="img-box img-margin-left">
            <img className="round-image" src={aerialImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
