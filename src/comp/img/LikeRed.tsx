type like = {
  width: number;
  height: number;
};

const LikeRed = (props: like) => {
  return (
    <div
      style={{
        background: 'url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png?time=dec2022) no-repeat',
        backgroundSize: '600px 900px',
        backgroundPosition: '-160px -484px',
        width: props.width,
        height: props.height,
      }}
    />
  );
};
export default LikeRed;
