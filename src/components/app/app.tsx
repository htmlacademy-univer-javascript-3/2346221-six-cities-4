import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import Page404 from '../../pages/page404/page404';

type AppProps = {
  cardsCount: number;
};

function App({cardsCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage cardsCount = {cardsCount} />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='favorites' element={<FavoritesPage cardsCount = {cardsCount} />} />
          <Route path='offer/:id' element={<OfferPage />} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
