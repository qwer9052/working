import React from 'react';
import { useParams } from 'react-router-dom';
import WrapDiv from '../comp/WrapDiv';

const Product = () => {
  const { productId } = useParams();
  return (
    <WrapDiv>
      <h3>{productId}번 상품 페이지 입니다.</h3>
    </WrapDiv>
  );
};

export default Product;
