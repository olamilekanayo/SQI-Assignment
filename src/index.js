import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import 'font-awesome/css/font-awesome.min.css'
import reportWebVitals from './reportWebVitals';
import Nav from './Nav';
import Componentone from './Componentone';
import Componenttwo from './Componenttwo';
import Componentthree from './Componentthree';
import Componentfour from './Componentfour';
import Componentfive from './Componentfive';
import Componentsix from './Componentsix';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Componentone />
    <Componenttwo />
    <Componentthree />
    <Componentfour />
    <Componentfive />
    <Componentsix />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();