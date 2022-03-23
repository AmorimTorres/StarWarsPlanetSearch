import React, { useContext } from 'react';
import context from '../context/myContext';
import Inputs from './Inputs';

function Table() {
  const { filterByName, data } = useContext(context);

  const filterPlanetsByName = data
    .filter((planet) => planet.name.includes(filterByName.name));

  return (
    <div>
      <Inputs />
      <table border="2">
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
          {filterPlanetsByName.map((item) => (
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

// PARA A RESOLUAÇÃO DO REQUISITO 3, FORAM UTILIZADAS AS OS SEGUINTES CONTEÚDOS DA INTERNET:
// PARA INPUT TEXT QUE SÓ ACEITA NUMBERS: https://stackoverflow.com/questions/43687964/only-numbers-input-number-in-react

/* filterPlanetsByName.filter((planet) => {
    return filters.every (column, value, comparison)
    if comparison === maior que
    return planet.colum > value
  })
  */
