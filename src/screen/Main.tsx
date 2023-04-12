import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WrapDiv from '../comp/WrapDiv';
import search from '../assets/img/icon_search_black.svg';
import best from '../assets/img/icon_best.png';
import '../App.css';
import { COLORS } from '../css/Color';
import { axiosPostInstance, logout } from '../util/axiosPlugin';
import { Post } from '../type/post';
import PostItem from '../comp/PostItem';
import { PagingModel } from '../type/pagingModel';
import '../css/main.css';
import '../css/post_item.css';
import SearchRank from '../comp/SearchRank';
import Loading from '../comp/img/loading';
import PostSub from '../comp/PostSub';
import { postType } from '../type/enum';
import { motion } from 'framer-motion';
import arrowRightGray from '../assets/img/arrow_right_gray.svg';

const Main = () => {
  const [list, setList] = useState<PagingModel<Post>>();

  const post = () => {
    console.log('post');
    axiosPostInstance
      .get(`/post?page=0&size=10&search=${''}`)
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    post();
  }, []);

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
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 0.73, paddingRight: 50 }}>
          <motion.div transition={{ duration: 1 }} variants={listMotion} initial='hidden' animate='visible'>
            <motion.div variants={itemMotion} transition={{ duration: 0.5 }}>
              <div style={{ border: '2px solid #3127a0', padding: 10, borderRadius: 100, display: 'flex' }}>
                <img style={{ width: 20, height: 20, margin: 'auto 0px auto 15px' }} src={search} alt='BigCo Inc. logo' />
                <input style={{ border: 0, width: '90%', fontSize: 20 }} placeholder='관심있는 내용을 검색해보세요!' />
              </div>
            </motion.div>
            <motion.div style={{ marginTop: 40 }} variants={itemMotion} transition={{ duration: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img style={{ width: 32, height: 32, margin: 'auto 0px auto 0px' }} src={best} alt='BigCo Inc. logo' />
                  <b style={{ fontSize: 18, marginLeft: 5 }}>토픽 베스트</b>
                </div>
                <div style={{ display: 'flex' }}>
                  <div className='more'>더보기</div>
                  <img style={{ width: 16, height: 16, margin: 'auto 0px auto 0px' }} src={arrowRightGray} alt='BigCo Inc. logo' />
                </div>
              </div>
              <div style={{ height: 2, background: '#3127a0', marginTop: 13, marginBottom: 10 }} />
              <div>
                {list?.data?.map((item: Post) => {
                  return <PostItem {...item} key={item.postId} />;
                })}
              </div>
            </motion.div>
          </motion.div>
          <div className='main_post_sub_wrap'>
            <div className='main_post_sub_container' style={{ display: 'flex' }}>
              <PostSub postType={postType.ETC} />
              <PostSub postType={postType.FREE} />
            </div>
            <div className='main_post_sub_container' style={{ display: 'flex' }}>
              <PostSub postType={postType.COMPANY} />
              <PostSub postType={postType.DATE} />
            </div>
            <div className='main_post_sub_container' style={{ display: 'flex' }}>
              <PostSub postType={postType.REAL_ESTATE} />
              <PostSub postType={postType.STOCK} />
            </div>
            <div className='main_post_sub_container' style={{ display: 'flex' }}>
              <PostSub postType={postType.DATE} />
              <PostSub postType={postType.HOBBY} />
            </div>
            <div className='main_post_sub_container' style={{ display: 'flex' }}>
              <PostSub postType={postType.SHOPPING} />
              <PostSub postType={postType.PET} />
            </div>
            <div className='main_post_sub_container' style={{ display: 'flex' }}>
              <PostSub postType={postType.SPORTS} />
              <PostSub postType={postType.MILITARY} />
            </div>
            <div className='main_post_sub_container' style={{ display: 'flex' }}>
              <PostSub postType={postType.RECRUITMENT} />
            </div>
          </div>
        </div>
        <div style={{ flex: 0.27 }}>
          <SearchRank />
        </div>
      </div>
    </WrapDiv>
  );
};

export default Main;
