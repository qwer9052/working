import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledInput = styled.input`
  border-radius: 10px;
  border: 1px solid rgb(235, 239, 255);
  display: flex;
  width: calc(100% - 30px);
  font-size: 16px;
  padding: 15px 15px;
`;

export default (props: any) => <StyledInput className='' {...props} />;
