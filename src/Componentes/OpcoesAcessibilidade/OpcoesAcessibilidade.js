import React from 'react';
import estilos from './OpcoesAcessibilidade.module.css';

const OpcoesAcessibilidade = () => {
    return (
        <ul className={estilos.OpcoesAcessibilidade}>
            <li>
                <button>Cores</button>
            </li>

            <li>
                <button>Atalhos de teclado</button>
            </li>

            <li>
                <button>Formatar Texto</button>
            </li>
        </ul>
    );
};

export default OpcoesAcessibilidade;
