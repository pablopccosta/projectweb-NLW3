import React from 'react';


import './styles/global.css';

import Routes from './pages/routes';


function App() {
  return (
    <Routes />
  );
}

export default App;

/* 
O live Server Preview só executa no browse arquivo em 
html. Este arquivo é .tsx, para executa-lo no navegador 
tenho que usar a seguinte função no terminal: "npm start".
TypeScriptXml (tsx) significado dessa extenção.
Ela é uma integração do React que executa um "html" dentro
do javascript. Todo componente no React é uma função que 
retorna conteúdo jsx (html) no javaScript. Quando passamos 
um atributo para um componente chamamos isso de propriedade.
*/
