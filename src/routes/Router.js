import { Routes, Route } from 'react-router-dom';

import Profile from '../views/Profile';
import Projects from '../views/Projects';
import Experience from '../views/Experience';
import Education from '../views/Education';
import Contact from '../views/Contact';

export default function Router() {
  return (
    <Routes>
      <Route path='' element={<Profile />} />
      <Route path='projects' element={<Projects />} />
      <Route path='experience' element={<Experience />} />
      <Route path='education' element={<Education />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
  );
}
