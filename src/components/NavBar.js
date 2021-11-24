import { Link } from 'react-router-dom';
import {
  FaBriefcase,
  FaCode,
  FaPhoneAlt,
  FaReact,
  FaRegAddressCard,
  FaUniversity
} from 'react-icons/fa';

import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <Link to='/' className='current'>
        <FaRegAddressCard className='icon' />
        <p className="label">Profile</p>
      </Link>

      <Link to='/projects'>
        <FaCode className='icon' />
        <p className="label">Projects</p>
      </Link>

      <Link to='/experience'>
        <FaBriefcase className='icon' />
        <p className="label">Experience</p>
      </Link>

      <Link to='/education'>
        <FaUniversity className='icon' />
        <p className="label">Education</p>
      </Link>

      <Link to='/contact'>
        <FaPhoneAlt className='icon' />
        <p className="label">Contact</p>
      </Link>

      <div className='divider' />

      <p className='info'>I built this site with <FaReact /> React</p>
    </nav>
  );
}
