import React from 'react'
import { NavLink } from 'react-router-dom';
import estilos from './Navegacao.module.css';

const Navegacao = () => {
    return (
        <nav className={estilos.Navegacao}>
            <ul>
                <li>
                    <NavLink to="/" activeClassName={estilos.ativo} end>Home</NavLink>
                </li>

                <li>
                    <NavLink to="/regras"  activeClassName={estilos.ativo}>WCAG 2.0</NavLink>
                </li>

                <li>
                    <NavLink to="/testes"  activeClassName={estilos.ativo}>Testes</NavLink>
                </li>

                <li>
                    <NavLink to="/dicas"  activeClassName={estilos.ativo}>Dicas</NavLink>
                </li>

                <li>
                    <NavLink to="/tutorial"  activeClassName={estilos.ativo}>Tutorial</NavLink>
                </li>

                <li>
                    <NavLink to="/desenvolvedores"  activeClassName={estilos.ativo}>Desenvolvedores</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navegacao;
