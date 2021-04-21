import React from 'react';
import ImagemIntro from '../Componentes/ImagemIntro/ImagemIntro';
import imgTemaAzul from '../Assets/home_temaAzul.jpg';
import imgTemaRoxo from '../Assets/home_temaRoxo.jpg';
import imgTemaEscuro from '../Assets/home_temaEscuro.jpg';
import Head from '../Componentes/Util/Head';

const Home = ({ opcaoTema }) => {
    const [temaImg, setTemaImg] = React.useState('');

    React.useEffect(() => {
        if (opcaoTema === 'temaRoxo') {
            setTemaImg(imgTemaRoxo);
        }
        else if (opcaoTema === 'temaEscuro') {
            setTemaImg(imgTemaEscuro);
        }
        else {
            setTemaImg(imgTemaAzul);
        };
    }, [opcaoTema]);
    return (
        <section className="container">
            <Head
                title="Introdução"
                description="Saiba o por que de acessibilidade ser necessária para ter uma boa interface."
            />

            { temaImg && (
                <ImagemIntro
                    src={temaImg}
                    alt="Ilustrações que representam as deficiências"
                />
            ) }

            <p>Acessibilidade é a garantia de que, qualquer pessoa possa utilizar uma determinada aplicação sem nenhum tipo de impedimento. Isso significa, que não apenas o usuário “típico” conseguirá utilizar com satisfação a aplicação, mas também aqueles que vivenciam algum tipo de deficiência ou incapacidade que são classificadas em quatro grupos abrangentes: visual, motora, auditiva e cognitiva.</p>

            <h2 className="titulo_sessao">Qual a importância de ter uma interface acessível?</h2>

            <p>Testam-se aspectos de acessibilidade para garantir que a aplicação desenvolvida poderá ser utilizada pelos PCDs sem maiores problemas. Muitas vezes, as empresas não possuem o conhecimento dos possíveis obstáculos que pessoas com deficiência encontrarão. Algumas (ou muitas) ignoram os testes de acessibilidade, ou simplesmente os fazem sem a presença de alguém que de fato precise da acessibilidade. </p>

            <h2 className="titulo_sessao">Como funcionam os testes?</h2>

            <p>Testes de acessibilidade visam garantir que a aplicação, seja ela web ou móvel, esteja apta para ser utilizada por PCDs (Pessoas com deficiência). Esses testes podem ser feitos de formas manuais por especialistas na área, automatizados com uso de softwares e ferramentas apropriadas, e podem ser feitos até mesmo por usuários PCDs.</p>
        </section>
    );
};

export default Home;
