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
        Profile
      </Link>

      <Link to='/projects'>
        <FaCode className='icon' />
        Projects
      </Link>

      <Link to='/experience'>
        <FaBriefcase className='icon' />
        Experience
      </Link>

      <Link to='/education'>
        <FaUniversity className='icon' />
        Education
      </Link>

      <Link to='/contact'>
        <FaPhoneAlt className='icon' />
        Contact
      </Link>

      <div className='divider' />

      <p>This site was built with <FaReact alt='React' /></p>
    </nav>
  );
}
