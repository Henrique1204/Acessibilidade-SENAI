import React from 'react';
import estilos from './CardGithub.module.css';
import Icone from '../Util/Icone'

const CardGithub = ({ usuario }) => {
    const [dados, setDados] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    React.useEffect(() => {
        const fetchDados = async () => {
            try {
                setDados(null);
                setLoading(true);
    
                const res = await fetch(`https://api.github.com/users/${usuario}`);
                const json = await res.json();

                if (!res.ok) throw new Error('Falha ao buscar na API.');

                setDados({
                    foto: json.avatar_url,
                    nome: json.name,
                    descricao: json.bio,
                    perfil: json.html_url
                });
            } catch(e) {
                setDados(null);
            } finally {
                setLoading(false);
            }
        };

        fetchDados();
    }, [usuario]);

    if (loading) {
        return (
            <div className={`${estilos.Card} ${estilos.loading}` }>
                <div></div>
            </div>
        );
    }

    if (dados) {
        return (
            <div className={`${estilos.Card} ${estilos.conteudo}`}>
                <div className="img_container">
                    <img src={dados.foto} alt={`Foto do desenvolvedor ${dados.nome}`}/>
                </div>

                <h2>{dados.nome}</h2>

                <p>{dados.descricao}</p>

                <a href={dados.perfil} target="_blank" rel="noreferrer">
                    Ver Perfil <Icone tipo="fab" nome="github" />
                </a>
            </div>
        );
    }

    return null;
};

export default CardGithub;
