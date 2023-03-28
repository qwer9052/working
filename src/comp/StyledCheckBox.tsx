import React, { ChangeEvent, ChangeEventHandler } from 'react';
import styled from 'styled-components';
import backgroundImg from '../assets/img/check.png';

type checkBox = {
  id: string;
  onChange: any;
  checked: boolean;
};

function StyledCheckBox(props: checkBox) {
  return (
    <StyledLabel htmlFor={props.id}>
      {/* <StyledP>{props.id}</StyledP> */}
      <StyledInput checked={props.checked} onChange={props.onChange} type='checkbox' id={props.id} name={props.id} />
    </StyledLabel>
  );
}

export default StyledCheckBox;

const StyledInput = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid gainsboro;
  border-radius: 0.7rem;

  &:checked {
    border-color: transparent;
    background-image: url(${backgroundImg});
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyledP = styled.p`
  margin-left: 0.25rem;
`;
