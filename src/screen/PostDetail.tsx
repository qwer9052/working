import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentView from '../comp/CommentView';
import CommentWriteView from '../comp/CommentWriteView';
import BookMark from '../comp/img/BookMark';
import Eye from '../comp/img/Eye';
import LikeBlack from '../comp/img/LikeBlack';
import MessageBlack from '../comp/img/MessageBlack';
import MessageGray from '../comp/img/MessageGray';
import More from '../comp/img/More';
import RightArrow from '../comp/img/RightArrow';
import Time from '../comp/img/Time';
import SearchRank from '../comp/SearchRank';
import WrapDiv from '../comp/WrapDiv';
import { COLORS } from '../css/Color';
import { Comment, Post } from '../type/post';
import { axiosPostInstance } from '../util/axiosPlugin';

const PostDefail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const result = await axiosPostInstance.get(`post/${postId}`);
    setPost(result.data);
  };

  return (
    <WrapDiv>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 0.73, paddingRight: 50 }}>
          <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
            <b style={{}}>{'토픽  '}</b>
            <RightArrow />
            <b style={{}}>{'  블라블라'}</b>
          </div>
          <div>
            <h2 style={{ textAlign: 'left' }}>{post?.title}</h2>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Time />
              <span style={{ color: COLORS.black_350, fontSize: 14 }}>17시간</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 13 }}>
              <Eye />
              <span style={{ color: COLORS.black_350, fontSize: 14 }}>13</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 13 }}>
              <MessageGray />
              <span style={{ color: COLORS.black_350, fontSize: 14 }}>6346536</span>
            </div>
          </div>
          <div style={divid} />
          <div style={{ textAlign: 'left' }}>{post?.content}</div>
          <div style={{ display: 'flex', marginTop: 30 }}>
            <a onClick={() => alert(34)} style={{ display: 'flex', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <LikeBlack />
                <span style={{ color: COLORS.black_800, fontSize: 14, marginLeft: 5 }}>좋아요</span>
              </div>
            </a>

            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 13 }}>
                <MessageBlack />
                <span style={{ color: COLORS.black_800, fontSize: 14, marginLeft: 5 }}>{post?.comments.length}</span>
              </div>
            </div>
          </div>
          <div style={divid} />
          <CommentWriteView length={post?.comments.length} />
          {post?.comments.map((item: Comment) => {
            return <CommentView writer={post?.tbUser} comment={item} />;
          })}
        </div>
        <div style={{ flex: 0.27 }}>
          <SearchRank />
        </div>
      </div>
    </WrapDiv>
  );
};

const divid = {
  backgroundColor: '#eee',
  height: 1,
  width: '100%',
  margin: '30px 0',
};

export default PostDefail;
