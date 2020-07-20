import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
// import logo from './logo.svg';
// import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color : 'aqua',
    fontSize:24,
    padding: '1rem'
  }
  return (
    <Counter />
  );
}

export default App;
