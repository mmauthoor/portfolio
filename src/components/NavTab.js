import { cloneElement } from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';

const NavTab = ({ label, path, icon, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(path);
  };

  // Sets the an .active or .inactive class based on NavBar's state
  const className = activeTab === path ? 'active' : 'inactive';

  return (
    <Link className={ className } to={ path } onClick={ handleClick } >
      { cloneElement( icon, { className: 'icon' } ) }
      <p className='label'>{ label }</p>
    </Link>
  );
};

export default NavTab;
