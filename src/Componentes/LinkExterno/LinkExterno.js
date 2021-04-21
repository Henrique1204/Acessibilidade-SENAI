import React from 'react';
import estilos from './LinkExterno.module.css';

const LinkExterno = ({ href, children }) => (
    <a className={estilos.link} href={href} target="_blank" rel="noreferrer">{children}</a>
);

export default LinkExterno;
