import React from 'react';
import estilos from './OpcoesAcessibilidade.module.css';

const OpcoesAcessibilidade = ({ cliqueNoAtalho, cliqueNoCores }) => {
    return (
        <ul className={estilos.OpcoesAcessibilidade}>
            <li>
                <button onClick={cliqueNoCores}>Cores</button>
            </li>

            <li>
                <button onClick={cliqueNoAtalho}>Atalhos de teclado</button>
            </li>
        </ul>
    );
};

export default OpcoesAcessibilidade;
