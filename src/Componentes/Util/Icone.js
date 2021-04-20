import React from 'react';

const Icone = ({ nome, tipo }) => <i className={`${tipo} fa-${nome}`} aria-hidden="true"></i>;

export default Icone;
