import React, { useContext, useState } from 'react';
import context from '../context/myContext';

function Inputs() {
  const {
    setFilterByName,
    setFilterByNumericValues,
  } = useContext(context);

  const [filterInputs, setFilterInputs] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
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

  const handleClick = () => {
    setFilterByNumericValues((prevState) => [...prevState, filterInputs]);
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
            <option value="population">population</option>
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
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value-filter">
          <input
            type="number"
            name="value"
            value={ filterInputs.value }
            onChange={ handleChange }
            data-testid="value-filter"
            id="value-filter"
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          FILTRAR
        </button>
      </fieldset>
    </div>
  );
}

export default Inputs;
