import React from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import MenuLateral from './Componentes/MenuLateral/MenuLateral';
import Rotas from './Rotas';
import Footer from './Componentes/Footer/Footer';

const App = () => {
  const [menuAtivo, setMenuAtivo] = React.useState(false);

  React.useEffect(() => {
    const temaSalvo = window.localStorage.getItem('tema');
    if (temaSalvo) document.body.classList.add(temaSalvo);
  }, []);

  // Alteração de temas
  const [opcaoTema, setOpcaoTema] = React.useState(window.localStorage.getItem('tema') || '');

  return (
    <>
      <MenuLateral ativo={menuAtivo} setAtivo={setMenuAtivo} opcaoTema={opcaoTema} setOpcaoTema={setOpcaoTema} />
    
      <div className={`conteudo ${(menuAtivo) ? 'menuAberto' : ''}`}>
        <Header />
        <Rotas opcaoTema={opcaoTema}/>
        <Footer />
      </div>
    </>
  );
};

export default App;
