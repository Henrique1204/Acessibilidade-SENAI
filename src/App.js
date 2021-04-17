import React from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import MenuLateral from './Componentes/MenuLateral/MenuLateral';
import Rotas from './Rotas';
import Footer from './Componentes/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <MenuLateral />
  
      <div className="conteudo">
        <Header />
        <Rotas />
      </div>

      <Footer />
    </div>
  );
};

export default App;
