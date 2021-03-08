import Header from './Components/Header/Header'
import routes from './routes'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <Header/>
      {routes}
      </header>
    </div>
  );
}

export default App;
