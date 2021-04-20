import React from 'react';
import imgIntro from '../Assets/intro_testes.png';

const PaginaTestes = () => {
    return (
        <section className="container">
            {/* Intro */}
            <div className="img_container intro">
                <img
                    src={imgIntro}
                    alt="Imagem contendo vários exemplos de acessibilidade"
                />
            </div>

            {/* Conteúdo dos testes automatizados */}
            <h2 className="titulo_sessao">Testes automatizados</h2>

            <p>Os testes automatizados só encontram 30% dos erros de acessibilidades presentes em sites, isso por conta dos problemas estarem ligados mais a forma comose utiliza o site em vez de como se cria, mesmo assim eles são de extrema importância, pois com isso podemos nos concentrar em resolver os 70% restante dos problemas.</p>

            <p>A ferramenta mais utilizada dentro desses testes é a aXe DevTools, que é composta por bibliotecas que avaliam se o seu código correspondem aos requisitos da WCAG 2.0 durante o desenvolvimento da interface e com uma extensão para navegadores que realizam testes rápidos na interfaca já criada, porém estes recursos são pagos.</p>

            {/* Conteúdo dos testes manuais */}
            <h2 className="titulo_sessao">Testes manuais</h2>

            <p>Saindo de testes automatizados entramos nos testes manuais, eles correspondem a maior parte no processo de teste da acessibilidade, eles são feitos através de ferramentas, que geram informações sobre a acessbilidade, porém dependem da ánalise humana para terem resultado, entre as diversas ferramentas que existem, iremos citar a Lighthouse, Chromelens e a própria devtools do Google Chrome.</p>

            <p><span style={{ color: 'var(--corPrincipal)'}}>Lighthouse:</span> Avalia a sua interface com uma nota de 0 a 100 e te mostra quais elementos não passaram na avaliação deles, com isso você consegue modificar eles pelo navegador e vê a nota mudando em tempo real.</p>

            <p><span style={{ color: 'var(--corPrincipal)'}}>Chromelens:</span> Simula diferentes tipos de deficiências visuais.</p>

            <p><span style={{ color: 'var(--corPrincipal)'}}>DevTools Google Chrome:</span> Recurso nativo do navegador a partir da versão 65, contém um painel onde é possível analisar a estrutura de um determinado elemento e checar se ele possui os WAI-ARIA corretos.</p>
        </section>
    );
};

export default PaginaTestes;
