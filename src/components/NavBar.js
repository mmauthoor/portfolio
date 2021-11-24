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
  // Rather than setting setting '/' as the default activeTab,
  // the default activeTab is set to whatever is in the url.
  // This accounts for edge cases where the user first lands on a page.
  const currentPath =  window.location.href.split('/')[3];
  const [ activeTab, setActiveTab ] = useState(currentPath);

  const tabs = [
    { label: 'Profile', path: '', icon: <FaRegAddressCard /> },
    { label: 'Projects', path: 'projects', icon: <FaCode /> },
    { label: 'Experience', path: 'experience', icon: <FaBriefcase /> },
    { label: 'Education', path: 'education', icon: <FaUniversity /> },
    { label: 'Contact', path: 'contact', icon: <FaPhone /> },
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
