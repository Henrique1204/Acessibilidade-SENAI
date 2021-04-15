import React from 'react'
import { NavLink } from 'react-router-dom';
import estilos from './Navegacao.module.css';

const Navegacao = () => {
    return (
        <nav className={estilos.Navegacao}>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/regras">WCAG 2.0</NavLink>
                </li>

                <li>
                    <NavLink to="/testes">Testes</NavLink>
                </li>

                <li>
                    <NavLink to="/dicas">Dicas</NavLink>
                </li>

                <li>
                    <NavLink to="/tutorial">Tutorial</NavLink>
                </li>

                <li>
                    <NavLink to="/desenvolvedores">Desenvolvedores</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navegacao;
