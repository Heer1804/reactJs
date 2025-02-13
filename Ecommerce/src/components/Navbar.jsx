import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';  // Import Font Awesome cart icon

function Navbar({ cartItemCount }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2px 15px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1000
      }}
    >
      <h2 style={{ color: '#253489' }}>E-Commerce</h2>

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <FaShoppingCart size={24} style={{ cursor: 'pointer', color: 'rgb(0 12 82 / 69%)', margin:"-80px"}} />
        {cartItemCount > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-28px',
              right: '48px',
              backgroundColor: '#253489',
              color: 'white',
              borderRadius: '50%',
              padding: '3px 6px',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          >
            {cartItemCount}
          </span>
        )}
      </div>
    </div>
  );
}

export default Navbar;
