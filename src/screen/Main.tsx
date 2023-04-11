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
import '../css/post_item.css';
import SearchRank from '../comp/SearchRank';

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

  return (
    <WrapDiv>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 0.73, paddingRight: 50 }}>
          <div>
            <div style={{ border: '2px solid #3127a0', padding: 10, borderRadius: 100, display: 'flex' }}>
              <img style={{ width: 20, height: 20, margin: 'auto 0px auto 15px' }} src={search} alt='BigCo Inc. logo' />
              <input style={{ border: 0, width: '90%', fontSize: 20 }} placeholder='관심있는 내용을 검색해보세요!' />
            </div>
          </div>
          <div style={{ marginTop: 40 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img style={{ width: 32, height: 32, margin: 'auto 0px auto 0px' }} src={best} alt='BigCo Inc. logo' />
                <b style={{ fontSize: 18, marginLeft: 5 }}>토픽 베스트</b>
              </div>
              <div>
                <p>더보기</p>
              </div>
            </div>
            <div style={{ height: 2, background: '#3127a0', marginTop: 13, marginBottom: 10 }} />
            <div>
              {list?.data?.map((item: Post) => {
                return <PostItem {...item} key={item.postId} />;
              })}
            </div>
          </div>
        </div>
        <div style={{ flex: 0.27 }}>
          <SearchRank />
        </div>
      </div>
      {/* <ul>
        <Link to='/product/1'>
          <li>1번상품</li>
        </Link>
        <Link to='/product/2'>
          <li>2번상품</li>
        </Link>
      </ul> */}
    </WrapDiv>
  );
};

export default Main;
