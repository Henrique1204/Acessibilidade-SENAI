import React from 'react';
import { Link } from 'react-router-dom';
import estilos from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={estilos.Footer}>
            <h1>Testes de acessibilidades SENAI Suíço Brasileira</h1>
            <Link to="/desenvolvedores">desenvolvedores</Link>
        </footer>
    );
};

export default Footer;
