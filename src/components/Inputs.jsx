import React, { useContext, useState } from 'react';
import context from '../context/myContext';

function Inputs() {
  const {
    setFilterByName,
    setFilterByNumericValues,
    filterByNumericValues,
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

  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  filterByNumericValues
    .filter((item) => columnOptions
      .every(((col) => {
        const { column } = item;
        if (column === col) {
          columnOptions.splice(columnOptions.indexOf(col), 1);
        }
        return true;
      })));

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
            {columnOptions.map((item) => (
              <option key={ item }>{item}</option>
            ))}
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
