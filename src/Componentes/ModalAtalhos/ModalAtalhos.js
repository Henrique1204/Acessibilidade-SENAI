import React from 'react';
import estilos from './ModalAtalhos.module.css';
import ModalContainer from '../ModalContainer/ModalContainer';

const ModalAtalhos = ({ setAtivo }) => {
    return (
        <ModalContainer setAtivo={setAtivo} classe={estilos.Modal}>
            <h2>Atalhos para teclado</h2>

            <ul>
                <li><span aria-hidden="true">ESC</span> Fecha modais.</li>
                <li><span aria-hidden="true">ALT e M</span> Abre/fecha o menu.</li>
                <li><span aria-hidden="true">ALT e T</span> Abre o modal de temas.</li>
                <li><span aria-hidden="true">ALT e A</span> Abre o modal de atalhos.</li>
                <li><span aria-hidden="true">CTRL e +</span> Aumenta o zoom do site.</li>
                <li><span aria-hidden="true">CTRL e -</span> Diminui o zoom do site.</li>
            </ul>
        </ModalContainer>
    );
};

export default ModalAtalhos;
