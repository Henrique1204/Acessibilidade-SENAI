import React from 'react';
import CardGithub from '../Componentes/CardGithub/CardGithub';

const Desenvolvedores = () => {
    return (
        <section className="container">
            <CardGithub usuario="gkslima" />
            <CardGithub usuario="JoseCarlos69" />
            <CardGithub usuario="agatha-juh" />
            <CardGithub usuario="LuanTavares13" />
            <CardGithub usuario="ramos-r" />
            <CardGithub usuario="henrique1204" />

            <a
                href="https://github.com/Henrique1204/Acessibilidade-SENAI"
                target="_blank"
                rel="noreferrer"
                className="call-to-action"
            >
                Repositório do projeto
            </a>
        </section>
    );
};

export default Desenvolvedores;
