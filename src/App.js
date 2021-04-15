import React from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import MenuLateral from './Componentes/MenuLateral/MenuLateral';
import Rotas from './Rotas';
import Footer from './Componentes/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <MenuLateral />
      <Rotas />
      <Footer />
    </>
  );
};

export default App;
