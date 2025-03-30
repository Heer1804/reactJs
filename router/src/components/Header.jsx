import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <span style={styles.logo}>Routing</span>
        <span style={styles.logoAccent}>.</span>
      </div>
      <div style={styles.navLinks}>
        <Link 
          to="/" 
          style={{
            ...styles.link,
            ...(location.pathname === "/" ? styles.activeLink : {}),
          }}
        >
          <span style={styles.linkText}>Home</span>
        </Link>
        <Link 
          to="/display" 
          style={{
            ...styles.link,
            ...(location.pathname === "/display" ? styles.activeLink : {}),
          }}
        >
          <span style={{ ...styles.linkText, padding: '0 12px' }}>Display</span>
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
    padding: '0px 18px',
    background: 'rgb(24 29 67)', 
    boxShadow: '0 4px 10px rgba(255,255,255,0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    minHeight: '70px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: '1.5px',
    fontFamily: "'Poppins', sans-serif",
  },
  logoAccent: {
    fontSize: '28px',
    color: '#00d4ff',
    fontWeight: '700',
  },
  navLinks: {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
    height: '100%', 
  },
  link: {
    color: '#e0e0e0',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '10px 20px', 
    margin: '10px 30px 10px 10px',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    fontWeight: '500',
    fontFamily: "'Inter', sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
  },
  activeLink: {
    color: '#ffffff',
    background: 'linear-gradient(45deg, rgba(0, 212, 255, 0.2), rgba(9, 9, 121, 0.2))',
    boxShadow: '0 2px 8px rgba(0, 212, 255, 0.3)',
  },
  linkText: {
    position: 'relative',
    zIndex: 1,
    lineHeight: '1',
    padding: '0 12px', 
  },
};

export default Header;