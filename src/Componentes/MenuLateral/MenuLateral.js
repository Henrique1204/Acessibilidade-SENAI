import React from 'react';
import estilos from './MenuLateral.module.css';
import Navegacao from '../Navegacao/Navegacao';
import OpcoesAcessibilidade from '../OpcoesAcessibilidade/OpcoesAcessibilidade';

const MenuLateral = () => {
    return (
        <aside className={estilos.MenuLateral}>
            <button>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div>
                <h2>Páginas do site</h2>
                <Navegacao />
            </div>

            <div>
                <h1>Opções de acessibilidades</h1>
                <OpcoesAcessibilidade />
            </div>
        </aside>
    );
};

export default MenuLateral;
