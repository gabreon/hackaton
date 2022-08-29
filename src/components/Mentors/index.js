import "./Mentors.css";
import aline from "../../res/mentores/aline.jpeg";
import diego from "../../res/mentores/diego.jpg";
import fernanda from "../../res/mentores/fernanda.jpeg";
import marcelo from "../../res/mentores/marcelo.jpeg";
import maria from "../../res/mentores/maria.jpg";
import mariana from "../../res/mentores/mariana.jpeg";
import ricardo from "../../res/mentores/ricardo.jpeg";
import soleiman from "../../res/mentores/Soleiman.jpg";
import thiago from "../../res/mentores/Thiago.jpeg";
import valeria from "../../res/mentores/Valéria.jpg";
import carla from "../../res/mentores/carla.jpeg";

const Mentor = ({ image, name, text }) => (
  <div className="mentor">
    <img className="mentor-img" src={image} alt="" />
    <h4>{name}</h4>
    <p>{text}</p>
  </div>
);

const Mentors = () => {
  return (
    <section className="section-mentors" id="mentors">
      <div className="mentors">
        <h1>Mentores</h1>
      </div>

      <div className="mentors-list">
        <Mentor
          image={mariana}
          name="Mariana Assis"
          text="Mestre em Gestão para a Competitividade com ênfase em Gestão de Pessoas pela FGV, MBA em
          Tecnologia de Software pela USP. Head da área de Customer Success da Meta na América Latina com
          foco no Futuro do Trabalho e do Metaverso. TOP 100 Customer Success Strategist – World 2021"
        />
        <Mentor
          image={diego}
          name="Diego Macedo"
          text="Especialista em Gestão de Negócios pela Fundação Dom Cabral. Professor no Master de Gestão da
          Experiência do Consumidor na ESPM e Diretor do Mercado Consumidor na Editora Globo. Prêmio
          ABRADI Digitalks 2021 . Foi Diretor de BI na Infracommerce e atuou no núcleo Big Data do Grupo Abril."
        />
        <Mentor
          image={soleiman}
          name="Soleiman Dias"
          text="Mestre em Educação internacional nos EUA, PHD em relações internacionais na Coreia do Sul. Diretor de
          Relações Internacionais da Chadwick International"
        />
        <Mentor
          image={fernanda}
          name="Fernanda Oliveira da Silva"
          text="Mestre em Gestão e Tecnologia Industrial. Lean Six Sigma Master Black Belt. É Gerente Nacional Lean Six
          Sigma e Sponsor de Vozes Negras na DASA. Professora do MBA em Gestão de Projetos Black Belt, com
          Especialização em Gestão Estratégica, e MBA em Administração, Finanças e Criação de Valor."
        />
        <Mentor
          image={ricardo}
          name="Ricardo Tavares"
          text="Vice-presidente da Associação Zagaia Amazônia de Economia Criativa. Diretor de projetos na Focus/DM.
          Mestre em Design de Artefatos Digitais e Especialista em Designer, Propaganda e Marketing. Professor
          de MBA Gestão de Negócios e especialista em Design Thinking, Design de Serviços e Branding.
          Pesquisador de tendências e comportamento de consumo."
        />
        <Mentor
          image={valeria}
          name="Valéria Lapa"
          text="Jornalista e Relações Públicas com especialização em Comunicação Corporativa. É Gerente de
          Relacionamento, Parcerias e Captação na Fundação Amazônia Sustentável. Consultora de
          empreendedorismo para afrodescendentes e indígenas. Atuou no setor privado e ecossistema de
          impacto social."
        />
        <Mentor
          image={maria}
          name="Maria Helena Fonseca Faller"
          text="Mestre em Direito Público, doutora em direito socioambiental, ativista e empreendedora das novas
          economias. Professora universitária, é Presidente da ANPECON e membro do Comitê Científico da
          Economia de Francisco e coordenadora do Observatório Internacional da Pobreza Léo Andriga."
        />
        <Mentor
          image={thiago}
          name="Thiago Sano"
          text="Diretor de Tech & Digital da MedBeauty, e investidor-anjo da Digital Innovation One. Foi co-fundador das
          Startups InfoKid e Smartvan, e executivo de grandes empresas como SKY, Rede e Capgemini."
        />
        <Mentor
          image={marcelo}
          name="Marcelo Gluz"
          text="Designer de Produto com MBA em Gestão de Negócios na IBMEC. É CEO e co-fundador da Agência Outra
          Coisa, especializada em experiências digitais para grandes clientes. Tem um podcast Ouça Outra Coisa.
          Co-fundou 6 outras startups e atua como consultor nesse ecossistema. Atuou também no time de
          Experiência do Usuário (UX) da Globo."
        />
        <Mentor
          image={aline}
          name="Aline Muniz"
          text="Formada em Comunicação com Especialização em Rádio e Televisão. Diretora de Programas de Televisão.
          Há mais de 20 anos na TV Cultura de São Paulo. Atualmente diretora do programa Linhas Cruzadas."
        />
        <Mentor
          image={carla}
          name="Carla Berni"
          text="Analista de SEO, iniciando sua experiência em agências de marketing digital, trabalhando
          com clientes de nichos de cosméticos e SEO para news. Atualmente, integra uma equipe de SEO Técnico
          do UOL."
        />
      </div>
    </section>
  );
};

export default Mentors;
