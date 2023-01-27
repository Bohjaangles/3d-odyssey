import React from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import image from './assets/body.png'
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${image})`, height: '100vh' }}>
      <Header/>
      <CardList />
    </div>
  );
}

export default App;
