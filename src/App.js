import React from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import MenuLateral from './Componentes/MenuLateral/MenuLateral';
import Rotas from './Rotas';
import Footer from './Componentes/Footer/Footer';

const App = () => {
  const [menuAtivo, setMenuAtivo] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add(window.localStorage.getItem('tema') || '');
  }, []);

  return (
    <>
      <MenuLateral ativo={menuAtivo} setAtivo={setMenuAtivo} />
    
      <div className={`conteudo ${(menuAtivo) ? 'menuAberto' : ''}`}>
        <Header />
        <Rotas />
        <Footer />
      </div>
    </>
  );
};

export default App;
