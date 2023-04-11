import { useQuery } from 'react-query';
import LikeBlack from './img/LikeBlack';
import { COLORS } from '../css/Color';
import { axiosJwtPostInstance, loginCheck, logout } from '../util/axiosPlugin';
import LikeRed from './img/LikeRed';
import { useEffect, useState } from 'react';
import LikeGray from './img/LikeGray';
import LikeRedSmall from './img/LikeRedSmall';

type like = {
  id: number;
  count: number;
  isLike: boolean;
  type: 'comment' | 'post';
};

const CommentLike = (props: like) => {
  const [click, setClick] = useState<Boolean>(null);

  const likeFetch = async () => {
    await loginCheck();
    return axiosJwtPostInstance.post(`post/comment/like/${props.id}`);
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
      return props.isLike ? <LikeRedSmall /> : <LikeGray />;
    } else {
      return click ? <LikeRedSmall /> : <LikeGray />;
    }
  };

  return (
    <a onClick={action} style={{ display: 'flex', cursor: 'pointer' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {icon()}
        <span className='comment_view_comment_span'>{props?.count + count()}</span>
      </div>
    </a>
  );
};

export default CommentLike;
