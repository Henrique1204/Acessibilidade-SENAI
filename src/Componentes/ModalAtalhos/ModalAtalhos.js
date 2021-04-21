import React from 'react';
import estilos from './ModalAtalhos.module.css';
import ModalContainer from '../ModalContainer/ModalContainer';

const ModalAtalhos = ({ setAtivo }) => {
    return (
        <ModalContainer setAtivo={setAtivo} classe={estilos.Modal}>
            <h2>Atalhos para teclado</h2>

            <ul>
                <li><span>ESC</span> Fecha modais.</li>
                <li><span>ALT e M</span> Abre/fecha o menu.</li>
                <li><span>ALT e T</span> Abre o modal de temas.</li>
                <li><span>ALT e A</span> Abre o modal de atalhos.</li>
                <li><span>CTRL e +</span> Aumenta o zoom do site.</li>
                <li><span>CTRL e -</span> Diminui o zoom do site.</li>
            </ul>
        </ModalContainer>
    );
};

export default ModalAtalhos;
