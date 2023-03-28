import { COLORS } from '../css/Color';
import '../css/comment_view.css';
import { CommentChildren } from '../type/post';
import { User } from '../type/user';
import Eye from './img/Eye';
import LikeGray from './img/LikeGray';
import MessageGray from './img/MessageGray';
import More from './img/More';
import Time from './img/Time';
type CommentReplyViewType = {
  writer: User;
  reply: CommentChildren;
};

const writer = (writerId, commentUserId) => {
  if (writerId == commentUserId) {
    return <span style={{ color: COLORS.error_100, fontSize: 11, marginLeft: 5 }}>작성자</span>;
  } else {
    return null;
  }
};

const CommentReplyView = (props: CommentReplyViewType) => {
  return (
    <div className='comment_view_comment_reply_wrap'>
      <div style={{ padding: '20px 30px' }}>
        <div>
          <span style={{ color: COLORS.point, fontSize: 13, fontFamily: 'notosans reg' }}>{props.reply.tbUser.name}</span>
          {writer(props?.writer?.userId, props?.reply?.tbUser.userId)}
        </div>
        <div style={{ padding: '10px 0px' }}>{props.reply.content}</div>

        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Time />
            <span className='comment_view_comment_span'>17시간</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 13 }}>
            <LikeGray />
            <span className='comment_view_comment_span'>13</span>
          </div>
          <div style={{ marginLeft: 'auto', marginRight: 0 }}>
            <More />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentReplyView;
