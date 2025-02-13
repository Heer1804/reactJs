import React from 'react';

function Footer() {
  return (
    <div
      style={{
        backgroundColor: '#f9f9f9',
        padding: '10px 20px',
        width: '100vw',
        position: 'fixed',
        bottom: '0',
        left: '0',
        color: 'white',
      }}
    >
      <h4 style={{ textAlign: 'center',color:'#213547', margin: 0 }}>
        © 2025 Heer Parikh. All rights reserved.
      </h4>
    </div>
  );
}

export default Footer;
