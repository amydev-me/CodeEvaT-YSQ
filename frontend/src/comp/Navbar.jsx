import { useState } from 'react';
import  styles from '../assets/css/Navbar.module.css';


function Navbar(props) {

  // adding the states 
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

  const onClickHome = () => {
    props.onChangeNav('home');
  }

  const onSupportPage = () => {
    props.onChangeNav('support');
  }

  return (
    <div className="App">
      <header className="App-header">

        <nav className={`${styles.navbar}`}>

          {/* logo */}
          {/* <a href='#home' className={`${styles.logo}`}>Dev. </a> */}

          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a  className={`${styles.navLink}`} onClick={onClickHome}>Home</a>
            </li>
            <li onClick={removeActive}>
              <a  className={`${styles.navLink}`} onClick={onSupportPage}>Support Page</a>
            </li>
            
          </ul>

          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>

      </header>
    </div>
  );
}

export default Navbar;