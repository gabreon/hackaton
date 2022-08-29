import "./Challenges.css";
import tech from "../../res/tech3.png";

const Challenges = () => {
  return (
    <section className="section-challenges" id="challenges">
      <img className="tech-img" src={tech} alt="" />

      <div className="challenges">
        <div className="challenges-wrapper">
          <div className="challenges-text">
            <h1>Desafios</h1>
            <p>
              O Hackaton Cidade Nova 2022 surge do desafio principal de planejar
              como deve ser a Editora Cidade Nova do futuro, pois queremos
              ampliar o escopo de atuação da editora tanto em formatos de
              conteúdo como no público alvo a ser atingido. Atualmente, temos um
              público-alvo mais focado na própria comunidade do Movimento dos
              Focolares, mas esse conteúdo precisa chegar com mais agilidade a
              toda a sociedade, pois se trata de um conteúdo relevante e
              necessário para os tempos atuais. Para podermos contar com você,
              jovem, nesse desafio, pretendemos realizar esse evento, a fim de
              que possa trazer ideias inovadoras e soluções para que a Editora
              Cidade Nova do futuro esteja mais preparada aos desafios do
              mercado editorial em constante mutação.
            </p>

            <p>
              Você é nosso convidado para participar do Hackaton, montando uma
              equipe de até três pessoas, e fazendo suas inscrições aqui
              (inserir hyperlink para o formulario), para juntos enfrentarmos
              esse desafio. Pensamos em você porque entendemos que a inovação
              será possível se pudermos contar com jovens bem preparados
              academicamente e profissionalmente, que partilham dos nossos
              propósitos, além de serem consumidores de conteúdos de qualidade e
              ricos de valores. Sua energia positiva e seu conhecimento são
              muito importantes para vislumbrarmos juntos como a Editora Cidade
              Nova pode ser um canal de comunicação mais potente e atual, para
              levar a toda a sociedade conteúdo relevante e inovador que faça a
              diferença na vida das pessoas.
            </p>
          </div>
        </div>

        <div className="challenges-questions">
          <h2>A essência do nosso Hackaton se propõe a estas 3 perguntas:</h2>

          <div className="question-wrapper">
            <div className="questions question-one">
              <h4>
                Quais podem ser os modelos de negócios da Editora Cidade Nova do
                futuro?
              </h4>
            </div>

            <div className="questions question-two">
              <h4>
                Quais podem ser as soluções de Portal de Conteúdo e Loja On-line
                da Editora Cidade Nova do futuro?
              </h4>
            </div>

            <div className="questions question-three">
              <h4>
                Quais podem ser as soluções de Comunicação e Marketing da
                Editora Cidade Nova do futuro?
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
