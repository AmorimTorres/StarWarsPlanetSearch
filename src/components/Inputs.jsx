import React, { useContext, useState } from 'react';
import context from '../context/myContext';

function Inputs() {
  const { setFilterByName } = useContext(context);

  const [filterInputs, setFilterInputs] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const handleChangePlanetName = ({ target: { value } }) => {
    setFilterByName({ name: value });
  };

  const handleChange = ({ target: { name, value } }) => {
    setFilterInputs({
      ...filterInputs,
      [name]: value,
    });
  };

  return (
    <div>
      <fieldset>
        <label htmlFor="filter-by-name">
          Nome do planeta
          <input
            data-testid="name-filter"
            name="filter-by-name"
            type="text"
            onChange={ handleChangePlanetName }
          />
        </label>
        <label htmlFor="column-filter">
          Coluna
          <select
            data-testid="column-filter"
            name="column"
            onChange={ handleChange }
          >
            <option selected value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="comparison-filter">
          Operador
          <select
            data-testid="comparison-filter"
            name="comparison"
            onChange={ handleChange }
          >
            <option value="maior que">maior que</option>
            <option selected value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value-filter">
          <input
            name="value"
            onChange={ handleChange }
            data-testid="value-filter"
            id="value-filter"
            onKeyPress={ (e) => !/[0-9]/.test(e.key) && e.preventDefault() }
          />
        </label>
        <button type="button" data-testid="button-filter"> FILTRAR </button>
      </fieldset>
    </div>
  );
}

export default Inputs;
