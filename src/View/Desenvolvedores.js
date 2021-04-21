import React from 'react';
import CardGithub from '../Componentes/CardGithub/CardGithub';
import Head from '../Componentes/Util/Head';

const Desenvolvedores = () => {
    return (
        <section className="container">
            <Head
                title="Desenvolvedores"
                description="Página dos desenvolvedores do site."
            />

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
