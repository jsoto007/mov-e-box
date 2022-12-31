import logo from '../logo.svg';
import '../App.css';
import Header from "./Header"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} alt="React Logo" />
      </header>
    </div>
  );
}

export default App;
