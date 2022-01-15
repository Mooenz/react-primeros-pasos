import { useState } from 'react';
import '../index.css'

const Contador = () => {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador + 1);
    console.log(contador);
  };

  const disminuir = () => {
    setContador(contador - 1);
    console.log(contador);
  };

  return (
    <div className="btn-dark p-4 width rounded">
      <h2 className="fw-bold text-info">Contador</h2>
      <h3 className="text-light">{contador}</h3>
      <div className='d-flex justify-content-between'>
        <button className="btn btn-light" onClick={aumentar}>
          +
        </button>
        <button className="btn btn-light" onClick={disminuir}>
          -
        </button>
      </div>
    </div>
  );
};

export default Contador;
