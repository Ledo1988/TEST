import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import data from './data.json';

ReactDOM.render(
  <React.StrictMode>
    <App initialData={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

