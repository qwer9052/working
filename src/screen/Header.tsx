import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../comp/LoginButton';
import StyledLink from '../comp/StyledLink';
import WriteButton from '../comp/WriteButton';
import { COLORS } from '../css/Color';

function Header() {
  return (
    <header style={{ borderBottom: '1px solid #d4d4d4', position: 'relative', marginBottom: 45 }}>
      <div style={{ height: 80, width: 1100, margin: 'auto', justifyContent: 'space-between', display: 'flex' }}>
        <div style={{ alignSelf: 'center' }}>
          <Link style={{ textDecoration: 'none' }} to='/'>
            <p style={{ fontSize: 32, fontWeight: 'bold', color: COLORS.point, fontFamily: 'logo' }}>Workingnet</p>
          </Link>
        </div>

        <WriteButton onClick={() => alert('test')}>
          <a style={{ color: '#fff' }}>글쓰기</a>
        </WriteButton>

        <LoginButton>
          <StyledLink style={{ color: '#000' }} to='/login'>
            로그인
          </StyledLink>
        </LoginButton>
      </div>
    </header>
  );
}

export default Header;
