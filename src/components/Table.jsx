import React, { useContext } from 'react';
import context from '../context/myContext';
import Inputs from './Inputs';
// import '../style.css';

function Table() {
  const { filterByName, data, filterByNumericValues } = useContext(context);

  const filterPlanetsByName = data
    .filter((planet) => planet.name.toLowerCase().includes(filterByName.name));

  const filterByInputs = filterPlanetsByName
    .filter((planet) => filterByNumericValues
      .every((objKeys) => {
        const { column, comparison, value } = objKeys;
        const columnValue = +planet[column];
        if (comparison === 'maior que') {
          return columnValue > +value;
        } if (comparison === 'menor que') {
          return columnValue < +value;
        } if (comparison === 'igual a') {
          return columnValue === +value;
        }
        return true;
      }));

  return (
    <div className="table">
      <Inputs />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {filterByNumericValues && filterByInputs.map((item) => (
            <tr key={ item.name }>
              <td>{item.name}</td>
              <td>{item.rotation_period}</td>
              <td>{item.orbital_period}</td>
              <td>{item.diameter}</td>
              <td>{item.climate}</td>
              <td>{item.gravity}</td>
              <td>{item.terrain}</td>
              <td>{item.surface_water}</td>
              <td>{item.population}</td>
              <td>{item.films}</td>
              <td>{item.created}</td>
              <td>{item.edited}</td>
              <td>{item.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

// REFERENCIAS:

// PARA RESOLUÇÃO DO REQUISITO 2, FORAM UTILIZADAS OS SEGUINTES CONTEÚDOS DA INTERNET
// https://stackoverflow.com/questions/35582978/best-way-to-filter-table-in-react
// https://www.youtube.com/watch?v=5Tq4-UgPTDs
