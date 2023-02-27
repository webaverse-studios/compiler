import React from 'react';
import ReactDOM from 'react-dom/client';

import {Index} from './Index.jsx';

console.log('render 0', {root});
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('render 1', {root});
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
);
console.log('render 2', {root});