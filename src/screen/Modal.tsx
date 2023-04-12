import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../css/modal.css';

function Modal({ className, visible, children, setVisible }) {
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper className={className} tabIndex='-1' visible={visible}>
        <ModalInner tabIndex='0' className='modal-inner'>
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool,
};

const ModalWrapper = styled.div<{ visible: boolean; tabIndex: any }>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div<{ visible: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div<{ tabIndex: any }>`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  max-width: 880px;
  height: 700px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
`;

export default Modal;
