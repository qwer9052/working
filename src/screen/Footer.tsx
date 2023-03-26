import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #d4d4d4', position: 'relative' }}>
      <div style={{ height: 80, width: 1100, margin: 'auto', justifyContent: 'space-between', display: 'flex' }}>
        <div style={{ alignSelf: 'center' }}>
          <Link to='/'>
            <h1>푸터입니다.</h1>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
