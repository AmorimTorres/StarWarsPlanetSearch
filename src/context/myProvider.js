import React, { useState } from 'react';
import MyContext from './myContext';

function Provider({ children }) {
  const INITIAL_STATE = { nome: 'André', idade: 30 };
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      const dataResults = data.results;
      console.log(dataResults);
    };
    fetchAPI();
  }, []);

  const contextData = {
    state,
    setState,
  };

  return (
    <MyContext.Provider value={ contextData }>
      {children}
    </MyContext.Provider>
  );
}

export default Provider;
