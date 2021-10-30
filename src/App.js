/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Card from './components/Card'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Upper from './components/Upper';

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Upper />
      <Card />
      {/* genchat */}
    </div>
  );
}

export default App;
