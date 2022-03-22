import React, { useEffect } from 'react';
import './App.css';
import Provider from './context/myProvider';

function App() {
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      const dataResults = data.results;
      console.log(dataResults);
      // setPeople(data);
    };
    fetchAPI();
  }, []);

  return (
    <Provider>
      <span>Hello, App!!!! Lets Rock!</span>
    </Provider>
  );
}

export default App;
