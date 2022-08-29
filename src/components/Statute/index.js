import "./Statute.css";

const Statute = () => {
  const docLink =
    "https://docs.google.com/document/d/14uD0Pl5KZl64lyAUctix9AmB5NDu1h1qKMsXTBmNqg8/edit";

  return (
    <section className="section-statute" id="statute">
      <div className="statute">
        <h1>Regulamento</h1>

        <div className="statute-wrapper">
          <a href={docLink} target="_blank" rel="noreferrer">
            <button className="statute-btn">
              Acesse o regulamento clicando aqui
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Statute;
