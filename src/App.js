import React from 'react';
import './App.scss';
import Nav from './Components/Nav/Nav';
import Movies from './Components/Movies/Movies';
import Controls from './Components/Controls/Controls';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Movies />
      <Controls />
    </div>
  );
}

export default App