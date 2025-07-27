import React from 'react';
import ReactDOM from 'react-dom/client'; // 正確引入 React 18
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'; // 正確引入 HashRouter

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter> {/* 在 index.js 中包裹 HashRouter */}
    <App />
  </HashRouter>
);