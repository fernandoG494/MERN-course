import App from './App';
import React from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import './index.css';
import { PokemonApp } from './PokemonApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      {/* <App /> */}
      <PokemonApp />
    </Provider>
  </React.StrictMode>
);
