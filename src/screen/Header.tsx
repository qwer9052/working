import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../comp/LoginButton';
import StyledLink from '../comp/StyledLink';
import WriteButton from '../comp/WriteButton';
import { COLORS } from '../css/Color';
import { getToken, loginCheck, logout } from '../util/axiosPlugin';
import { useAsync } from 'react-async';
import PostWrite from './PostWrite';

function Header() {
  const [openPostWrite, setOpenPostWrite] = useState(false);

  useEffect(() => {}, []);

  const { data, error, isPending } = useAsync({ promiseFn: getToken });

  const Token = () => {
    if (error || isPending) {
      return (
        <LoginButton>
          <StyledLink style={{ color: '#000' }} to='/login'>
            로그인
          </StyledLink>
        </LoginButton>
      );
    } else if (data) {
      return (
        <LoginButton onClick={() => logout()}>
          <StyledLink style={{ color: '#000' }} to='/login'>
            로그아웃
          </StyledLink>
        </LoginButton>
      );
    } else {
      return (
        <LoginButton>
          <StyledLink style={{ color: '#000' }} to='/login'>
            로그인
          </StyledLink>
        </LoginButton>
      );
    }
  };

  const actionWrite = async () => {
    await loginCheck();
    setOpenPostWrite(true);
  };

  return (
    <>
      <PostWrite visible={openPostWrite} setVisible={setOpenPostWrite} />

      <header style={{ borderBottom: '1px solid #d4d4d4', position: 'relative', marginBottom: 45 }}>
        <div style={{ height: 80, width: 1100, margin: 'auto', justifyContent: 'space-between', display: 'flex' }}>
          <div style={{ alignSelf: 'center' }}>
            <Link style={{ textDecoration: 'none' }} to='/'>
              <p style={{ fontSize: 32, fontWeight: 'bold', color: COLORS.point, fontFamily: 'logo' }}>Workingnet</p>
            </Link>
          </div>

          <WriteButton onClick={actionWrite}>
            <a style={{ color: '#fff' }}>글쓰기</a>
          </WriteButton>

          <Token />
        </div>
      </header>
    </>
  );
}

export default Header;
