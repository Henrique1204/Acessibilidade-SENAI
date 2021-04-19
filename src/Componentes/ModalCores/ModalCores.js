import React from 'react';
import estilos from './ModalCores.module.css';
import ModalContainer from '../ModalContainer/ModalContainer';

const ModalCores = ({ setAtivo }) => {
    const [opcaoTema, setOpcaoTema] = React.useState('');

    return (
        <ModalContainer setAtivo={setAtivo} classe={estilos.Modal}>
            <h2>Escolha seu  de cores:</h2>

            <div className={`${estilos.opcaoTema} ${(opcaoTema === '') ? estilos.ativo : ''}`}>
                <label htmlFor="temaPadrao">Padrão</label>
                <input
                    type="radio"
                    name="temaPadrao"
                    id="temaPadrao"
                    value=""
                    checked={opcaoTema === ''}
                    onChange={({ target }) => setOpcaoTema(target.value)}
                />
            </div>

            <div className={`${estilos.opcaoTema} ${(opcaoTema === 'temaRoxo') ? estilos.ativo : ''}`}>
                <label htmlFor="temaRoxo">Roxo</label>
                <input
                    type="radio"
                    value="temaRoxo"
                    name="temaRoxo"
                    id="temaRoxo"
                    checked={opcaoTema === 'temaRoxo'}
                    onChange={({ target }) => setOpcaoTema(target.value)}
                />
            </div>

            <div className={`${estilos.opcaoTema} ${(opcaoTema === 'temaEscuro') ? estilos.ativo : ''}`}>
                <label htmlFor="temaEscuro">Escuro</label>
                <input
                    type="radio"
                    name="temaEscuro"
                    id="temaEscuro"
                    value="temaEscuro"
                    checked={opcaoTema === 'temaEscuro'}
                    onChange={({ target }) => setOpcaoTema(target.value)}
                />
            </div>
        </ModalContainer>
    );
};

export default ModalCores;
