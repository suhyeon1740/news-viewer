import './App.css';
import React from 'react';
import Menu from './components/Menu';
import { Route } from 'react-router-dom';
import Article from './components/Article';
function App() {
  return (
    <div>
      <Menu />
      <Route path="/" component={Article} />
    </div>
  );
}

export default App;
