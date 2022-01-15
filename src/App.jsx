import Contador from './components/Contador';
import Frutas from './components/Frutas';
import SaludoBienvenida from './components/SaludoBienvenida';
import SaludoDespedida from './components/SaludoDespedida';
import { useState } from 'react';

const App = () => {
  const saludo = 'Hola Manuel, estamos aprendiendo react';

  const clasesObjeto = {
    dark: 'text-dark',
    danger: 'text-danger',
  };

  const [user, setUser] = useState(true);

  const funcionClick = (nombre) => {
    setUser(!user);
  };

  const frutas = ['🥝', '🥥', '🍇', '🍈', '🍓'];

  return (
    <div className="p-4 h-auto">
      <div className="container ">
        <Contador />

        <p className={`${clasesObjeto.dark} my-4 fw-bold fs-2`}>{saludo}</p>

        {user ? <SaludoBienvenida /> : <SaludoDespedida />}

        {user ? <Frutas frutasProp={frutas} /> : <p className='text-warning'>Frutas no están disponibles</p>}

        <button
          className="btn btn-primary"
          onClick={() => funcionClick('Manu')}
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default App;
