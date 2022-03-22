import React from 'react';
import './App.css';
import Provider from './context/myProvider';

function App() {
  return (
    <Provider>
      <span>Hello, App!!!! Lets Rock!</span>
    </Provider>
  );
}

export default App;
