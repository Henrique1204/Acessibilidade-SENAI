import React from 'react';
import { useLocation } from 'react-router';
import estilos from './Header.module.css';

const Header = () => {
    const [localizacao, setLocalizacao] = React.useState('');
    const [introducao, setIntroducao] = React.useState('');
    const { pathname } = useLocation();

    React.useEffect(() => {
        let localizacao;
        let introducao;

        switch(pathname) {
            case '/':
                localizacao = 'Home';
                introducao = 'Introdução a testes de acessibilidades';
                break;
            case '/regras':
                localizacao = 'WCAG 2.0';
                introducao = 'Regras e normas para acessibilidade';
                break;
            case '/testes':
                localizacao = 'Testes';
                introducao = 'Saiba como testar sua interface';
                break;
            case '/dicas':
                localizacao = 'Dicas';
                introducao = 'Dicas para melhorar a acessibilidade';
                break;
            case '/tutorial':
                localizacao = 'Tutorial';
                introducao = 'Aprenda a fazer seus primeiros testes';
                break;
            case '/desenvolvedores':
                localizacao = 'Desenvolvedores';
                introducao = 'Nosso time de desenvolvimento';
                break;
            default:
                setLocalizacao('não encontrada');
                setIntroducao('Essa página não existe.');
        }

        setLocalizacao(localizacao);
        setIntroducao(introducao);        
    }, [pathname]);

    return (
        <header className={estilos.Header}>
            <div className="container">
                <h3>Página {localizacao}</h3>
                <h1>{introducao}</h1>
            </div>
        </header>
    );
};

export default Header;
