import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../screen/Header';
import Main from '../screen/Main';
import Footer from '../screen/Footer';
import Login from '../screen/Login';
import Join from '../screen/Join';
import PostDefail from '../screen/PostDetail';
import NotFound from '../screen/NotFound';
import { useSelector } from 'react-redux';
import Loading from '../comp/img/loading';

const Navigation = () => {
  const loading = useSelector((state: any) => state.loadingReducer.loading);
  console.log('loading : ' + loading);
  return (
    <>
      <Loading setShow={loading} />

      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          ></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/join' element={<Join />}></Route>
          {/* <Route
              path='/product/:productId'
              element={
                <>
                  <Header />
                  <Product />
                  <Footer />
                </>
              }
            ></Route> */}
          <Route
            path='/post/:postId'
            element={
              <>
                <Header />
                <PostDefail />
                <Footer />
              </>
            }
          ></Route>
          {/* 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고, 일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 됩니다. */}
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
