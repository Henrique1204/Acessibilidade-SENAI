import React from 'react';
import estilos from './ModalAtalhos.module.css';
import ModalContainer from '../ModalContainer/ModalContainer';

const ModalAtalhos = ({ setAtivo }) => {
    return (
        <ModalContainer setAtivo={setAtivo} classe={estilos.Modal}>
            <h2>Atalhos para teclado</h2>

            <ul>
                <li><span>ESC</span> Fecha modais.</li>
                <li><span>Alt + M</span> Abre ou fecha o menu lateral.</li>
                <li><span>Alt + T</span> Abre o modal de temas.</li>
                <li><span>Alt + A</span> Abre o modal de atalhos.</li>
                <li><span>+</span> Aumenta a fonte do site.</li>
                <li><span>-</span> Diminui a fonte do site.</li>
            </ul>
        </ModalContainer>
    );
};

export default ModalAtalhos;
