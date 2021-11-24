import { Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Profile from './views/Profile';
import Projects from './views/Projects';
import Experience from './views/Experience';
import Education from './views/Education';
import Contact from './views/Contact';

function App() {
  return (
    <div className="App">

      <NavBar />

      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/education' element={<Education />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
