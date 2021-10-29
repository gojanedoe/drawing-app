import './App.css';
import Header from './components/Header';
import CategorySelect from './components/CategorySelect';

// MAIN COMPONENT
function App() {
  // If fetch is finished, return full app
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
