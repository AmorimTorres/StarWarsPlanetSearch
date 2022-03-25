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

  const handleRemoveItem = (index) => {
    const newList = [...filterByNumericValues];
    newList.splice(index, 1);
    setFilterByNumericValues([...newList]);
  };

  const handleRemoveAllItems = () => {
    const newList = [];
    setFilterByNumericValues(newList);
  };

  return (
    <div>
      <div className="search_by_name">
        <label htmlFor="filter-by-name">
          Nome do planeta
          <input
            data-testid="name-filter"
            name="filter-by-name"
            type="text"
            onChange={ handleChangePlanetName }
          />
        </label>
      </div>
      <fieldset className="search_inputs">
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
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ handleRemoveAllItems }
        >
          DELETAR
        </button>
        {filterByNumericValues.map(({ column, value, comparison }, index) => (
          <div data-testid="filter" key={ index }>
            <p>{`${column} ${comparison} ${value}`}</p>
            <button type="button" onClick={ () => handleRemoveItem(index) }>X</button>
          </div>
        ))}
      </fieldset>
    </div>
  );
}

export default Inputs;

// REFERENCIAS

// PARA CRIAR O BOTÃO "DELETE (X)" DE CADA FILTRO, USEI O SEGUINTE CONTEÚDO: https://www.youtube.com/watch?v=1qFsJ5VqXTE
