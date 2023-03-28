import { Link } from 'react-router-dom';
import { COLORS } from '../css/Color';
import { postType, POST_TYPE_PRIORITY_NAME_MAP } from '../type/enum';
import { Post } from '../type/post';
import StyledLink from './StyledLink';

const PostType = ({ type: postType }) => {
  let name = '';

  return (
    <div style={{ border: '1px solid #eee', fontSize: 13, padding: '1px 5px' }}>
      <span style={{ color: '#94969b' }}>{POST_TYPE_PRIORITY_NAME_MAP[postType]}</span>
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
      <div style={{ marginLeft: 'auto', marginRight: 0 }}>
        <p>{1}</p>
      </div>
      <div style={{ marginLeft: 7, marginRight: 0 }}>
        <p>120</p>
      </div>
    </div>
  );
};

export default PostItem;
