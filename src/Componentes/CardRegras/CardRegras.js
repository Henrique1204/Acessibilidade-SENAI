import React from 'react';
import estilos from './CardRegras.module.css';

const CardRegras = ({ children }) => {
    return (
        <li className={estilos.Card}>
            {children}
        </li>
    );
};

export default CardRegras;
