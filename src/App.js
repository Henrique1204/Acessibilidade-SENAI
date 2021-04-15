import React from 'react';
import './App.css';
import Rotas from './Rotas';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Rotas />
      <Footer />
    </>
  );
};

export default App;
