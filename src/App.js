import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Intro from './components/Intro';
import PhotoGenerator from './components/PhotoGenerator';

// MAIN COMPONENT
function App() {
  // If fetch is finished, return full app
  return (
    <div className="App">
      <Header />
      <Route path="/" exact>
        <Intro />
      </Route>
      <Route path="/app">
        <PhotoGenerator />
      </Route>
    </div>
  );
}

export default App;
