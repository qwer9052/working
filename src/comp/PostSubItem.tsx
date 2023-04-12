import { COLORS } from '../css/Color';
import '../css/post_sub_item.css';
import { Post } from '../type/post';
import { changeEnteredNum } from '../util/common';
import StyledLink from './StyledLink';
import Eye from './img/Eye';

const Title = ({ title: title, postId: postId }) => {
  let titleStr = title.length < 24 ? title : title.slice(0, 23) + '...';

  return (
    <StyledLink style={{ color: '#000' }} to={'/post/' + postId}>
      <span>{titleStr}</span>
    </StyledLink>
  );
};

const PostSubItem = (props: Post) => {
  return (
    <div className='post_sub_item_wrap'>
      <Title title={props.title} postId={props.postId} />
      <div className='post_sub_item_eye' style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
        <Eye />
        <b style={{ color: COLORS.black_350, fontSize: 11, marginLeft: 5, alignSelf: 'center' }}>{changeEnteredNum(props?.countHistory)}</b>
      </div>
    </div>
  );
};

export default PostSubItem;
