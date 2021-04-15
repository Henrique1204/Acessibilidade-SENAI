import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './View/Home';
import PaginaRegras from './View/PaginaRegras';
import PaginaTestes from './View/PaginaTestes';
import Dicas from './View/Dicas';
import Tutorial from './View/Tutorial';
import Desenvolvedores from './View/Desenvolvedores';

const Rotas = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/regras" element={<PaginaRegras />} />
                <Route path="/testes" element={<PaginaTestes />} />
                <Route path="/dicas" element={<Dicas />} />
                <Route path="/tutorial" element={<Tutorial />} />
                <Route path="/desenvolvedores" element={<Desenvolvedores />} />
            </Routes>
        </main>
    );
};

export default Rotas;
