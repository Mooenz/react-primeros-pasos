const Frutas = (props) => {
  const { frutasProp } = props;
  return (
    <>
      <ul>
        {frutasProp.map((fruta, indice) => (
          <li key={fruta}>
            {indice + 1} - {fruta}
          </li>
        ))}
      </ul>
      <p>Lorem ipsum dolor sit amen.</p>
    </>
  );
};

export default Frutas;
