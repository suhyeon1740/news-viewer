import './App.css';
import React, { useCallback, useState } from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
function App() {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);
  // :category? => category 값이 선택적이라는 의미.
  return <Route path="/:category?" component={NewsPage} />;
}

export default App;
