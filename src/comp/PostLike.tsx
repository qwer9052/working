import { useQuery } from 'react-query';
import LikeBlack from './img/LikeBlack';
import { COLORS } from '../css/Color';
import { axiosJwtPostInstance, loginCheck, logout } from '../util/axiosPlugin';
import LikeRed from './img/LikeRed';
import { useEffect, useState } from 'react';

type like = {
  id: number;
  count: number;
  isLike: boolean;
  icon1: any;
  icon2: any;
};

const PostLike = (props: like) => {
  const [click, setClick] = useState<Boolean>(null);

  const likeFetch = async () => {
    await loginCheck();
    return axiosJwtPostInstance.post(`post/like/${props.id}`);
  };

  const action = async () => {
    const result = await likeFetch();
    setClick(result.data == 'N' ? true : false);
  };

  const count = () => {
    if (click === null) return 0;
    return props.isLike ? (click ? 0 : -1) : click ? 1 : 0;
  };

  const icon = () => {
    if (click == null) {
      return props.isLike ? props.icon1 : props.icon2;
    } else {
      return click ? props.icon1 : props.icon2;
    }
  };

  return (
    <a onClick={action} style={{ display: 'flex', cursor: 'pointer' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {icon()}
        <span style={{ color: COLORS.black_800, fontSize: 14, marginLeft: 5 }}>{props?.count + count()}</span>
      </div>
    </a>
  );
};

export default PostLike;
