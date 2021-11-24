import './App.css';
import NavBar from './components/NavBar';
import Router from './routes/Router';

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <div className="App">
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
