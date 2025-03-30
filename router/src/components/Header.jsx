import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Routing</div>
      <div style={styles.navLinks}>
        <Link to="/" style={location.pathname === "/" ? styles.activeLink : styles.link}>
          Home
        </Link>
        <Link to="/display" style={location.pathname === "/display" ? styles.activeLink : styles.link}>
          Display
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 5px',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: '1px',
  },
  navLinks: {
    display: 'flex',
    gap: '25px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'all 0.3s ease-in-out',
  },
  activeLink: {
    color: '#fff',
    background: 'rgba(255, 255, 255, 0.2)',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'all 0.3s ease-in-out',
  },
};

export default Header;
