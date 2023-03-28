import '../css/comment_view.css';

const CommentWriteView = ({ length: length }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', marginBottom: 30 }}>
      <div style={{ flex: 1, marginBottom: 25 }}>
        <b>댓글 {length}</b>
      </div>
      <div style={{ padding: 20, border: '1px solid #d4d4d4' }}>
        <textarea className='comment_view_textarea' placeholder='댓글을 남겨주세요.' style={textarea}>
          asdadasdas
        </textarea>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={() => alert(34)} className='comment_view_btn_submit'>
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
