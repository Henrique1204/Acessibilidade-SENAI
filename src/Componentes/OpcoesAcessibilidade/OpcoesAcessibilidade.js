import React from 'react';
import estilos from './OpcoesAcessibilidade.module.css';

const OpcoesAcessibilidade = ({ cliqueNoAtalho }) => {
    return (
        <ul className={estilos.OpcoesAcessibilidade}>
            <li>
                <button>Cores</button>
            </li>

            <li>
                <button onClick={cliqueNoAtalho}>Atalhos de teclado</button>
            </li>
        </ul>
    );
};

export default OpcoesAcessibilidade;
