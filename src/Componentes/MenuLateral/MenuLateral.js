import React from 'react';
import estilos from './MenuLateral.module.css';
import Navegacao from '../Navegacao/Navegacao';
import OpcoesAcessibilidade from '../OpcoesAcessibilidade/OpcoesAcessibilidade';
import Icone from '../Util/Icone';
import { useLocation } from 'react-router';
import ModalContainer from '../ModalContainer/ModalContainer';

const MenuLateral = ({ ativo, setAtivo }) => {
    const [modalAtalhos, setModalAtalhos] = React.useState(null);
    const { pathname } = useLocation();

    const menuToggle = () => setAtivo((ativo) => !ativo);

    React.useEffect(() => {
        setAtivo(false);
        window.scrollTo({ behavior: "smooth", top: 0 });
    }, [pathname, setAtivo]);

    React.useEffect(() => {
        const sessaoValida = window.sessionStorage.getItem('visualizado');
        if (sessaoValida !== "true") setModalAtalhos(true);
    }, []);

    const fecharModalAtalhos = (valor) => {
        setModalAtalhos(valor);
        window.sessionStorage.setItem('visualizado', 'true');
    };

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
                                <OpcoesAcessibilidade />
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
                    <h1>Atalhos para teclado</h1>
    
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
        </>
    );
};

export default MenuLateral;
