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
import { date } from '../util/common';

const PostDefail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const result = await axiosPostInstance.get(`post/${postId}`);
    setPost(result.data);
    console.log(result.data);
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

          <div style={{ color: COLORS.point, fontSize: 13, fontFamily: 'notosans reg', textAlign: 'left', marginBottom: 15 }}>
            <b>{post?.tbUser.name}</b>
          </div>

          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Time />
              <b style={{ color: COLORS.black_350, fontSize: 14, marginLeft: 5 }}>{date(post?.creDt)}</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 13 }}>
              <Eye />
              <b style={{ color: COLORS.black_350, fontSize: 14, marginLeft: 5 }}>13</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 13 }}>
              <MessageGray />
              <b style={{ color: COLORS.black_350, fontSize: 14, marginLeft: 5 }}>{post?.comments.length}</b>
            </div>
            <div style={{ display: 'flex', marginRight: 0, marginLeft: 'auto' }}>
              <BookMark />
              <div style={{ width: 10 }} />
              <More />
            </div>
          </div>
          <div style={divid} />
          <div style={{ textAlign: 'left' }}>{post?.content}</div>
          <div style={{ display: 'flex', marginTop: 30 }}>
            <a onClick={() => alert(34)} style={{ display: 'flex', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <LikeBlack />
                <span style={{ color: COLORS.black_800, fontSize: 14, marginLeft: 5 }}>{post?.countPostLike}</span>
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
          <CommentWriteView hide={false} length={post?.comments.length} postId={post?.postId} commentId={0} />
          {post?.comments.map((item: Comment) => {
            return <CommentView key={item.commentId + '_' + item.parentId} writer={post?.tbUser} comment={item} />;
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
