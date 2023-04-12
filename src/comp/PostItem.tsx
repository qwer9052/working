import { Link } from 'react-router-dom';
import { COLORS } from '../css/Color';
import { postType, POST_TYPE_PRIORITY_NAME_MAP } from '../type/enum';
import { Post } from '../type/post';
import StyledLink from './StyledLink';
import PostLike from './PostLike';
import MessageGray from './img/MessageGray';
import LikeRed from './img/LikeRed';
import LikeBlack from './img/LikeBlack';
import LikeRedSmall from './img/LikeRedSmall';
import LikeGray from './img/LikeGray';

const PostType = ({ type: type }) => {
  const indexOfS = Object.keys(postType).indexOf(type);
  const s = Object.values(postType)[indexOfS];

  return (
    <div style={{ border: '1px solid #eee', fontSize: 13, padding: '1px 5px' }}>
      <span style={{ color: '#94969b' }}>{s}</span>
    </div>
  );
};
const Title = ({ title: title, postId: postId }) => {
  let titleStr = title.length < 40 ? title : title.slice(0, 39) + '...';

  return (
    <StyledLink style={{ color: '#000' }} to={'/post/' + postId}>
      <div style={{ marginLeft: 5 }}>
        <p style={{ fontSize: 15, fontFamily: 'notosans reg' }}>{titleStr}</p>
      </div>
    </StyledLink>
  );
};

const PostItem = (props: Post) => {
  return (
    <div style={{ display: 'flex', height: 30, alignItems: 'center', cursor: 'pointer' }}>
      <PostType type={props.postType} />
      <Title title={props.title} postId={props.postId} />

      <div style={{ marginLeft: 'auto', marginRight: 0, width: 40, display: 'flex', justifyContent: 'center' }}>
        <PostLike id={props?.postId} count={props?.countPostLike} isLike={props.like} icon1={<LikeRedSmall />} icon2={<LikeGray />} />
      </div>
      <div style={{ marginLeft: 10, marginRight: 0, display: 'flex', width: 40 }}>
        <MessageGray />
        <span style={{ fontSize: 12 }}>{props.countComment}</span>
      </div>
    </div>
  );
};

export default PostItem;
