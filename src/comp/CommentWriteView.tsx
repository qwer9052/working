import { useEffect, useState } from 'react';
import '../css/comment_view.css';
import { axiosJwtPostInstance, loginCheck } from '../util/axiosPlugin';

type commentWriteProps = {
  length: number;
  postId: number;
  commentId: number;
  hide: boolean;
};

const CommentWriteView = (props: commentWriteProps) => {
  const [comment, setComment] = useState('');

  useEffect(() => {}, [comment]);

  const reqComment = async () => {
    await loginCheck();

    if (comment.length < 1) {
      alert('댓글을 입력해주세요.');
      return;
    }

    axiosJwtPostInstance
      .post(`post/comment/${props?.postId}/${props?.commentId}`, { content: comment })
      .then((res) => {
        setComment('');
        alert('댓글이 등록 되었습니다.');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const reqCommentReply = async () => {
    await loginCheck();
    if (comment.length < 1) {
      alert('댓글을 입력해주세요.');
      return;
    }

    axiosJwtPostInstance
      .post(`post/comment/${props?.commentId}`, { content: comment })
      .then((res) => {
        setComment('');
        alert('대댓글이 등록 되었습니다.');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', marginBottom: 30 }}>
      {!props.hide ? (
        <div style={{ flex: 1, marginBottom: 25 }}>
          <b>댓글 {props.length}</b>
        </div>
      ) : null}

      <div style={{ padding: 20, border: '1px solid #d4d4d4' }}>
        <textarea onChange={(e: any) => setComment(e.target.value)} className='comment_view_textarea' placeholder='댓글을 남겨주세요.' style={textarea}></textarea>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={() => {
              if (props.postId == 0 || props.postId == null) {
                reqCommentReply();
              } else {
                reqComment();
              }
            }}
            className='comment_view_btn_submit'
          >
            등록
          </button>
        </div>
      </div>
    </div>
  );
};
const textarea = {
  overflow: 'hidden',
  width: '100%',
  minHeight: 80,
  padding: '0 4px',
  border: 0,
  fontSize: 14,
  lineHeight: '1.5em',
};
export default CommentWriteView;
