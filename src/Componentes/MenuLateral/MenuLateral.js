import React from 'react';
import estilos from './MenuLateral.module.css';
import Navegacao from '../Navegacao/Navegacao';
import OpcoesAcessibilidade from '../OpcoesAcessibilidade/OpcoesAcessibilidade';
import Icone from '../Util/Icone';
import ModalContainer from '../ModalContainer/ModalContainer';
import ModalCores from '../ModalCores/ModalCores';
import { useLocation } from 'react-router';

const MenuLateral = ({ ativo, setAtivo }) => {
    const [modalAtalhos, setModalAtalhos] = React.useState(null);
    const [modalCores, setModalCores] = React.useState(false);
    const { pathname } = useLocation();

    const menuToggle = () => setAtivo((ativo) => !ativo);

    const fecharModalAtalhos = (valor) => {
        setModalAtalhos(valor);
        window.sessionStorage.setItem('visualizado', 'true');
    };

    const fecharModalCores = (valor) => {
        setModalCores(valor);
        window.sessionStorage.setItem('visualizado', 'true');
    };

    React.useEffect(() => {
        setAtivo(false);
        window.scrollTo({ behavior: "smooth", top: 0 });
    }, [pathname, setAtivo]);

    React.useEffect(() => {
        const sessaoValida = window.sessionStorage.getItem('visualizado');
        if (sessaoValida !== "true") setModalAtalhos(true);
    }, []);

    React.useEffect(() => {
        window.addEventListener('keydown', ({ key, altKey }) => {
            if (altKey && key === 'm') setAtivo(true);
            if (key === 'Escape') setAtivo(false);
            if (altKey && key === 't') setModalAtalhos(true);
        });
    }, [setAtivo]);

    return (
        <>
            <aside
                className={`${estilos.MenuLateral} ${(ativo) ? estilos.aberto : estilos.fechado}`}
            >
                    <button className={estilos.hamburguer} onClick={menuToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    { ativo && (
                        <>
                            <div>
                                <h2>Páginas do site</h2>
                                <Navegacao />
                            </div>

                            <div className={estilos.acessibilidade}>
                                <h1>Opções de acessibilidades</h1>
                                <OpcoesAcessibilidade
                                    cliqueNoAtalho={() => setModalAtalhos(true)}
                                    cliqueNoCores={() => setModalCores(true)}
                                />
                            </div>
                        </>
                    ) }

                    { !ativo  && (
                        <button className={estilos.icone} onClick={menuToggle}>
                            <Icone tipo="fa" nome="cog" />
                        </button>
                    ) }
            </aside>

            { modalAtalhos && (
                <ModalContainer setAtivo={fecharModalAtalhos} classe={estilos.ModalAtalho}>
                    <h2>Atalhos para teclado</h2>
    
                    <ul>
                        <li><span>ESC</span> Fecha menu lateral/ modais.</li>
                        <li><span>Alt + M</span> Abre o menu lateral.</li>
                        <li><span>Alt + T</span> Abre o modal de temas.</li>
                        <li><span>Alt + A</span> Abre o modal de atalhos.</li>
                        <li><span>+</span> Aumenta a fonte do site.</li>
                        <li><span>-</span> Diminui a fonte do site.</li>
                    </ul>
                </ModalContainer>
            ) }

            { modalCores && <ModalCores setAtivo={fecharModalCores} /> }
        </>
    );
};

export default MenuLateral;
