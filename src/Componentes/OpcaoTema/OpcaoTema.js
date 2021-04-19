import React from 'react';
import estilos from './OpcaoTema.module.css';

const OpcaoTema = ({ valorAtivo, opcao, label, setValor, cor }) => {
    return (
        <div
            className={
                `${estilos.opcaoTema} 
                ${(valorAtivo === opcao) ? estilos.ativo : ''} 
                ${estilos[cor]}`
            }
        >
            <label htmlFor={opcao} tabIndex="0">{label}</label>
            <input
                type="radio"
                name={opcao}
                id={opcao}
                value={opcao}
                checked={valorAtivo === opcao}
                onChange={({ target }) => setValor(target.value)}
            />
        </div>
    );
};

export default OpcaoTema;
