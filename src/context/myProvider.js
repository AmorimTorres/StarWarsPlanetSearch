import React, { useState } from 'react';
import MyContext from './myContext';

function Provider({ children }) {
  const INITIAL_STATE = { nome: 'André', idade: 30 };
  const [state, setState] = useState(INITIAL_STATE);

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
