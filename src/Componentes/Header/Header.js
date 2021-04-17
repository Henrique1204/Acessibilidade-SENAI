import React from 'react';
import estilos from './Header.module.css';

const Header = () => {
    return (
        <header className={estilos.Header}>
            <div className="container">
                <h3>Página essa aqui</h3>
                <h1>Titulo da introdução da página</h1>
            </div>
        </header>
    );
};

export default Header;
