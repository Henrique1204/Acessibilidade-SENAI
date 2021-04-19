import React from 'react';
import imgIntro from '../Assets/intro_wcag.jpg'

const PaginaRegras = () => {
    return (
        <section className="container">
            <div className="img_container intro">
                <img
                    src={imgIntro}
                    alt="Imagem de um computador com um código na tela"
                />
            </div>

            <h2 className="titulo_sessao">WCAG 2.0</h2>

            <p>As Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.0 possuem um grande conteúdo de recomendações, onde buscam fazer com que o conteúdo Web seja acessível para todos os usuários. Com a execução destas diretrizes, fará com que o conteúdo se torne acessível a um maior número de pessoas, entre elas, pessoas com cegueira e baixa visão, surdez e baixa audição, dificuldades de aprendizagem, limitações cognitivas, limitações de movimentos, incapacidade de fala, fotossensibilidade bem como as que tenham uma combinação destas limitações. Seguir estas diretrizes fará também com que o conteúdo Web se torne mais aproveitáveis aos usuários em geral.</p>

            <ul>
                <li>
                    <h3>PRECEPTÍVEL</h3>

                    <p>As informações e os componentes da interface do usuário devem ser apresentados em formas que possam ser percebidas pelo usuário.</p>
                </li>

                <li>
                    <h3>OPERÁVEL</h3>

                    <p>Os componentes de interface de usuário e a navegação devem ser operáveis, por exemplo: todas as funcionalidades da página estão disponíveis via teclado.</p>
                </li>

                <li>
                    <h3>COMPREENSÍVEL</h3>

                    <p>A informação e a operação da interface de usuário devem ser compreensíveis para isso deve-se utilizar linguagem clara e simples nos conteúdos e mecanismos de navegação entre as páginas.</p>
                </li>

                <li>
                    <h3>ROBUSTO</h3>

                    <p>O conteúdo deve ser robusto o suficiente para poder ser interpretado de forma concisa por diversos agentes do usuário, incluindo recursos de tecnologia assistida, os usuários dever ser capazes de de acessar o conteúdo conforme a tecnologia avança.</p>
                </li>
            </ul>

            <h2 className="titulo_sessao">WAI-ARIA</h2>

            <p>Uma especificação da Web Accessibility Iniciative (WAI) publicada pela W3C, a ARIA é um conjunto de especificações utilizadas para tornar mais acessíveis os websites e as aplicações web, com interações mais avançadas, por exemplo o uso de AJAX e janelas modais.</p>

            <p>Em um website simples com o conteúdo estático, o acesso à informação é feito normalmente começando a leitura no topo da página e percorrendo toda a informação até ao final da página. Num website mais avançado ou em um aplicativo web, eventualmente são usadas tecnologias que fazem com que apareça informação na página sem que a mesma seja carregada. Em termos de acessibilidade, por exemplo para uma pessoa com deficiencia visual, torna-se complicado perceber que abriu uma janela modal ou que apareceu uma mensagem de sucesso ou de erro no meio da página.</p>

            <p className="metade">Com isso, foram criadas as especificações ARIA, que tem o objetivo de adicionar algum significado semântico a estes elementos, dar-lhes foco na interface quando eles aparecem na página. Por exemplo, um utilizador que esteja a navegar com um screen-reader pode receber avisos do aparecimento de janelas modais ou de mensagens importantes na página, podendo assim executar ações sobre elas.</p>
        </section>
    );
};

export default PaginaRegras;
