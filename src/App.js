import { useState } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Intro from './components/Intro';
import PhotoGenerator from './components/PhotoGenerator';

// MAIN COMPONENT
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // If fetch is finished, return full app
  return (
    <div className="App">
      <Header />
      <Route path="/" exact>
        <Intro
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Route>
      <Route path="/app">
        <PhotoGenerator selectedCategory={selectedCategory} />
      </Route>
    </div>
  );
};

export default App;
