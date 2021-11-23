import { Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">

      <NavBar />

      <Routes>
        <Route path='/' element={<Profile />} />
      </Routes>

    </div>
  );
}

export default App;
