import React from 'react';
import estilos from './MenuLateral.module.css';
import Navegacao from '../Navegacao/Navegacao';
import OpcoesAcessibilidade from '../OpcoesAcessibilidade/OpcoesAcessibilidade';
import Icone from '../Util/Icone';
import { useLocation } from 'react-router';

const MenuLateral = () => {
    const [ativo, setAtivo] = React.useState(false);
    const { pathname } = useLocation();

    const menuToggle = () => setAtivo((ativo) => !ativo);

    React.useEffect(() => {
        setAtivo(false);
        window.scrollTo({ behavior: "smooth", top: 0 });
    }, [pathname]);

    return (
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
                        <Icone nome="cog" />
                    </button>
                ) }
        </aside>
    );
};

export default MenuLateral;
