import React from 'react';
import estilos from './MenuLateral.module.css';
import Navegacao from '../Navegacao/Navegacao';
import OpcoesAcessibilidade from '../OpcoesAcessibilidade/OpcoesAcessibilidade';
import Icone from '../Util/Icone';

const MenuLateral = () => {
    return (
        <aside className={estilos.MenuLateral}>
                <button className={estilos.hamburguer}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div>
                    <h2>Páginas do site</h2>
                    <Navegacao />
                </div>

                <div className={estilos.acessibilidade}>
                    <h1>Opções de acessibilidades</h1>
                    <OpcoesAcessibilidade />
                </div>

                <button className={estilos.icone}>
                    <Icone nome="cog" />
                </button>
        </aside>
    );
};

export default MenuLateral;
