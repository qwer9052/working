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
import { axiosJwtPostInstance, axiosPostInstance, logout } from '../util/axiosPlugin';
import { changeEnteredNum, date, getCookie } from '../util/common';
import PostLike from '../comp/PostLike';
import { useQuery } from 'react-query';
import LikeRed from '../comp/img/LikeRed';
import { motion } from 'framer-motion';

const PostDefail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<Post>(null);

  useEffect(() => {
    test();
  }, []);

  const test = async () => {
    const b = await fetchPostHistory();
    const a = getCookie('postId');
  };

  const fetchPostHistory = () => axiosPostInstance.post(`post/history/${postId}`);

  const getPost = () => axiosJwtPostInstance.get(`post/${postId}`);

  const { isLoading, isError, data, error } = useQuery([`post_${postId}`], getPost, {
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실패시 재호출 몇번 할지
    onSuccess: (result: any) => {
      // 성공시 호출
      setPost(result.data);
      console.log(result.data);
    },
    onError: (e) => {
      // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
      // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
      console.log(e);
    },
  });

  if (isLoading) {
    return <>{isLoading}</>;
  }

  if (isError) {
    return <>{isError}</>;
  }

  const listMotion = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemMotion = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <WrapDiv>
      <motion.div style={{ display: 'flex' }} transition={{ duration: 1 }} variants={listMotion} initial='hidden' animate='visible'>
        <motion.div style={{ flex: 0.73, paddingRight: 50 }} variants={itemMotion} transition={{ duration: 0.5 }}>
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
              <b style={{ color: COLORS.black_350, fontSize: 14, marginLeft: 5 }}>{changeEnteredNum(post?.countHistory)}</b>
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
            <PostLike id={post?.postId} count={post?.countPostLike} isLike={post?.like} icon1={<LikeRed width={20} height={20} />} icon2={<LikeBlack />} />
            {/* <a onClick={() => alert(34)} style={{ display: 'flex', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <LikeBlack />
                <span style={{ color: COLORS.black_800, fontSize: 14, marginLeft: 5 }}>{post?.countPostLike}</span>
              </div>
            </a> */}

            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 13 }}>
                <MessageBlack />
                <span style={{ color: COLORS.black_800, fontSize: 14, marginLeft: 5 }}>{post?.comments.length}</span>
              </div>
            </div>
          </div>
          <div style={divid} />
          <CommentWriteView hide={false} length={post?.comments.length} postId={post?.postId} commentId={0} />
          {post?.comments?.map((item: Comment) => {
            return <CommentView key={item.commentId + '_comment_view_' + item.parentId + '_' + Math.random()} writer={post?.tbUser} comment={item} />;
          })}
        </motion.div>
        <div style={{ flex: 0.27 }}>
          <SearchRank />
        </div>
      </motion.div>
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
