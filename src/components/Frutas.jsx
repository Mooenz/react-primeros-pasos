const Frutas = (props) => {
  const { frutasProp } = props;
  console.log(props);
  return (
    <>
      <ol className="list-group list-group-numbered">
        {frutasProp.map((fruta, indice) => (
          <li
            className="d-flex justify-content-between align-items-start"
            key={fruta.valor}
          >
            <div className="ms-2 me-auto fw-bold">
            {fruta.valor} {fruta.nombre}
            </div>
            <span className="fw-bold">{fruta.cantidad}</span>
          </li>
        ))}
      </ol>
      <p>Lorem ipsum dolor sit amen.</p>
    </>
  );
};

export default Frutas;
