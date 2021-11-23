import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <Link to='/' className='current'>Profile</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/experience'>Experience</Link>
      <Link to='/education'>Education</Link>
      <div className='divider' />
      <Link to='/contact'>Contact</Link>
    </nav>
  );
}
