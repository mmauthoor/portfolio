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
import GitCommit from '../_git_commit';

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

  // _git_commit.js contains the date of the last commit, which updates on every `npm start` or `npm run build`
  // These lines convert it into a `Month YYYY` format
  const lastCommitDate = GitCommit.lastCommit.split("Date:")[1];
  const lastUpdated = new Date(lastCommitDate).toLocaleString('en-AU', { month: 'short', year: 'numeric' })

  return (
    <nav>
      { tabs.map(renderTab) }
      <div className='divider web' />
      <p className='info web'>Built with Rails and React</p>
      <p className='info web'>Last updated { lastUpdated }</p>
    </nav>
  );
};

export default NavBar;
