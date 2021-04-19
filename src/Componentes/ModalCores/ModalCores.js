import React from 'react';
import estilos from './ModalCores.module.css';
import ModalContainer from '../ModalContainer/ModalContainer';
import OpcaoTema from '../OpcaoTema/OpcaoTema';

const ModalCores = ({ setAtivo }) => {
    const [opcaoTema, setOpcaoTema] = React.useState(window.localStorage.getItem('tema') || '');

    const limparTemas = React.useCallback(() => {
        window.localStorage.removeItem('tema');
        document.body.classList.remove('temaRoxo');
        document.body.classList.remove('temaEscuro');
    }, []);

    const definirTema = React.useCallback((tema) => {
        limparTemas();
        window.localStorage.setItem('tema', tema);
        document.body.classList.add(tema);
    }, [limparTemas]);

    React.useEffect(() => {
        if (opcaoTema !== 'temaPadrao') definirTema(opcaoTema);
        else limparTemas();
    }, [opcaoTema, definirTema, limparTemas]);

    return (
        <ModalContainer setAtivo={setAtivo} classe={estilos.Modal}>
            <h2>Escolha seu Tema</h2>

            <OpcaoTema
                valorAtivo={opcaoTema}
                opcao="temaPadrao"
                label="Padrão"
                setValor={setOpcaoTema}
                cor="padrao"
            />

            <OpcaoTema
                valorAtivo={opcaoTema}
                opcao="temaRoxo"
                label="Roxo"
                setValor={setOpcaoTema}
                cor="roxo"
            />

            <OpcaoTema
                valorAtivo={opcaoTema}
                opcao="temaEscuro"
                label="Escuro"
                setValor={setOpcaoTema}
                cor="escuro"
            />
        </ModalContainer>
    );
};

export default ModalCores;
