import React from 'react';
import { LottieAnimation } from 'react-lottie-tools';

import data from '../../assets/lottie/loading.json';

type LoadingViewTypes = {
  setShow: boolean;
};

const Loading = (props: LoadingViewTypes) => {
  return (
    <>
      {props.setShow ? (
        <div style={{ left: 0, right: 0, top: 0, bottom: 0, position: 'absolute', backgroundColor: 'rgba(255,255,255,0.7)', zIndex: 1000, display: 'flex' }}>
          <LottieAnimation loop={true} animation={data} style={{ width: '60px', height: '60px', marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto' }} />;
        </div>
      ) : null}
    </>
  );
};
export default Loading;
