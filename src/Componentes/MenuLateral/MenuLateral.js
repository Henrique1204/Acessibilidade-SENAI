import React from 'react';
import estilos from './MenuLateral.module.css';
import Navegacao from '../Navegacao/Navegacao';
import OpcoesAcessibilidade from '../OpcoesAcessibilidade/OpcoesAcessibilidade';
import Icone from '../Util/Icone';
import ModalCores from '../ModalCores/ModalCores';
import ModalAtalhos from '../ModalAtalhos/ModalAtalhos';
import { useLocation } from 'react-router';

const MenuLateral = ({ ativo, setAtivo }) => {
    const [modalAtalhos, setModalAtalhos] = React.useState(null);
    const [modalCores, setModalCores] = React.useState(false);
    const { pathname } = useLocation();

    const menuToggle = React.useCallback(() => setAtivo((ativo) => !ativo), [setAtivo]);

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
            if (altKey && key === 'm') menuToggle();

            if (altKey && key === 'a') {
                setModalCores(false);
                setModalAtalhos(true);
            }

            if (altKey && key === 't') {
                setModalAtalhos(false);
                setModalCores(true);
            }
        });
    }, [menuToggle]);

    return (
        <>
            <aside
                className={`${estilos.MenuLateral} ${(ativo) ? estilos.aberto : estilos.fechado}`}
            >
                    <button
                        className={estilos.hamburguer}
                        onClick={menuToggle}
                        aria-label={`${(ativo) ? 'Fecha' : 'Abre'} o menu de navegação e o painel de acessibilidade`}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    { ativo && (
                        <>
                            <div>
                                <h3>Páginas do site</h3>
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
                        <button className={estilos.icone} onClick={menuToggle} aria-label="Abre o menu de navegação e configuração">
                            <Icone tipo="fa" nome="cog" />
                        </button>
                    ) }
            </aside>

            { modalAtalhos && <ModalAtalhos setAtivo={fecharModalAtalhos} /> }

            { modalCores && <ModalCores setAtivo={fecharModalCores} /> }
        </>
    );
};

export default MenuLateral;
