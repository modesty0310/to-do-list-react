import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthService from './service/auth_service';
import ListRepository from './service/list_repository';

const authService = new AuthService();
const listRepository = new ListRepository();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} listRepository={listRepository}/>
  </React.StrictMode>,
  document.getElementById('root')
);

