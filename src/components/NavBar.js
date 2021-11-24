import { useState } from 'react';
import {
  FaBriefcase,
  FaCode,
  FaPhone,
  FaReact,
  FaRegAddressCard,
  FaUniversity
} from 'react-icons/fa';

import NavTab from './NavTab';
import './NavBar.css';

const NavBar = () => {
  const [ activeTab, setActiveTab ] = useState('/');

  const tabs = [
    { label: 'Profile', path: '/', icon: <FaRegAddressCard /> },
    { label: 'Projects', path: '/projects', icon: <FaCode /> },
    { label: 'Experience', path: '/experience', icon: <FaBriefcase /> },
    { label: 'Education', path: '/education', icon: <FaUniversity /> },
    { label: 'Contact', path: '/contact', icon: <FaPhone /> },
  ];

  const renderTab = (tab) => {
    return (
      <NavTab
        key={ tab.label }
        label={ tab.label }
        path={ tab.path }
        icon={ tab.icon }
        activeTab={ activeTab }
        setActiveTab={ setActiveTab }
      />
    );
  };

  return (
    <nav>
      { tabs.map(renderTab) }
      <div className='divider web' />
      <p className='info web'>I built this site with <FaReact /> React</p>
    </nav>
  );
};

export default NavBar;
