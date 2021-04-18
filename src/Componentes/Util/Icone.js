import React from 'react';

const Icone = ({ nome, tipo }) => <i className={`${tipo} fa-${nome}`} ></i>;

export default Icone;
