import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />
      <Card />
      {/* sidebar */}
      {/* genchat */}
    </div>
  );
}

export default App;
