import mixProducts from "../../res/photos/cn_mix_produtos.png";
import imu from "../../res/photos/cn_IMU_maceio.png";

const Movement = () => {
  return (
    <section className="section-movement">
      <div className="movement">
        <h1>O movimento e o propósito da Editora</h1>

        <div className="about-content">
          <div className="img-box img-margin-right">
            <img className="mix-products" src={mixProducts} alt="" />
          </div>

          <div className="text-box">
            <p>
              A Editora tem como propósito: promover a cultura da unidade e a
              fraternidade universal por meio de conteúdos permeados de valores
              humanos, que favoreçam relações autênticas e harmoniosas entre
              pessoas, grupos e nações. A Editora, além do portal de conteúdos,
              tem como produtos: revistas, livros, ebooks, podcasts, que podem
              ser adquiridos em nossa loja on-line, em algumas das principais
              lojas on-line do país, nos pontos de venda da Editora, nos
              diversos centros de eventos e por uma rede de distribuidores em
              todo o país. E para ampliar a incidência dos nossos produtos e
              conteúdos na sociedade fizemos também a adesão à Fundação Nuova
              Global, para melhorar a sinergia e o potencial da Editora no
              futuro.
            </p>
          </div>
        </div>

        <div className="about-content">
          <p>
            O Movimento dos Focolares possui também uma rede de organizações
            civis não governamentais, composta por 23 Organizações da Sociedade
            Civil que atuam na transformação social local, como o - IVG -
            Instituto Vilson Groh em Florianópolis, Santa Catarina e o Instituto
            Mundo Unido – Maceió, que fazem parte de uma rede de diversas
            organizações inspiradas no carisma da unidade proposto por Chiara
            Lubich, distribuídas em todo o Brasil, de norte a sul, e
            organizações que têm abrangência nacional e global como a EDC, que
            vive pela erradicação da pobreza, por um mundo mais justo,
            regenerativo e fraterno.
          </p>
        </div>

        <div className="about-content">
          <div className="text-box">
            <p>
              Além disso, existem grupos inseridos na sociedade em diversos
              campos de atuação no mundo da família, política, cultura, arte,
              medicina, psicologia com o objetivo de contribuir para a
              construção de um mundo mais unido e mais fraterno, aberto ao
              diálogo e disposto a entender as diferenças e acolhê-las como
              próprias. Recentemente, o Movimento criou uma Fundação (Nuova
              Global) para captar recursos financeiros para implementação de
              projetos editoriais locais que façam a diferença no mundo.
            </p>
          </div>

          <div className="img-box img-margin-left">
            <img className="round-image" src={imu} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movement;
