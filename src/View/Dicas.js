import React from 'react';
import imgIntro from '../Assets/intro_dicas.jpg';
import imgTitulos from '../Assets/exemplo_titulos.jpg';
import imgAtributos from '../Assets/exemplo_atributos_descontinuados.jpg';

const Dicas = () => {
    return (
        <section className="container">
            {/* Intro */}
            <div className="img_container">
                <img
                    src={imgIntro}
                    alt="Celular sob a mesa ao lado de um ícone de acessibilidade"
                />
            </div>

            <p>Códigos mais simples, limpos e com uma semântica adequada costumam ser o melhor caminho para desenvolver um site acessível. No entanto, ainda temos alguns pontos que precisam de atenção, mesmo com um código ajeitado. Os validadores automáticos conseguem nos ajudar em alguns pontos importantes com algumas validações. Entre elas: </p>

            {/* Conteúdo dos cabeçalhos */}
            <h2 className="titulo_sessao">Hierarquia de cabeçalhos</h2>

            <p>Existe a possibilidade de navegar entre cabeçalhos, de maneira hierárquica. Ou seja, se eu estou navegando entre H1, eu posso a qualquer momento querer varrer entre os cabeçalhos H2 filhos daquele H1 e depois nos H3 filhos de um determinado H2 (desde que o site esteja corretamente estruturado) e assim por diante.</p>

            <p>Para isso acontecer, devemos definir de maneira correta esses cabeçalhos, pois além de serem extremamente relevantes para SEO ainda melhoram a navegabilidade por leitores de tela.</p>

            <div className="img_container metade">
                <img
                    src={imgTitulos}
                    alt="Exemplo das tags html h1, h2, h3 e h4"
                />
            </div>

            <p className="metade">O H1 normalmente é utilizado como cabeçalho principal da sessão, a partir do H2 as coisas começam a ficar mais interessantes, pois para cada subtítulo de um determinado conteúdo, é possível acessar os filhos desse subtítulo se esses existirem (você pode delimitar por exemplo, na área de um post de um blog, o H2 como título, H3 como gravata daquele post , um H4 nos títulos do conteúdo e um segundo H3 como área de comentários, delimitando onde termina o conteúdo e começa uma nova parte).</p>

            {/* Conteúdo dos Padrões W3C */}
            <h2 className="titulo_sessao">Padrões W3C de HTML e CSS</h2>
    
            <p>Como diretriz de acessibilidade do CSS, o W3C prevê a diminuição da manutenção dos sites, aumentando a consistência da programação, como o sistema de cores ou tamanho de fontes. Isso também permite recursos adaptáveis aos usuários, como aumento de fonte ou alto contraste, voltados às pessoas com deficiência visual.</p>
    
            <ul className="lista">
                <li>Usar o mínimo de folhas de estilo no site.</li>
                <li>Usar folhas de estilo externas ao invés de incorporada, para evitar a folha de estilo inline.</li>
                <li>Caso haja mais de uma, é necessário o usar o mesmo nome de “classe” para o mesmo conceito presente em diferentes folhas de estilo.</li>
            </ul>

            {/* Conteúdo de elementos descontinuados */}
            <h2 className="titulo_sessao">Elementos descontinuados</h2>

            <p className="metade">A alteração desses comandos pode prejudicar a acessibilidade do site. No protocolo HTML5, muitas tags foram descontinuadas, que demandam o uso do CSS, assim como foram adicionados novos atributos.</p>

            <div className="img_container metade">
                <img src={imgAtributos} alt="Exemplos de tags descontinuadas"/>
            </div>

            {/* Conteúdo dos metadados */}
            <h2 className="titulo_sessao">Metadados HTML da página</h2>

            <p>Por meio da ferramenta, é possível descrever páginas web e componentes acessíveis presentes nelas, além de associar versões alternativas de conteúdo. Algumas das funções desempenhadas dos metadados:</p>

            <ul className="lista">
                <li>Associação de versões alternativas em conformidade a páginas Web que não estejam em conformidade.</li>
                <li>Localização e descrição de páginas alternativas, quando há versões de uma mesma página.</li>
                <li>Descrição de versões alternativas de subcomponentes de uma página.</li>
            </ul>

            <p>Outras funcionalidades mais complexas, não podem ser resolvidas somente com um código organizado. Para esses casos, podemos nos apoiar no WAI-ARIA (Web Accessibility Initiative – Accessible Rich Internet Applications), uma especificação técnica que permite aumentar a acessibilidade de uma página, ou conteúdo dinâmico.</p>

            {/* Conteúdo das boas práticas */}
            <h1 className="titulo_sessao">Boas práticas de Design</h1>

            <ul className="lista">
                <li>O tamanho das fontes deve facilitar a leitura.</li>
                <li>As cores devem seguir regras de contraste que contribuem para a identificação dos elementos.</li>
                <li>Os links devem ser facilmente identificados, e não confundíveis com blocos de texto.</li>
                <li>Links que direcionam para fora do site precisam ser identificados.</li>
                <li>Todo elemento informativo, como ícone, precisa de um elemento textual que o descreva.</li>
                <li>Evite alinhamento centralizado nos blocos de texto e não utilize textos justificados.</li>
                <li>Evite texto em itálico, pois essa formatação dificulta a leitura.</li>
                <li>O espaçamento entre os elementos deve ser consistente e não deixar dúvidas entre a relação do conteúdo.</li>
                <li>O usuário deve ter controle sobre as animações do site.</li>
            </ul>
        </section>
    );
};

export default Dicas;
