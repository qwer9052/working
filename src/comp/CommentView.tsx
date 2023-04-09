import { useState } from 'react';
import { COLORS } from '../css/Color';
import '../css/comment_view.css';
import { Comment, CommentChildren } from '../type/post';
import { User } from '../type/user';
import { date } from '../util/common';
import CommentReplyView from './CommentReplyView';
import CommentWriteView from './CommentWriteView';
import Eye from './img/Eye';
import LikeBlack from './img/LikeBlack';
import LikeGray from './img/LikeGray';
import MessageGray from './img/MessageGray';
import More from './img/More';
import Time from './img/Time';

type CommentViewType = {
  writer: User;
  comment: Comment;
};

const writer = (writerId, commentUserId) => {
  if (writerId == commentUserId) {
    return <span style={{ color: COLORS.error_100, fontSize: 11, marginLeft: 5 }}>작성자</span>;
  } else {
    return null;
  }
};

const CommentView = (props: CommentViewType) => {
  const [hide, setHide] = useState(true);
  return (
    <div className='comment_view_comment_wrap'>
      <div style={{ padding: '20px 30px' }}>
        <span style={{ color: COLORS.point, fontSize: 13, fontFamily: 'notosans reg' }}>{props.comment.tbUser.name}</span>

        {writer(props?.writer?.userId, props?.comment?.tbUser.userId)}

        <div style={{ padding: '10px 0px' }}>{props.comment.content}</div>

        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Time />
            <span className='comment_view_comment_span'>{date(props?.comment?.creDt)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 13 }}>
            <LikeGray />
            <span className='comment_view_comment_span'>{props.comment.countCommentLike}</span>
          </div>
          <div onClick={() => setHide((e) => !e)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 13, cursor: 'pointer' }}>
            <MessageGray />
            <span className='comment_view_comment_span'>{props?.comment?.children.length}</span>
          </div>
          <div style={{ marginLeft: 'auto', marginRight: 0 }}>
            <More />
          </div>
        </div>
      </div>
      {!hide ? <CommentWriteView key={props.comment.commentId + '_'} hide={true} length={0} postId={props?.comment?.parentId} commentId={props.comment.commentId} /> : null}

      {props?.comment?.children.map((item: CommentChildren) => {
        return <CommentReplyView writer={props.writer} reply={item} />;
      })}
    </div>
  );
};

const divid = {
  backgroundColor: '#eee',
  height: 1,
  width: '100%',
  margin: '30px 0',
};

export default CommentView;
