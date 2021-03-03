import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start } from 'qiankun';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


registerMicroApps([
  {
    name: 'subapp-react',
    entry: '//localhost:3000',
    container: '#subapp-container',
    activeRule: '/subapp-react',
  }
]);
// 启动 qiankun
start();
