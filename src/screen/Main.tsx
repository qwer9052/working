import React from 'react';
import { Link } from 'react-router-dom';
import WrapDiv from '../comp/WrapDiv';

const Main = () => {
  return (
    <WrapDiv>
      <h3>안녕하세요. 메인페이지 입니다.</h3>
      <ul>
        <Link to='/product/1'>
          <li>1번상품</li>
        </Link>
        <Link to='/product/2'>
          <li>2번상품</li>
        </Link>
      </ul>
    </WrapDiv>
  );
};

export default Main;
