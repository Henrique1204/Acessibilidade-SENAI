import React from 'react';
import ImagemIntro from '../Componentes/ImagemIntro/ImagemIntro';
import imgIntro from '../Assets/intro_dicas.jpg';
import imgDevTools from '../Assets/exemplo_abrir_devtools.jpg';
import imgGerarAnalise from '../Assets/exemplo_gerar_analise.jpg';
import imgResultadoAnalise from '../Assets/exemplo_resultado_analise.jpg';
import imgConclusao from '../Assets/conclusao.jpg';

const Tutorial = () => {
    return (
        <section className="container">
            <ImagemIntro
                src={imgIntro}
                alt="Imagem de ilustração para tutoriais"
            />

            <p>
                Nesse tutorial você verá sobre a extensão Lighthouse, aprenderá como criar análises das suas interfaces e como consultar o que precisa ser melhorado. Para isso certifique-se de ter ela instalada no seu navegador, caso não tenha instalado,
                <a
                    href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=pt-BR"
                    target="_blank"
                    className="linkExterno"
                    rel="noreferrer"
                >clique aqui</a> para acessar a tela de instalação.
            </p>

            <h2 className="titulo_sessao">Passo 1 - Abrir o Lighthouse no navegador</h2>

            <p className="metade">Após instalar a extensão, acesseo site que deseja testar, abra o DevTools (inspecionar), entre as opções de aba que ele mostra, procure por uma chamada Lighthouse.</p>

            <div className="img_container metade">
                <img
                    src={imgDevTools}
                    alt="Imagem mostrando a opção Lighthouse no DevTools do navegador"
                />
            </div>

            <h2 className="titulo_sessao">Passo 2 - Gerar analise</h2>

            <p className="metade">Após encontrar o painel do Lighthouse, você verá diversas categorias (categories) de coisas que podem ser testadas, além de opções de dispositivos (device), para esse exemplos deixe apenas a opção de acessibilidade (Accessibility) marcada e escolha o dispositivo desktop e clique em "Generate report".</p>

            <div className="img_container metade">
                <img
                    src={imgGerarAnalise}
                    alt="Imagem mostrando a configuração do Lighthouse"
                />
            </div>

            <h2 className="titulo_sessao">Passo 3 - Consultar analise</h2>

            <p className="metade">Após executar o passo 3, o site começará a ser analisado e após a analise ser carregada, você terá um painel mostrando a pontuação do seu site em acessibilidade, ele irá mostrar os itens que reprovaram na avaliação com um triângulo vermelho, ao clicar nesses itens irá aparecer informações completas dos erros, contendo um print da área em questão, uma descrição do erro e uma link que te ajude a resolver esse erro.</p>

            <div className="img_container metade">
                <img
                    src={imgResultadoAnalise}
                    alt="Imagem mostrando o resultado da analise do Lighthouse"
                />
            </div>

            <h2 className="titulo_sessao">Conclusão</h2>

            <p className="metade">Com isso basta você seguir as recomendações dele e corrigir sua interface, eles também oferecem uma série de testes alternativos que só podem ser feitos manualmente, é recomendável que você faça esses testes para ter certeza que está tudo certo com a acessibilidade da interface.</p>

            <div className="img_container metade">
                <img
                    src={imgConclusao}
                    alt="Imagem mostrando opções de testes alternativos"
                />
            </div>
        </section>
    );
};

export default Tutorial;
