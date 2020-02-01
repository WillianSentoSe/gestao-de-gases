import React from 'react';
import Header from './components/Header';
import Routes from './routes';

import './styles.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
