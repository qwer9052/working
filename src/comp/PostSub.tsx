import '../css/post_sub.css';

import arrowRightGray from '../assets/img/arrow_right_gray.svg';
import search from '../assets/img/icon_search_black.svg';
import { COLORS } from '../css/Color';
import PostSubItem from './PostSubItem';

import best from '../assets/img/icon_best.png';
import free from '../assets/img/icon_free.png';
import stock from '../assets/img/icon_stock.png';
import date from '../assets/img/icon_date.png';
import real_estate from '../assets/img/icon_real_estate.png';
import food from '../assets/img/icon_food.png';
import shopping from '../assets/img/icon_shopping.png';
import hobby from '../assets/img/icon_hobby.png';
import pet from '../assets/img/icon_pet.png';
import sports from '../assets/img/icon_sports.png';
import military from '../assets/img/icon_military.png';
import company from '../assets/img/icon_company.png';
import recruitment from '../assets/img/icon_recruitment.png';
import { postType } from '../type/enum';
import { useEffect, useState } from 'react';
import { axiosInstance, axiosPostInstance } from '../util/axiosPlugin';
import { useQuery } from 'react-query';
import { PagingModel } from '../type/pagingModel';
import { Post } from '../type/post';
import { motion } from 'framer-motion';

type posrSub = {
  postType: postType;
};

// ETC = '기타',
// FREE = '자유',
// COMPANY = '회사',
// FOOT = '먹방',
// REAL_ESTATE = '부동산',
// STOCK = '주식/투지',
// DATE = '썸연애',
// HOBBY = '취미',
// SHOPPING = '쇼핑',
// PET = '반려동물',
// SPORTS = '스포츠',
// MILITARY = '군대',
// RECRUITMENT = '채용',

const postTypeImage = [
  {
    value: '기타',
    img: military,
  },
  {
    value: '자유',
    img: free,
  },
  {
    value: '회사',
    img: company,
  },
  {
    value: '먹방',
    img: food,
  },
  {
    value: '부동산',
    img: real_estate,
  },
  {
    value: '주식/투자',
    img: stock,
  },
  {
    value: '썸연애',
    img: date,
  },
  {
    value: '취미',
    img: hobby,
  },
  {
    value: '쇼핑',
    img: shopping,
  },
  {
    value: '반려동물',
    img: pet,
  },
  {
    value: '스포츠',
    img: sports,
  },
  {
    value: '군대',
    img: military,
  },
  {
    value: '채용',
    img: recruitment,
  },
];

const PostSub = (props: posrSub) => {
  const [image, setImage] = useState(null);
  const [list, setList] = useState<PagingModel<Post>>();

  const indexOfS = Object.values(postType).indexOf(props.postType as unknown as postType);
  const key = Object.keys(postType)[indexOfS];

  useEffect(() => {
    //post();
    for (var e of postTypeImage) {
      if (e.value == props.postType) {
        setImage(e.img);
        break;
      }
    }
  }, []);

  const getPost = () => axiosPostInstance.get(`/post/type?page=0&size=5&postType=${key}`);

  const { isLoading, isError, data, error } = useQuery([`type_${key}`], getPost, {
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실패시 재호출 몇번 할지
    onSuccess: (result: any) => {
      // 성공시 호출
      setList(result.data);
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
    <motion.div transition={{ duration: 2 }} initial='hidden' animate='visible' variants={listMotion} className='post_sub_wrap'>
      <motion.div transition={{ duration: 1 }} variants={itemMotion}>
        <div className='post_sub_head'>
          <img style={{ width: 32, height: 32, margin: 'auto 0px auto 0px' }} src={image} alt='BigCo Inc. logo' />
          <b style={{ fontSize: 18, marginLeft: 5 }}>{props.postType}</b>
          <div className='more'>더보기</div>
          <img style={{ width: 16, height: 16, margin: 'auto 0px auto 0px' }} src={arrowRightGray} alt='BigCo Inc. logo' />
        </div>
        <div>
          {list?.data?.map((item: Post) => {
            return <PostSubItem key={'post_sub_' + item.postId + '_'} {...item} />;
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};
export default PostSub;
