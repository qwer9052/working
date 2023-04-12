import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './screen/Header';
import Main from './screen/Main';
import Product from './screen/Product';
import NotFound from './screen/NotFound';
import Footer from './screen/Footer';
import Login from './screen/Login';
import Join from './screen/Join';
import { Provider as ReduxProvider, useSelector } from 'react-redux';
import { makeStore } from './store/makeStore';
import PostDefail from './screen/PostDetail';
import PostWrite from './screen/PostWrite';
import Loading from './comp/img/loading';
import Navigation from './navigation/navigation';

const App = () => {
  const store = makeStore();

  return (
    <ReduxProvider store={store}>
      <div className='App' style={{}}>
        <Navigation />
      </div>
    </ReduxProvider>
  );
};

export default App;
